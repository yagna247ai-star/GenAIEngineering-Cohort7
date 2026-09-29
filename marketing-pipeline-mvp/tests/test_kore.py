"""Focused test for Kore.ai framework usage (XO, Search AI, Agent AI)."""

from marketing_pipeline_mvp.kore import get_agent_ai, get_search_ai, get_xo_client


def test_xo_intent_pricing():
    xo = get_xo_client()
    # ensure mock mode when no creds
    assert "mock" in xo.mode or "live" in xo.mode
    nlp = xo.detect_intent("pricing for 50 users?")
    assert nlp.intent == "pricing_inquiry"
    assert nlp.confidence >= 0.8
    assert nlp.next_dialog == "KB_Answer"


def test_search_ai_grounded():
    search = get_search_ai()
    res = search.search("pricing")
    assert len(res.chunks) >= 1
    assert res.confidence > 0
    assert "mock" in res.source or "live" in res.source
    # threshold test
    assert res.grounded == (res.confidence >= search.threshold)


def test_search_ai_greeting():
    search = get_search_ai()
    answer, res = search.grounded_answer("hello there")
    assert isinstance(answer, str)
    assert len(answer) > 0


def test_agent_ai_orchestrate_hot():
    from marketing_pipeline_mvp.models import Lead, BANT, LeadBand

    agent = get_agent_ai()
    lead = Lead(name="Hot", email="hot@acme.com", company="Acme", score=90, band=LeadBand.HOT, bant=BANT(budget=True, authority=True, need=True, timeline=True))
    orch = agent.orchestrate(lead)
    assert orch["next_action"] == "book_meeting"
    assert "slots" in orch


def test_agent_ai_orchestrate_warm():
    from marketing_pipeline_mvp.models import Lead, BANT, LeadBand

    agent = get_agent_ai()
    lead = Lead(name="Warm", email="warm@acme.com", company="Acme", score=50, band=LeadBand.WARM, bant=BANT(budget=True, authority=True, need=False, timeline=False))
    orch = agent.orchestrate(lead)
    assert orch["next_action"] == "nurture"
    assert len(orch["nurture"]) == 3


def test_kore_status_via_api():
    from fastapi.testclient import TestClient
    from marketing_pipeline_mvp.api.main import app

    c = TestClient(app)
    r = c.get("/kore/status")
    assert r.status_code == 200
    j = r.json()
    assert "xo_platform" in j
    assert "search_ai" in j
    assert "agent_ai" in j
    assert "kore_studio" in j


def test_chat_uses_xo_and_search():
    from fastapi.testclient import TestClient
    from marketing_pipeline_mvp.api.main import app

    c = TestClient(app)
    r = c.post("/chat", json={"message": "pricing for 50 users?"})
    assert r.status_code == 200
    j = r.json()
    assert j["intent"] == "pricing_inquiry"
    assert len(j["kb_chunks"]) >= 1
    assert "pricing" in j["kb_chunks"][0].lower() or "plan" in j["kb_chunks"][0].lower()
