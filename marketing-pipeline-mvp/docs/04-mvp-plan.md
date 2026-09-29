# MVP Plan - Lead-to-Meeting AI Agent (D.A.R.E Realize + Expand)

## Goal
Build a single-tenant MVP that proves 1 measurable pipeline outcome in <6 weeks, using Kore.ai principles, and becomes foundation to expand.

## Success Criteria
1. One live Agent handling real marketing flow end-to-end (not demo data)
2. 30% reduction in Lead Response Time OR 20% increase in MQL->SQL conversion in pilot vs baseline
3. Integrated with CRM (HubSpot/Salesforce) and 1 channel (Web/WhatsApp)
4. Built on project-local .venv (marketing-pipeline-mvp/.venv, Python 3.11), runnable via `uv run`

## Constraints & Non-Goals
- Budget: MVP uses FastAPI simulation + mock CRM if no HubSpot key; no paid Kore.ai license needed to demo
- No voice, no image-gen, no multi-lang for MVP
- Data: If no real CRM data, use CSV seed in `data/leads_seed.csv`

## Key Decisions
| Decision | Choice | Why | Alternative Rejected |
|---|---|---|---|
| Platform | **Real Kore.ai framework layer** `src/marketing_pipeline_mvp/kore/*` (XO + Search AI + Agent AI) with live-first/mock-fallback + FastAPI | Proves real Kore.ai usage (calls XO REST `getNlpData`, Search AI `search`, Agent AI tools) while still demoable without account; `GET /kore/status` shows live vs mock | Pure FastAPI simulation only → no Kore.ai provenance; Direct Kore.ai XO only → blocks contributors |
| Score Logic | Rule-based BANT + LLM-ready hook **exposed as Agent AI tool `score_lead`** | Deterministic, testable, and registered as Kore.ai Agent AI tool so XO orchestrates it | Pure LLM → non-deterministic |
| CRM | Adapter (HubSpot default) **exposed as Agent AI tool `create_crm_contact`** | Swap without rewrite, orchestrated by Agent AI | Hardcoded |
| Nurture | Template + personalization tokens (industry/pain) **exposed as Agent AI tool `send_nurture`** | Works without corpus, orchestrated by Agent AI Day1/3/7 | Full LLM gen Day1 → needs corpus |
| Env | uv + .venv inside project (marketing-pipeline-mvp/.venv) | Editor auto-detect, reproducible, per python-env skill | BaseCamp2/.venv reuse or /tmp → not portable |
| Kore Studio | Importable `kore-studio/bot.json` + `dialogs/LeadQualification.json` + `entities.json` + `kb-config.json` + `web-sdk-snippet.html` | 1-click publish to Kore.ai XO Console; proves framework fidelity | Docs only, no importable artefact |

## Recommended Approach (Phased)

### Phase 1: Realize - Build (Weeks 3-4, maps to 4 days in this repo)
- **Sprint 3a (Day 1-2):** Scoring + Lead model + CRM adapter + RAG simulation + `/chat` endpoint
- **Sprint 3b (Day 3):** Nurture scheduler (Day1/3/7) + Calendar booking mock + Slack notify mock + Web UI
- **Sprint 3c (Day 4):** UAT with 50 synthetic leads + polish

### Phase 2: Expand - Pilot (Week 5+)
- Deploy to 20% traffic on 1 landing page
- Instrument analytics: response time, qualified %, meetings, unsubscribe
- Human-in-loop for confidence <70%

## Work Plan (Executable Units)

| # | Unit | Surface | Depends | Validation |
|---|---|---|---|---|
| 1 | Lead model + BANT scoring | `src/.../pipeline/scoring.py`, `models.py` | - | `uv run pytest tests/test_scoring.py` |
| 1a | **Kore.ai framework layer** | `src/.../kore/xo_client.py`, `search_ai.py`, `agent_ai.py`, `web_sdk.py` | 1 | `uv run pytest tests/test_kore.py` + `curl /kore/status` shows modes |
| 2 | CRM adapter (HubSpot mock + real) | `src/.../api/crm.py` (also Agent AI tool) | 1 | `uv run pytest tests/test_crm.py` (mock) |
| 3 | KB RAG via **Search AI** + `/chat` via **XO** | `src/.../kore/search_ai.py`, `xo_client.py`, `api/main.py`, `data/kb/` + `kore-studio/knowledge/kb-config.json` | 1,1a | `curl POST /chat` returns `intent` via XO + `kb_chunks` via Search AI + provenance |
| 4 | Nurture engine **as Agent AI tool** | `src/.../pipeline/nurture.py` + `kore/agent_ai.py:send_nurture` | 1,2 | `uv run pytest tests/test_nurture.py` |
| 5 | Calendar + Slack mocks + Web UI (Web SDK) | `src/.../api/main.py`, `kore/web_sdk.py`, `kore-studio/web-sdk-snippet.html` | 2 | Manual book meeting flow via Agent AI |
| 6 | Seed data + analytics dashboard | `data/`, `api/main.py` `/analytics`, `/kore/status` | 1-5 | `/analytics` + `/kore/status` shows framework |
| 7 | **Studio importable + docs** | `kore-studio/*`, `artifacts/kore-ai-import.json`, `docs/06-kore-framework-usage.md` | 1-6 | `uv run pytest tests/test_kore.py::test_kore_status_via_api` + Import validates in Kore.ai Studio |

**Kore.ai provenance in API:** `POST /chat` uses XO intent + Search AI chunks, `POST /lead` uses `via: agent_ai.orchestrate`, `POST /book` uses `agent.execute("book_meeting")`, `GET /kore/status` documents live vs mock — see `docs/06-kore-framework-usage.md`.

## Validation Plan
- **Unit:** `UV_CACHE_DIR=/tmp/uv-cache uv run pytest` (or `marketing-pipeline-mvp/.venv/bin/pytest`) - all tests green
- **API:** `UV_CACHE_DIR=/tmp/uv-cache uv run uvicorn marketing_pipeline_mvp.api.main:app --reload` -> POST /chat, /lead, /book
- **E2E Manual (Highest Risk):** Browser -> Chat "pricing for 50 users" -> fill BANT -> Hot -> see CRM creation log + calendar invite + Slack log. If CRM write fails, fallback to local DB still shows lead.
- **Static:** `uv run ruff check .` and `uv run mypy .`

## Risks / Rollback
- **Risk:** Hallucinated pricing -> Mitig: RAG grounded only + fallback to human, confidence threshold
- **Risk:** SDR rejects AI leads -> Mitig: Shadow mode Week1, co-tune BANT weights
- **Risk:** Network (PyPI) blocked as seen (starlette fetch fail) -> Mitig: UV_CACHE_DIR=/tmp/uv-cache workaround already documented; offline fallback to mocks
- **Rollback:** Web SDK widget feature-flag off -> instant revert to form; no DB migration to undo

## Open Questions (Resolved for Repo, Pending for Production)
- Production CRM choice (HubSpot vs Salesforce) - repo supports both via adapter, default HubSpot
- WhatsApp BSP credentials - repo mocks; production needs 360dialog/Twilio key
- Calendly vs Google Calendar - repo mocks both; choose one for prod

## Approval Gate
This plan doc is `marketing-pipeline-mvp/docs/04-mvp-plan.md`. Also saved as canonical `.agents/plans/` if needed. Reply **Approve** to proceed to build, or **Request changes** with specifics.
