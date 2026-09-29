# Architecture - Lead-to-Meeting AI Agent (D.A.R.E Architect Output)

## 1. High-Level System
```
[Visitor: Web SDK / WhatsApp] 
      |
[Kore.ai XO Platform] -- Dialog + LLM (Entity Extraction, Sentiment)
      |
      +-- [Search AI - RAG] -> Product KB (PDFs, Pricing, FAQs, Case Studies) - Grounded only
      |
      +-- [Agent AI - Tools] -> score_lead(), create_hubspot_contact(), send_email(), send_whatsapp(), book_calendar(), notify_slack()
      |
[Integration Hub] -> HubSpot/Salesforce | Gmail/SendGrid | WhatsApp BSP (Twilio/360dialog) | Google Calendar/Calendly | Slack
      |
[Data Layer] -> Postgres (lead, scoring log) + HubSpot (source of truth) + Analytics (Mixpanel/Looker)
```

## 2. Conversation Flow (UC1)

```mermaid
flowchart TD
    A[User: Hi, pricing for 50 users?] --> B[Search AI: Fetch pricing chunk + answer]
    B --> C[Agent: To give exact quote, can I get: Name, Email, Company?]
    C --> D[User provides]
    D --> E[Agent: How many employees? Industry? Timeline? Budget band?]
    E --> F[LLM Extract: {company_size, industry, timeline, budget}]
    F --> G[score_lead: BANT 4/4?]
    G -->|Hot| H[create_hubspot_contact + book_calendar + notify_slack]
    G -->|Warm| I[Enroll Nurture Sequence]
    G -->|Cold| J[Newsletter opt-in]
    H --> K[Confirm: Booked for Tue 3pm, calendar invite sent]
```

**State Machine in Kore.ai Storyboard:** 1 Welcome Node -> 2 KB Answer Node (Search AI) -> 3 Lead Capture Form (Entity) -> 4 BANT Questions (Conditional) -> 5 Scoring Node (JS + LLM) -> 6 Branch (Hot/Warm/Cold) -> 7 Action Node (Tool)

## 3. Data Model
```python
Lead {
  id: uuid,
  name, email, company, phone,
  industry, company_size, timeline, budget_band, pain_point,
  source: web|whatsapp|campaign,
  score: 0-100, band: Hot|Warm|Cold,
  bant: {budget: bool, authority: bool, need: bool, timeline: bool},
  meeting_booked_at: datetime | null,
  crm_id: hubspot_id,
  created_at
}
ScoringRule {
  Hot: BANT >=3 AND budget==true AND timeline<30d
  Warm: BANT 2-3
  Cold: BANT <2 OR bad-fit industry
}
```

## 4. Integration Spec
| Target | Method | Auth | MVP Scope |
|---|---|---|---|
| HubSpot | REST `/crm/v3/objects/contacts` + `/deals` | Private App Token | Create contact, create deal, update lifecycle stage |
| Salesforce alt | REST `/services/data/v59.0/sobjects/Lead` | OAuth | Same as HubSpot (adapter pattern) |
| Email | SendGrid / Gmail API | API Key | Nurture Day1/3/7 |
| WhatsApp | 360dialog / Twilio | API Key | Nurture + notifications |
| Calendar | Google Calendar or Calendly embed | OAuth | Book meeting, return slot list |
| Slack | Incoming webhook | Webhook URL | Notify #sdr-hot-leads |
| KB | File upload -> Search AI ingestion | Kore.ai Console | Pricing PDF, FAQs, 3 case studies |

**Adapter:** `CRMProvider` interface in code so HubSpot <-> Salesforce swap without flow change.

## 5. RAG & Grounding (Anti-Hallucination)
- Search AI indexed chunks: 500 tokens, overlap 50, embedding: Kore.ai default
- Prompt guard: "Answer ONLY from provided context. If not in context, say 'Let me connect you to a human' and trigger handoff"
- Confidence <0.7 -> Human handoff
- PII: Email/phone masked in logs

## 6. Non-Functional
- Latency: <1.5s for KB answer, <2s for scoring
- Availability: Kore.ai Cloud 99.9%, fallback form if bot down
- Security: No secrets in repo, env via Kore.ai vault / .env, GDPR opt-in for nurture
- Language: EN only MVP, Kore.ai multi-language pack for Phase 2

## 7. Deployment Topology (MVP)

**This repo now implements BOTH - REAL Kore.ai framework with live-first/mock-fallback:**

- **Mock (default, no Kore.ai account):** FastAPI + `src/marketing_pipeline_mvp/kore/*` runs locally: `xo_client.py` (session/intent/entity), `search_ai.py` (RAG over `data/kb/*.md`), `agent_ai.py` (tools). Same interfaces as live.
- **Live (with Kore.ai account):** Set `KORE_BOT_ID`, `KORE_CLIENT_ID/SECRET`, `KORE_SEARCHAI_API_KEY/INDEX_ID` → each client in `src/marketing_pipeline_mvp/kore/*` calls real REST (`/api/1.1/rest/bot/{id}/getNlpData`, `/api/searchai/search`, `/api/agentai/execute`) then falls back to mock on failure. See `docs/06-kore-framework-usage.md` + `GET /kore/status`.
- **Kore.ai Studio Import:** `kore-studio/bot.json` + `kore-studio/dialogs/LeadQualification.json` + `entities.json` + `knowledge/kb-config.json` + `web-sdk-snippet.html` are 1-click importable to Kore.ai XO Console (Enterprise). Same flows run natively after publish.

Check mode: `curl http://127.0.0.1:8000/kore/status` → shows `mock (local)` vs `live (Kore.ai ...)`.

## 8. File Map in This Repo
```
src/marketing_pipeline_mvp/
  kore/xo_client.py   -> Kore.ai XO Platform: session, NLU intent, entities, JWT, dialog state
  kore/search_ai.py   -> Kore.ai Search AI: indexed KB, retrieval, grounding threshold 0.7
  kore/agent_ai.py    -> Kore.ai Agent AI: tools registry + orchestration (Hot→book, Warm→nurture)
  kore/web_sdk.py     -> Kore.ai Web SDK snippet generator (live vs local widget)
  pipeline/scoring.py -> BANT scoring logic (also exposed as Agent AI tool score_lead)
  pipeline/nurture.py -> Day1/3/7 sequence logic (also Agent AI tool send_nurture)
  api/main.py         -> FastAPI wired to kore/*: /chat via XO+Search AI, /lead via Agent AI, /kore/status
  api/crm.py          -> HubSpot/Salesforce adapter (Agent AI tool create_crm_contact)
  data/kb/            -> Search AI indexed chunks (kb-config.json)
kore-studio/
  bot.json, dialogs/LeadQualification.json, entities/entities.json, knowledge/kb-config.json, web-sdk-snippet.html
```

## 9. Decisions
- FastAPI over Streamlit: Need API-first to mimic Kore.ai tool calls and allow WhatsApp webhook
- Pydantic for Lead model: Matches Kore.ai entity extraction contract
- No LangChain: Overkill for MVP, direct prompt + Search AI simulation keeps complexity low; can add later
