# Marketing Pipeline MVP - Lead-to-Meeting AI Agent
**D.A.R.E Framework (Sandeep Swadia, Kore.ai) | Real Kore.ai XO + Search AI + Agent AI**

## What is this?
An **MVP that closes the marketing pipeline leak**: Visitors ask questions → AI qualifies them with BANT → Scores Hot/Warm/Cold → Hot books meeting instantly + CRM, Warm enters 7-day nurture, Cold suppressed. Grounded on KB via **Kore.ai Search AI**, orchestrated by **Kore.ai XO Platform** dialogs + **Agent AI** tools.

**MVP Scope:** UC1 (Lead Capture & Qualification) + UC3 (Autonomous Nurture) = "Lead-to-Meeting AI Agent" — Web Widget Only, success = **Meetings Booked**

## Real Kore.ai Framework Usage (not just simulation)

This MVP uses Kore.ai as a *framework*, not a wrapper:

| Kore.ai Engine | File that uses it | Proves it's real | Live env |
|---|---|---|---|
| **XO Platform** - Dialog Task, NLU intent, Entity, Session, Human Handoff | `src/marketing_pipeline_mvp/kore/xo_client.py` → `kore-studio/dialogs/LeadQualification.json` | `POST /chat` returns `intent` via `xo.detect_intent()`, `GET /kore/status` shows mode | `KORE_BOT_ID`, `KORE_CLIENT_ID`, `KORE_CLIENT_SECRET` |
| **Search AI** - RAG, indexed KB, threshold 0.7, grounding | `src/marketing_pipeline_mvp/kore/search_ai.py` → `kore-studio/knowledge/kb-config.json` | `POST /chat` returns `kb_chunks` via `search.search()`, low-conf → handoff | `KORE_SEARCHAI_API_KEY`, `KORE_SEARCHAI_INDEX_ID` |
| **Agent AI** - Tools `score_lead`, `create_crm_contact`, `book_meeting`, `send_nurture`, `notify_slack` + orchestration Hot→book Warm→nurture | `src/marketing_pipeline_mvp/kore/agent_ai.py` | `POST /lead` returns `via: agent_ai.orchestrate`, `POST /book` via `agent.execute("book_meeting")` | `KORE_AGENTAI_API_KEY`, `HUBSPOT_TOKEN`, `SLACK_WEBHOOK_URL` |
| **Web SDK** | `src/marketing_pipeline_mvp/kore/web_sdk.py` → `kore-studio/web-sdk-snippet.html` | Snippet live when creds set, else local widget | Same as XO |

All 3 clients are **live-first, mock-fallback** with same interface — see `GET /kore/status` + `docs/06-kore-framework-usage.md`.

## Configure (`.env`) — how to fill all vars

You didn't see a `.env` — now it's there. **Copy example → fill → restart.**

```bash
cd marketing-pipeline-mvp
ls -la .env*   # .env.example (committed) + .env (gitignored, your secrets)
cat .env.example   # all vars with comments
cp .env.example .env  # first time
nano .env             # or code .env
```

| Var | Where to get | Required? |
|---|---|---|
| `KORE_BOT_ID` `KORE_CLIENT_ID` `KORE_CLIENT_SECRET` | Kore.ai XO Console > Bot Builder > Channels > Web/Mobile Client > App Settings | For live XO + Web SDK |
| `KORE_SEARCHAI_API_KEY` `KORE_SEARCHAI_INDEX_ID` | Search AI Console > Collections > kb-marketing-pipeline > API | For live Search AI |
| `KORE_AGENTAI_API_KEY` | Agent AI Console > API | For live Agent AI |
| `HUBSPOT_TOKEN` | HubSpot > Settings > Integrations > Private Apps > Create token | For real CRM (else MockCRM) |
| `SLACK_WEBHOOK_URL` | Slack > Apps > Incoming Webhooks > #sdr-hot-leads | For Hot slack notify |

Leave empty → **mock mode** (works offline). Set them → **live mode** (`GET /kore/status` flips to `live`). See `src/marketing_pipeline_mvp/config.py` (pydantic-settings loads `.env`).

### Quick Start (Project-Local .venv via uv)

Prereq: Python 3.11, [uv](https://docs.astral.sh/uv/) installed

```bash
cd marketing-pipeline-mvp
# .venv already exists at ./marketing-pipeline-mvp/.venv (Python 3.11.15)
cp .env.example .env   # first time only
UV_CACHE_DIR=/tmp/uv-cache uv sync
UV_CACHE_DIR=/tmp/uv-cache uv run uvicorn marketing_pipeline_mvp.api.main:app --reload --port 8000
# or without uv:
./.venv/bin/python -m uvicorn marketing_pipeline_mvp.api.main:app --reload --port 8000
```
Open: **http://127.0.0.1:8000** → Chat “pricing for 50 users?” → Fill BANT → Hot books, Warm nurtures.

Check Kore modes:
```bash
curl http://127.0.0.1:8000/health
curl http://127.0.0.1:8000/kore/status  # shows which vars are live vs mock + which env to set
```

### Live Kore.ai mode (fill .env, not export)
```bash
# Edit .env:
# KORE_BOT_ID=st-xxxx
# KORE_CLIENT_ID=cs-xxxx
# KORE_CLIENT_SECRET=xxxx
# KORE_SEARCHAI_API_KEY=xxxx
# KORE_SEARCHAI_INDEX_ID=kb-marketing-pipeline
# HUBSPOT_TOKEN=pat-xxx
# SLACK_WEBHOOK_URL=https://hooks.slack.com/...

UV_CACHE_DIR=/tmp/uv-cache uv run uvicorn marketing_pipeline_mvp.api.main:app --reload --port 8000
# /kore/status now shows live, /chat hits Kore.ai REST then falls back to mock if needed
# Alternative: export vars in shell before run - also works (os.getenv fallback)
```

Import to Kore.ai Studio:
1. XO Console → New Bot → Import `kore-studio/bot.json` + `kore-studio/dialogs/LeadQualification.json` + `entities.json`
2. Search AI → New Collection `kb-marketing-pipeline` → Upload `data/kb/*`
3. Copy Bot ID / Client ID to `.env` → restart → live mode.

## Project Structure
```
marketing-pipeline-mvp/
├── .venv/                          # Project-local env (Python 3.11)
├── .agents/plans/2026-09-28-dare-mvp.md
├── docs/
│   ├── 00-DARE-framework.md
│   ├── 01-research-market.md
│   ├── 02-usecase-finding.md
│   ├── 03-architecture.md
│   ├── 04-mvp-plan.md
│   ├── 05-validation.md
│   └── 06-kore-framework-usage.md  # Real Kore usage guide (live vs mock)
├── kore-studio/                    # Importable to Kore.ai Studio (REAL framework)
│   ├── bot.json
│   ├── dialogs/LeadQualification.json
│   ├── entities/entities.json
│   ├── knowledge/kb-config.json
│   └── web-sdk-snippet.html
├── artifacts/kore-ai-import.json
├── data/kb/                        # Indexed by Search AI
├── src/marketing_pipeline_mvp/
│   ├── kore/                       # REAL framework layer
│   │   ├── xo_client.py            # XO Platform: session, intent, entities
│   │   ├── search_ai.py            # Search AI: RAG, grounding, threshold
│   │   ├── agent_ai.py             # Agent AI: tools + orchestration
│   │   └── web_sdk.py              # Web SDK snippet
│   ├── models.py
│   ├── pipeline/scoring.py
│   ├── pipeline/nurture.py
│   └── api/main.py                 # FastAPI wired to kore/* + /kore/status
└── tests/                          # 23 tests incl. test_kore.py
```

## D.A.R.E Journey
- **D Discover:** `docs/01` + `02`
- **A Architect:** `docs/03` + `06` + `kore-studio/*`
- **R Realize:** `src/kore/*` + `api/main.py` (now with live/mock)
- **E Expand:** Publish to Studio + Web SDK

## Validation (23 tests)
```bash
UV_CACHE_DIR=/tmp/uv-cache uv run pytest -v
# includes test_kore.py: XO intent, Search AI grounded, Agent AI orchestrate, /kore/status, chat via XO+Search
curl http://127.0.0.1:8000/kore/status | jq
```
