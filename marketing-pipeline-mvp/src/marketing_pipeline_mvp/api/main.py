from __future__ import annotations

import os
import re
from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles

from ..kore import get_agent_ai, get_search_ai, get_xo_client
from ..kore.web_sdk import web_sdk_config
from ..models import Analytics, BookRequest, ChatRequest, ChatResponse, LeadCreate
from ..pipeline.nurture import nurture_sequence
from ..pipeline.scoring import score_lead
from .crm import get_singleton_crm

app = FastAPI(title="Marketing Pipeline MVP - Kore.ai Lead-to-Meeting", version="0.1.0")

# Kore.ai framework clients (XO Platform, Search AI, Agent AI) - live if env set, else mock
# See src/marketing_pipeline_mvp/kore/* and docs/06-kore-framework-usage.md


@app.get("/health")
def health():
    xo = get_xo_client()
    search = get_search_ai()
    agent = get_agent_ai()
    return {
        "status": "ok",
        "kore": {"xo": xo.mode, "search_ai": search.mode, "agent_ai": agent.mode, "web_sdk": web_sdk_config()["mode"]},
        "kore_sim": "XO+SearchAI+AgentAI",
        "version": "0.1.0",
    }


@app.get("/kore/status")
def kore_status():
    xo = get_xo_client()
    search = get_search_ai()
    agent = get_agent_ai()
    return {
        "xo_platform": {"mode": xo.mode, "bot_id": xo.bot_id or "mock-marketing-pipeline-bot", "env": "KORE_BOT_ID/KORE_CLIENT_ID"},
        "search_ai": {"mode": search.mode, "index_id": search.index_id or "kb-marketing-pipeline", "env": "KORE_SEARCHAI_API_KEY/KORE_SEARCHAI_INDEX_ID"},
        "agent_ai": {"mode": agent.mode, "tools": list(agent.tools.keys()), "env": "KORE_AGENTAI_API_KEY"},
        "web_sdk": web_sdk_config(),
        "kore_studio": {"bot": "kore-studio/bot.json", "dialogs": "kore-studio/dialogs/LeadQualification.json", "entities": "kore-studio/entities/entities.json", "kb": "kore-studio/knowledge/kb-config.json"},
        "how_to_go_live": "Set KORE_* env and restart; see docs/06-kore-framework-usage.md",
    }


@app.post("/chat", response_model=ChatResponse)
def chat(req: ChatRequest):
    xo = get_xo_client()
    search = get_search_ai()
    session = xo.create_session(channel="web")
    nlp = xo.detect_intent(req.message, session)
    intent, conf = nlp.intent, nlp.confidence
    search_res = search.search(req.message)
    chunks = search_res.chunks
    # Kore.ai XO -> Search AI grounded answer (strict RAG, fallback if low confidence)
    # Search AI confidence <0.7 triggers human handoff per bot.json
    if search_res.confidence < 0.7 and search_res.source == "live":
        # Real Search AI would trigger Agent Transfer; we simulate handoff
        reply = "Let me connect you to a human SDR — I don't have a confident answer for that in the KB."
        return ChatResponse(reply=reply, intent=intent, confidence=conf, ask_for_lead=True, kb_chunks=chunks)
    if intent == "pricing_inquiry":
        reply = (
            "Our Growth plan is $199/mo for up to 10k visitors with Web+WhatsApp, HubSpot sync, and 7-day nurture. "
            "Starter is $49/mo. I can give an exact quote — could you share your name, email, company and team size?"
        )
        ask = True
    elif intent == "book_meeting":
        reply = "Happy to book! Please share your name, email, company, and preferred timeline (e.g., 'next week') and I'll offer slots."
        ask = True
    elif intent == "greeting":
        reply = "Hi! I'm your Lead-to-Meeting agent (Kore.ai XO simulation). Ask me about pricing, features, or say 'book a demo' — I'll qualify and book you if you're a fit."
        ask = False
    else:
        # grounded on KB first chunk
        grounded = chunks[0][:280] if chunks else "I can help with that."
        reply = grounded + "\n\nIf you share your work email & company, I can check fit and book a slot if relevant."
        ask = True
        if conf < 0.7:
            reply += " (Low confidence — I can connect you to a human SDR if you'd prefer.)"
    return ChatResponse(reply=reply, intent=intent, confidence=conf, ask_for_lead=ask, kb_chunks=chunks)

@app.post("/lead")
def create_lead(payload: LeadCreate):
    score, band, bant = score_lead(payload)
    from ..models import Lead

    lead = Lead(
        name=payload.name,
        email=payload.email,
        company=payload.company,
        phone=payload.phone,
        industry=payload.industry,
        company_size=payload.company_size,
        timeline=payload.timeline,
        budget_band=payload.budget_band,
        pain_point=payload.pain_point,
        source=payload.source,
        bant=bant,
        score=score,
        band=band,
        raw_message=payload.raw_message,
    )
    # Kore.ai Agent AI orchestration: tools + branching (Hot->book, Warm->nurture)
    from ..kore import get_agent_ai

    agent = get_agent_ai()
    # Agent AI creates CRM contact via tool, then orchestrates next action
    # Keep direct CRM for backward compat, but also show Agent AI provenance
    crm = get_singleton_crm()
    # Use Agent AI orchestration to demonstrate framework usage
    orch = agent.orchestrate(lead)
    # orch already created CRM via agent tool which wraps get_singleton_crm; ensure id
    # If mock mode, orch contains slots/nurture; use it for response
    if band.value == "Hot":
        slots = orch.get("slots", ["2026-09-30T15:00:00", "2026-10-01T11:00:00", "2026-10-02T14:00:00"])
        return {
            "lead_id": lead.id,
            "score": score,
            "band": band.value,
            "bant": bant.model_dump(),
            "next_action": "book_meeting",
            "slots": slots,
            "message": f"Great fit! You're scored {band.value} ({score}/100). Pick a slot to book.",
            "slack_notified": True,
            "via": "agent_ai.orchestrate (Kore.ai Agent AI)",
            "kore": {"xo": get_agent_ai().mode, "agent": agent.mode},
        }
    elif band.value == "Warm":
        seq = orch.get("nurture") or nurture_sequence(lead)
        return {
            "lead_id": lead.id,
            "score": score,
            "band": band.value,
            "bant": bant.model_dump(),
            "next_action": "nurture",
            "nurture": seq,
            "message": f"Thanks {lead.name}! You're {band.value} ({score}/100). Enrolled in 7-day personalized nurture. Check email Day1.",
            "via": "agent_ai.orchestrate (Kore.ai Agent AI)",
        }
    else:
        seq = orch.get("nurture") or nurture_sequence(lead)
        return {
            "lead_id": lead.id,
            "score": score,
            "band": band.value,
            "bant": bant.model_dump(),
            "next_action": "newsletter",
            "nurture": seq,
            "message": f"Thanks! You're {band.value} ({score}/100). Added to newsletter. Reply if needs change.",
            "via": "agent_ai.orchestrate (Kore.ai Agent AI)",
        }

@app.post("/book")
def book(req: BookRequest):
    # Via Kore.ai Agent AI tool book_meeting
    from ..kore import get_agent_ai

    agent = get_agent_ai()
    res = agent.execute("book_meeting", lead_id=req.lead_id, slot=req.slot)
    if not res.success:
        raise HTTPException(status_code=404 if "not found" in str(res.data).lower() else 400, detail=res.data.get("error", "Book failed"))
    # fetch lead for message
    from .crm import get_singleton_crm

    crm = get_singleton_crm()
    store = getattr(crm, "store", {})
    lead = store.get(req.lead_id) if isinstance(store, dict) else None
    dt = res.data["booked_at"]
    return {"lead_id": req.lead_id, "booked_at": dt, "message": f"Booked for {lead.name if lead else req.lead_id} at {dt} - invite sent + Slack notified (via {res.source}).", "via": "agent_ai.book_meeting"}

@app.get("/analytics", response_model=Analytics)
def analytics():
    crm = get_singleton_crm()
    store = getattr(crm, "store", {})
    leads = list(store.values()) if isinstance(store, dict) else []
    hot = sum(1 for l in leads if l.band.value == "Hot")
    warm = sum(1 for l in leads if l.band.value == "Warm")
    cold = sum(1 for l in leads if l.band.value == "Cold")
    meetings = sum(1 for l in leads if l.meeting_booked_at)
    rate = (meetings / len(leads) * 100) if leads else 0
    # also count Hot that booked vs total Hot
    mql_to_sql = (meetings / hot * 100) if hot else 0
    return Analytics(
        total_leads=len(leads),
        hot=hot,
        warm=warm,
        cold=cold,
        meetings_booked=meetings,
        response_time_avg_sec=42.0,
        mql_to_sql_rate=round(mql_to_sql, 1),
    )

@app.get("/leads")
def list_leads():
    crm = get_singleton_crm()
    store = getattr(crm, "store", {})
    leads = list(store.values()) if isinstance(store, dict) else []
    return [l.model_dump() for l in leads]

# --- Web Widget UI (Taste-compliant: no purple gradient, no bento, restrained) ---
HTML = r"""
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Lead-to-Meeting Agent — Kore.ai MVP</title>
<style>
  :root{--bg:#f6f7f9;--card:#ffffff;--border:#e6e8eb;--text:#0f172a;--muted:#475569;--accent:#0f766e;--accent-2:#115e59;--radius:12px}
  *{box-sizing:border-box} body{margin:0;font-family: ui-sans, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; color:var(--text); background:var(--bg)}
  header{max-width:1100px;margin:0 auto;padding:24px 20px;display:flex;align-items:center;justify-content:space-between}
  header h1{font-size:18px;margin:0;letter-spacing:-0.02em}
  header .tag{font-size:12px;color:var(--muted);border:1px solid var(--border);padding:6px 10px;border-radius:999px;background:var(--card)}
  .wrap{max-width:1100px;margin:0 auto;padding:0 20px 40px;display:grid;grid-template-columns:1.2fr 0.8fr;gap:20px}
  @media(max-width:900px){.wrap{grid-template-columns:1fr}}
  .card{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:18px}
  .card h2{font-size:15px;margin:0 0 8px}
  .muted{color:var(--muted);font-size:13px;line-height:1.5}
  #chat{height:420px;overflow:auto;border:1px solid var(--border);border-radius:10px;padding:12px;background:#fbfcfe;display:flex;flex-direction:column;gap:10px}
  .bubble{max-width:82%;padding:10px 12px;border-radius:12px;font-size:14px;line-height:1.45;border:1px solid var(--border)}
  .bot{background:var(--card)} .user{background:#0f172a;color:white;margin-left:auto;border-color:#0f172a}
  .row{display:flex;gap:8px;margin-top:10px}
  .row input{flex:1;padding:12px 12px;border:1px solid var(--border);border-radius:10px;font-size:14px}
  .row button{padding:12px 14px;border:0;border-radius:10px;background:var(--accent);color:white;font-weight:600;cursor:pointer}
  .row button:hover{background:var(--accent-2)}
  label{font-size:12px;color:var(--muted);display:block;margin:8px 0 4px}
  input, select{width:100%;padding:10px;border:1px solid var(--border);border-radius:10px;font-size:13px}
  .grid2{display:grid;grid-template-columns:1fr 1fr;gap:10px}
  .kpi{display:flex;gap:10px;flex-wrap:wrap;margin-top:10px}
  .kpi div{flex:1 1 90px;background:var(--bg);border:1px solid var(--border);border-radius:10px;padding:10px;text-align:center}
  .kpi b{font-size:18px;display:block}
  .kpi span{font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:0.06em}
  a{color:var(--accent)}
  .pill{font-size:11px;border:1px solid var(--border);padding:4px 8px;border-radius:999px}
  pre{white-space:pre-wrap;word-break:break-word;font-size:12px;background:var(--bg);border:1px solid var(--border);padding:10px;border-radius:10px}
</style>
</head>
<body>
<header>
  <h1>Lead-to-Meeting Agent <span style="color:var(--muted);font-weight:400">· Kore.ai XO · D.A.R.E</span></h1>
  <span class="tag">Web Widget Only · UC1+UC3 · Meetings Booked</span>
</header>
<div class="wrap">
  <div>
    <div class="card">
      <h2>Chat — asks BANT, grounds on KB, scores Hot/Warm/Cold</h2>
      <p class="muted">Try: “pricing for 50 users?” → then fill lead form → see Hot books, Warm nurtures.</p>
      <div id="chat"></div>
      <div class="row">
        <input id="msg" placeholder="Type: pricing for 50 users?"/>
        <button id="send">Send</button>
      </div>
      <div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap">
        <button class="pill" onclick="quick('pricing for 50 users?')">pricing for 50 users?</button>
        <button class="pill" onclick="quick('book a demo next week')">book a demo</button>
        <button class="pill" onclick="quick('does it integrate with HubSpot?')">HubSpot integration?</button>
      </div>
    </div>
    <div class="card" style="margin-top:16px">
      <h2>Activity & KB grounding</h2>
      <pre id="debug">No activity yet.</pre>
    </div>
  </div>
  <div>
    <div class="card">
      <h2>Qualify & Book</h2>
      <p class="muted">BANT: Budget, Authority, Need, Timeline. Hot (≥75) books instantly.</p>
      <label>Name</label><input id="name" value="Asha Patel"/>
      <label>Email</label><input id="email" value="asha@acme.com"/>
      <div class="grid2">
        <div><label>Company</label><input id="company" value="Acme"/></div>
        <div><label>Size</label><input id="size" type="number" value="75"/></div>
      </div>
      <div class="grid2">
        <div><label>Industry</label><select id="industry"><option>SaaS</option><option>Fintech</option><option>Healthcare</option><option>Ecommerce</option><option>Other</option></select></div>
        <div><label>Timeline</label><input id="timeline" value="2 weeks"/></div>
      </div>
      <label>Budget band</label><input id="budget" value="$5k"/>
      <label>Pain point</label><input id="pain" value="slow lead response"/>
      <button onclick="qualify()" style="margin-top:12px;width:100%;padding:12px;border:0;border-radius:10px;background:var(--accent);color:white;font-weight:700;cursor:pointer">Qualify Lead →</button>
      <pre id="leadOut" style="margin-top:10px">Not yet qualified.</pre>
      <div id="slots"></div>
    </div>
    <div class="card" style="margin-top:16px">
      <h2>Analytics</h2>
      <p class="muted">Meetings Booked is primary success. Fast 5-min response lifts conversion.</p>
      <div class="kpi">
        <div><b id="k_total">0</b><span>Total</span></div>
        <div><b id="k_hot">0</b><span>Hot</span></div>
        <div><b id="k_warm">0</b><span>Warm</span></div>
        <div><b id="k_meet">0</b><span>Meetings</span></div>
      </div>
      <pre id="analyticsOut"></pre>
      <button onclick="refreshAnalytics()" style="margin-top:8px;width:100%;padding:10px;border:1px solid var(--border);border-radius:10px;background:var(--card);cursor:pointer">Refresh</button>
    </div>
  </div>
</div>
<script>
const chatEl=document.getElementById('chat'), debugEl=document.getElementById('debug');
function addBubble(text, who){const d=document.createElement('div');d.className='bubble '+(who==='user'?'user':'bot');d.textContent=text;chatEl.appendChild(d);chatEl.scrollTop=chatEl.scrollHeight}
function quick(t){document.getElementById('msg').value=t; send()}
async function send(){
  const m=document.getElementById('msg').value.trim(); if(!m) return;
  addBubble(m,'user'); document.getElementById('msg').value='';
  const r=await fetch('/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:m})});
  const j=await r.json(); addBubble(j.reply,'bot'); debugEl.textContent='intent: '+j.intent+' ('+j.confidence+')\nkb: '+(j.kb_chunks[0]||'').slice(0,220);
}
document.getElementById('send').onclick=send;
document.getElementById('msg').addEventListener('keydown',e=>{if(e.key==='Enter') send()});
async function qualify(){
  const payload={name:document.getElementById('name').value, email:document.getElementById('email').value, company:document.getElementById('company').value, company_size: parseInt(document.getElementById('size').value)||null, industry:document.getElementById('industry').value, timeline:document.getElementById('timeline').value, budget_band:document.getElementById('budget').value, pain_point:document.getElementById('pain').value, source:'web', raw_message:'web widget'};
  const r=await fetch('/lead',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
  const j=await r.json();
  document.getElementById('leadOut').textContent=JSON.stringify(j,null,2);
  const slotsEl=document.getElementById('slots'); slotsEl.innerHTML='';
  if(j.next_action==='book_meeting'){
    j.slots.forEach(s=>{const b=document.createElement('button');b.textContent='Book '+s; b.style='margin:4px;padding:8px;border:1px solid #e6e8eb;border-radius:8px;cursor:pointer'; b.onclick=async()=>{const rr=await fetch('/book',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({lead_id:j.lead_id,slot:s})}); const jj=await rr.json(); alert(jj.message); refreshAnalytics()}; slotsEl.appendChild(b)})
  }
  if(j.nurture) { addBubble('Nurture preview: '+ j.nurture[0].subject, 'bot') }
  refreshAnalytics()
}
async function refreshAnalytics(){
  const r=await fetch('/analytics'); const j=await r.json();
  document.getElementById('k_total').textContent=j.total_leads;
  document.getElementById('k_hot').textContent=j.hot;
  document.getElementById('k_warm').textContent=j.warm;
  document.getElementById('k_meet').textContent=j.meetings_booked;
  document.getElementById('analyticsOut').textContent=JSON.stringify(j,null,2);
}
addBubble("Hi! I'm your Lead-to-Meeting agent (Kore.ai XO simulation). Ask about pricing or type 'book a demo'.","bot");
refreshAnalytics();
</script>
</body>
</html>
"""

@app.get("/", response_class=HTMLResponse)
def home():
    return HTMLResponse(HTML)

# Static for future assets
# app.mount("/static", StaticFiles(directory="static"), name="static")
