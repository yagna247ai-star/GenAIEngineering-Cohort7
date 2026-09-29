from fastapi.testclient import TestClient
from marketing_pipeline_mvp.api.main import app

client = TestClient(app)

def test_health():
    r = client.get("/health")
    assert r.status_code == 200
    assert r.json()["status"] == "ok"

def test_chat_pricing():
    r = client.post("/chat", json={"message": "pricing for 50 users?"})
    assert r.status_code == 200
    j = r.json()
    assert j["intent"] == "pricing_inquiry"
    assert j["ask_for_lead"] is True

def test_lead_hot_flow():
    r = client.post("/lead", json={"name":"Asha Patel","email":"asha@acme.com","company":"Acme","company_size":75,"industry":"SaaS","timeline":"2 weeks","budget_band":"$5k","pain_point":"slow lead response"})
    assert r.status_code == 200
    j = r.json()
    assert j["band"] == "Hot"
    assert j["next_action"] == "book_meeting"
    assert "slots" in j
    # book
    lead_id = j["lead_id"]
    rr = client.post("/book", json={"lead_id": lead_id, "slot": "2026-09-30T15:00:00"})
    assert rr.status_code == 200

def test_lead_warm_nurture():
    # Priya is actually Hot (3 BANT + healthcare boost =75) -> books, not nurture
    r = client.post("/lead", json={"name":"Priya Singh","email":"priya@healthplus.com","company":"HealthPlus","industry":"Healthcare","timeline":"next quarter","budget_band":"","pain_point":"manual nurture"})
    assert r.status_code == 200
    j = r.json()
    assert j["band"] == "Hot"
    assert j["next_action"] == "book_meeting"

def test_lead_warm_actual_nurture():
    # Create a true Warm: 2 BANT (company + need) no budget/timeline
    r = client.post("/lead", json={"name":"Warm Lead","email":"warm2@acme.com","company":"Acme","company_size":12,"industry":"","timeline":"","budget_band":"","pain_point":""})
    assert r.status_code == 200
    j = r.json()
    assert j["band"] == "Warm"
    assert j["next_action"] == "nurture"
    assert len(j["nurture"]) == 3

def test_analytics():
    r = client.get("/analytics")
    assert r.status_code == 200
    assert "total_leads" in r.json()
