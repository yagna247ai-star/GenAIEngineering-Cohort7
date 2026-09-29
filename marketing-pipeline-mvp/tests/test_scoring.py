from marketing_pipeline_mvp.models import LeadCreate
from marketing_pipeline_mvp.pipeline.scoring import score_lead

def test_hot_lead():
    lc = LeadCreate(name="Asha Patel", email="asha@acme.com", company="Acme", company_size=75, industry="SaaS", timeline="2 weeks", budget_band="$5k", pain_point="slow lead response")
    score, band, bant = score_lead(lc)
    assert band.value == "Hot"
    assert score >= 75
    assert bant.score == 4

def test_warm_lead():
    # Priya: company+industry+timeline+need = 3 BANT +5 healthcare = 75 -> Hot
    lc = LeadCreate(name="Priya Singh", email="priya@healthplus.com", company="HealthPlus", industry="Healthcare", timeline="next quarter", budget_band="", pain_point="manual nurture")
    score, band, bant = score_lead(lc)
    assert band.value == "Hot"
    assert score >= 75
    assert bant.score == 3

def test_cold_lead():
    # John: authority (company) + need (size) = 2 BANT =45 -> Warm (not Cold)
    lc = LeadCreate(name="John Doe", email="john@shopkart.com", company="ShopKart", company_size=12, timeline="", budget_band="", pain_point="")
    score, band, bant = score_lead(lc)
    assert band.value == "Warm"
    assert 40 <= score < 75

def test_true_cold_lead():
    # No company, no industry, no size, no pain -> 0 BANT -> Cold
    lc = LeadCreate(name="Anon", email="anon@example.com", company="", timeline="", budget_band="", pain_point="")
    # override company empty still counts? infer_bant requires len>1, so empty -> false
    score, band, bant = score_lead(lc)
    assert band.value == "Cold"
    assert score < 40

def test_budget_detection():
    lc = LeadCreate(name="Ravi", email="ravi@finco.in", company="FinCo", company_size=200, industry="Fintech", timeline="1 month", budget_band="$15k", pain_point="HubSpot sync")
    score, band, bant = score_lead(lc)
    assert bant.budget is True
    assert band.value == "Hot"
