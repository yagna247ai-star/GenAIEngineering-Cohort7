from marketing_pipeline_mvp.api.crm import MockCRM
from marketing_pipeline_mvp.models import Lead, BANT, LeadBand

def test_mock_crm_create_and_slack():
    crm = MockCRM()
    lead = Lead(name="Asha", email="asha@acme.com", company="Acme", bant=BANT(budget=True, authority=True, need=True, timeline=True), score=90, band=LeadBand.HOT)
    cid = crm.create_contact(lead)
    assert cid.startswith("mock_")
    assert lead.crm_id == cid
    assert len(crm.slack_log) == 1
    assert "HOT" in crm.slack_log[0]

def test_mock_crm_warm_no_slack():
    crm = MockCRM()
    lead = Lead(name="Warm", email="warm@acme.com", company="Acme", bant=BANT(budget=True, authority=True, need=False, timeline=False), score=45, band=LeadBand.WARM)
    crm.create_contact(lead)
    assert len(crm.slack_log) == 0
