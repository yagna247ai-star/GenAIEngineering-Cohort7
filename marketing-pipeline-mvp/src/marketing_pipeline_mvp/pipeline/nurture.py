from __future__ import annotations

from datetime import datetime, timedelta

from ..models import Lead, LeadBand


def nurture_sequence(lead: Lead) -> list[dict]:
    """Day 1 / 3 / 7 templates - personalized by industry/pain, Kore.ai Agent AI style."""
    if lead.band == LeadBand.HOT:
        return []  # Hot books directly, no nurture
    if lead.band == LeadBand.COLD:
        return [
            {
                "day": 0,
                "channel": "email",
                "subject": f"{lead.company} - stay in the loop?",
                "body": f"Hi {lead.name}, thanks for visiting. We'll share monthly tips for {lead.industry or 'your industry'}. Reply UNSUBSCRIBE anytime.",
            }
        ]

    # WARM
    industry = lead.industry or "your industry"
    pain = lead.pain_point or "growing your pipeline"
    base = datetime.utcnow()
    return [
        {
            "day": 1,
            "channel": "email",
            "subject": f"How {industry} teams fix {pain} (case study inside)",
            "body": f"Hi {lead.name},\n\nSaw you're exploring for {lead.company} ({lead.company_size or ''} people). Many {industry} teams struggled with {pain} - here's how Acme cut response time 5x and lifted SQLs 25%:\n[Case Study: Lead-to-Meeting Agent]\n\nWant a 15-min walkthrough? Reply YES and I'll send calendar slots.\n\n- Kore.ai Pipeline Agent",
            "send_at": (base + timedelta(days=1)).isoformat(),
        },
        {
            "day": 3,
            "channel": "whatsapp",
            "subject": "Quick ROI check",
            "body": f"Hey {lead.name} - quick check: if you halve response time, you'd book ~2 extra meetings/month. Want the ROI calc for {lead.company}? Type CALC.",
            "send_at": (base + timedelta(days=3)).isoformat(),
        },
        {
            "day": 7,
            "channel": "email",
            "subject": f"{lead.name}, still interested? 2 slots left this week",
            "body": f"Hi {lead.name}, last nudge - 2 slots left Tue/Thu 3pm to see the Lead-to-Meeting agent live. Book here: /book?lead_id={lead.id}\nIf not now, just reply NOT NOW and I'll pause. Thanks!",
            "send_at": (base + timedelta(days=7)).isoformat(),
        },
    ]


def should_nurture(lead: Lead) -> bool:
    return lead.band == LeadBand.WARM
