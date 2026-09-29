# Real Kore.ai Framework Usage - This MVP

> **Goal:** Show you didn't just build a generic chatbot, but used Kore.ai's actual platform concepts.

## 1. What Kore.ai Framework Means Here
Kore.ai is not one library. It's **3 engines + 1 SDK** that this MVP uses:

| Kore.ai Engine | What it does | File in this repo that uses it | Live mode env |
|---|---|---|---|
| **XO Platform** (Dialog/NLP) | Session, Intent detection, Entity extraction, Dialog Task orchestration (`Welcome -> KB_Answer -> Capture_Lead -> Score_BANT -> Branch`) | `src/marketing_pipeline_mvp/kore/xo_client.py` + `kore-studio/dialogs/LeadQualification.json` | `KORE_BOT_ID`, `KORE_CLIENT_ID`, `KORE_CLIENT_SECRET`, `KORE_BASE_URL` |
| **Search AI** (RAG) | Ground answers ONLY on KB chunks (`data/kb/*.md`), topK 2, threshold 0.7, low-confidence → human handoff | `src/marketing_pipeline_mvp/kore/search_ai.py` + `kore-studio/knowledge/kb-config.json` | `KORE_SEARCHAI_API_KEY`, `KORE_SEARCHAI_INDEX_ID` |
| **Agent AI** (Actions) | Tools: `score_lead`, `create_crm_contact`, `book_meeting`, `send_nurture`, `notify_slack` + goal orchestration Hot→book Warm→nurture | `src/marketing_pipeline_mvp/kore/agent_ai.py` | `KORE_AGENTAI_API_KEY` + `SLACK_WEBHOOK_URL`, `HUBSPOT_TOKEN` |
| **Web SDK** | Embed on landing page, connects to XO bot via JWT | `src/marketing_pipeline_mvp/kore/web_sdk.py` + `kore-studio/web-sdk-snippet.html` | Same as XO |

## 2. How This MVP Calls Kore.ai (Real vs Mock)

All three clients follow **same pattern**: try live Kore.ai REST if creds present, else **explicit mock** with same interface.

```python
from marketing_pipeline_mvp.kore import get_xo_client, get_search_ai, get_agent_ai

xo = get_xo_client()        # xo.mode == "live (Kore.ai XO Platform)" or "mock (local XO simulation)"
search = get_search_ai()    # search.mode == "live (Kore.ai Search AI)" or "mock (local KB)"
agent = get_agent_ai()      # agent.mode == "live (Kore.ai Agent AI)" or "mock (local tools)"

# Example flow (mirrors Kore.ai Studio dialog):
session = xo.create_session(channel="web")
nlp = xo.detect_intent("pricing for 50 users?", session)
chunks = search.search("pricing for 50 users?")
score_tool = agent.execute("score_lead", payload={...})
```

Check mode live:
```
GET /kore/status → { xo: "mock", search: "mock", agent: "mock", note: "Set KORE_* env for live" }
```

## 3. D.A.R.E → Kore.ai Mapping

| D.A.R.E Phase | Kore.ai Artefact in this repo | Where to see it |
|---|---|---|
| **D Discover** | Use-case Canvas, Value vs Feas matrix | `docs/02-usecase-finding.md` |
| **A Architect** | Bot definition `bot.json`, Dialog Task `LeadQualification.json`, Entities, KB config, Architecture | `kore-studio/*`, `docs/03-architecture.md` |
| **R Realize** | XO client, Search AI, Agent AI services + FastAPI that orchestrates them + `/chat` `/lead` `/book` | `src/marketing_pipeline_mvp/kore/*`, `src/marketing_pipeline_mvp/api/main.py` |
| **E Expand** | Publish to Kore.ai Studio + Web SDK snippet + Campaigns for nurture | `artifacts/kore-ai-import.json`, `kore-studio/web-sdk-snippet.html` |

## 4. Running LIVE vs MOCK

**Mock (no Kore.ai account, this repo default):**
```bash
cd marketing-pipeline-mvp
UV_CACHE_DIR=/tmp/uv-cache uv run uvicorn marketing_pipeline_mvp.api.main:app --reload --port 8000
curl http://127.0.0.1:8000/kore/status
# → all mock, works offline
```

**Live (with Kore.ai account):**
```bash
export KORE_BOT_ID="st-xxxx-your-bot"
export KORE_CLIENT_ID="cs-xxxx"
export KORE_CLIENT_SECRET="xxxx"
export KORE_SEARCHAI_API_KEY="xxxx"
export KORE_SEARCHAI_INDEX_ID="kb-marketing-pipeline"
export HUBSPOT_TOKEN="pat-xxx"
export SLACK_WEBHOOK_URL="https://hooks.slack.com/..."

UV_CACHE_DIR=/tmp/uv-cache uv run uvicorn marketing_pipeline_mvp.api.main:app --reload --port 8000
# Now /kore/status shows live, and each call hits Kore.ai REST then falls back if needed
```

**Import to Studio:**
1. Kore.ai XO Console > New Bot > Import `kore-studio/bot.json`
2. Import dialogs `kore-studio/dialogs/LeadQualification.json` + entities
3. Search AI > New Collection `kb-marketing-pipeline` > Upload `data/kb/*` + `kore-studio/knowledge/kb-config.json`
4. Publish > Copy Bot ID / Client ID into `.env` > restart MVP → live mode

## 5. What Makes This "Real" Kore.ai vs Generic
- **Not a thin OpenAI wrapper:** XO Platform provides session, dialog state, entity validation, and handoff — not just prompt.
- **Grounding via Search AI:** Strict RAG, not freeform LLM. Threshold + handoff is Kore.ai Search AI's pattern.
- **Agent AI tools, not just code:** `score_lead` etc are registered as Agent AI tools with XO orchestrating *when* they run (Hot vs Warm branch), not adhoc if/else.
- **Implements D.A.R.E gates:** Each phase has a Kore.ai artefact and a `GET /kore/status` mode check.

## 6. Endpoints to Prove Framework Usage

| Endpoint | Proves |
|---|---|
| `GET /kore/status` | Which engines are live vs mock, env needed |
| `POST /chat` | Uses XO intent + Search AI grounded chunks (see `kb_chunks` + `confidence` + `source`) |
| `POST /lead` | Uses Agent AI orchestration (see `via: "agent_ai.orchestrate"` in response) |
| `GET /health` | Reports Kore modes |
| `kore-studio/*` | Importable to real Kore.ai Studio — not just local |

## 7. Next to Make it *More* Live
- Connect your real HubSpot `HUBSPOT_TOKEN` → `POST /lead` will create real contacts (currently MockCRM with fallback).
- Add your Kore.ai `KORE_BOT_ID` etc → `/chat` will hit real NLU before local fallback.
- The code already tries live first; just set env and restart.
