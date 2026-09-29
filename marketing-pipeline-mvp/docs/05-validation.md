# Validation Plan - How We Prove MVP Works

## 1. Unit Tests
Run in project venv (per python-env skill):
```bash
cd marketing-pipeline-mvp
UV_CACHE_DIR=/tmp/uv-cache uv run pytest -v
# or without uv:
./.venv/bin/pytest -v
```
Expected: `tests/test_scoring.py` (BANT Hot/Warm/Cold), `tests/test_nurture.py` (Day1/3/7), `tests/test_crm.py` (adapter), **`tests/test_kore.py` (XO intent, Search AI grounded, Agent AI orchestrate, /kore/status)** → 23 tests

## 2. API Checks
```bash
UV_CACHE_DIR=/tmp/uv-cache uv run uvicorn marketing_pipeline_mvp.api.main:app --reload --port 8000
```
- `GET /kore/status` -> shows **XO Platform** `mock/live`, **Search AI** `mock/live`, **Agent AI** tools, **Web SDK** mode, Studio paths (proves real framework)
- `GET /health` -> shows `kore:{xo,search_ai,agent_ai}` modes
- `POST /chat {message: "pricing for 50 users?"}` -> via **XO** `intent=pricing_inquiry` + via **Search AI** `kb_chunks` grounded (source mock/live) + confidence
- `POST /lead {name, email, company, size, timeline, budget}` -> via **Agent AI** `via: agent_ai.orchestrate`, returns `{score, band, bant, next_action, slots/nurture, kore}`
- `POST /book {lead_id, slot}` -> via **Agent AI** `agent.execute("book_meeting")` + `via` provenance
- `GET /analytics` -> funnel metrics

## 3. E2E Manual (Highest-Risk Validation)
1. Open `http://localhost:8000`
2. Chat: "Hi, pricing for 50 users?"
3. Bot asks for details -> provide: Acme, 75 employees, SaaS, timeline 2 weeks, budget $5k
4. Assert: Score = Hot, CRM log shows create, calendar slots offered, Slack log shows notify
5. For Warm, assert: Enrolled in nurture, Day1 email preview visible
6. For Cold, assert: Newsletter path

## 4. Kore.ai Import Check
- `kore-studio/bot.json` + `kore-studio/dialogs/LeadQualification.json` + `entities.json` + `knowledge/kb-config.json` + `web-sdk-snippet.html` → 1-click import in **Kore.ai XO Console > Bot Builder > Import** (manual when you have access). This is the *real framework artefact* — not just local.
- `artifacts/kore-ai-import.json` also importable (legacy single-file)
- Verify: `GET /kore/status` JSON `kore_studio` paths exist; `tests/test_kore.py::test_kore_status_via_api` asserts them.

## 5. Static Checks
```bash
UV_CACHE_DIR=/tmp/uv-cache uv run ruff check .
UV_CACHE_DIR=/tmp/uv-cache uv run mypy .
```
