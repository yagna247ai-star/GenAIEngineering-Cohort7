from marketing_pipeline_mvp.models import Lead, BANT, LeadBand
from marketing_pipeline_mvp.pipeline.nurture import nurture_sequence, should_nurture

def make_lead(band):
    return Lead(name="Test", email="test@acme.com", company="Acme", industry="SaaS", company_size=75, timeline="2 weeks", budget_band="$5k", pain_point="slow response", bant=BANT(budget=True, authority=True, need=True, timeline=True), score=90 if band=="Hot" else 50, band=LeadBand(band))

def test_hot_no_nurture():
    lead = make_lead("Hot")
    assert nurture_sequence(lead) == []
    assert should_nurture(lead) is False

def test_warm_has_three_steps():
    lead = make_lead("Warm")
    seq = nurture_sequence(lead)
    assert len(seq) == 3
    assert seq[0]["day"] == 1
    assert seq[1]["channel"] == "whatsapp"
    assert seq[2]["day"] == 7
    assert should_nurture(lead) is True

def test_cold_single_newsletter():
    lead = make_lead("Cold")
    seq = nurture_sequence(lead)
    assert len(seq) == 1
    assert seq[0]["channel"] == "email"
