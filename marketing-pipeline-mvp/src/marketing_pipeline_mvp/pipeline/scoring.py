from __future__ import annotations

import re

from ..models import BANT, Lead, LeadBand, LeadCreate


def infer_bant(lead: LeadCreate) -> BANT:
    """Rule-based BANT inference - deterministic, Kore.ai Storyboard friendly."""
    bant = BANT()

    # Budget: has budget_band or mentions budget in pain_point
    if lead.budget_band and lead.budget_band.strip().lower() not in {"", "unknown", "tbd"}:
        # Consider "5k", "10k-20k", "$5000" as having budget
        bant.budget = bool(re.search(r"\d", lead.budget_band))
    if lead.pain_point and re.search(r"budget|price|cost", lead.pain_point, re.I):
        bant.budget = True

    # Authority: company present + name suggests decision maker or size >10 implies team
    if lead.company and len(lead.company.strip()) > 1:
        bant.authority = True
    # If still false but company_size large, still authority
    if lead.company_size and lead.company_size >= 20:
        bant.authority = True

    # Need: pain_point or industry or company_size indicates real need
    if lead.pain_point and len(lead.pain_point.strip()) > 5:
        bant.need = True
    elif lead.industry and lead.industry.strip():
        bant.need = True
    elif lead.company_size and lead.company_size > 0:
        bant.need = True

    # Timeline: explicit timeline within 90 days is urgent
    if lead.timeline:
        t = lead.timeline.lower()
        if any(k in t for k in ["week", "asap", "immediate", "now", "days", "month"]):
            # "3 months" is still timeline true, but "next year" is weaker
            if "year" in t and "next year" in t:
                bant.timeline = False
            else:
                bant.timeline = True
        elif "quarter" in t:
            bant.timeline = True

    return bant


def score_lead(lead: LeadCreate | Lead) -> tuple[int, LeadBand, BANT]:
    """Returns (score 0-100, band, bant). Score is deterministic."""
    if isinstance(lead, Lead):
        lc = LeadCreate(
            name=lead.name,
            email=lead.email,
            company=lead.company,
            phone=lead.phone,
            industry=lead.industry,
            company_size=lead.company_size,
            timeline=lead.timeline,
            budget_band=lead.budget_band,
            pain_point=lead.pain_point,
            source=lead.source,
        )
    else:
        lc = lead

    bant = infer_bant(lc)
    bant_count = bant.score

    # Base score by BANT count
    if bant_count == 4:
        score = 90
    elif bant_count == 3:
        score = 70
    elif bant_count == 2:
        score = 45
    elif bant_count == 1:
        score = 25
    else:
        score = 10

    # Boosters
    if lc.company_size and lc.company_size >= 50:
        score += 5
    if lc.company_size and lc.company_size >= 200:
        score += 5
    if lc.industry and lc.industry.lower() in {"saas", "software", "fintech", "healthcare", "ecommerce"}:
        score += 5

    score = min(100, max(0, score))

    if score >= 75:
        band = LeadBand.HOT
    elif score >= 40:
        band = LeadBand.WARM
    else:
        band = LeadBand.COLD

    return score, band, bant
