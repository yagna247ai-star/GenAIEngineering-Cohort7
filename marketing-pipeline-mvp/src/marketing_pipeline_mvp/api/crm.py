from __future__ import annotations

import os
from typing import Protocol

import httpx

from ..models import Lead


class CRMProvider(Protocol):
    def create_contact(self, lead: Lead) -> str: ...


class MockCRM:
    """In-memory mock - used when no HubSpot key. Also logs Slack."""

    def __init__(self):
        self.store: dict[str, Lead] = {}
        self.slack_log: list[str] = []

    def create_contact(self, lead: Lead) -> str:
        crm_id = f"mock_{lead.id[:8]}"
        lead.crm_id = crm_id
        self.store[lead.id] = lead
        if lead.band.value == "Hot":
            self.slack_log.append(f"🔥 HOT LEAD: {lead.name} @ {lead.company} ({lead.email}) score={lead.score}")
        return crm_id

    def all_leads(self) -> list[Lead]:
        return list(self.store.values())


class HubSpotCRM:
    def __init__(self, token: str):
        self.token = token
        self.base = "https://api.hubapi.com/crm/v3/objects/contacts"

    def create_contact(self, lead: Lead) -> str:
        # Fallback to mock if token invalid or network fails
        try:
            resp = httpx.post(
                self.base,
                headers={"Authorization": f"Bearer {self.token}", "Content-Type": "application/json"},
                json={
                    "properties": {
                        "email": str(lead.email),
                        "firstname": lead.name.split()[0] if lead.name else lead.name,
                        "lastname": " ".join(lead.name.split()[1:]) if " " in lead.name else "",
                        "company": lead.company,
                        "phone": lead.phone or "",
                        "lifecyclestage": "lead",
                        "lead_score": str(lead.score),
                        "lead_band": lead.band.value,
                    }
                },
                timeout=5,
            )
            if resp.status_code in (200, 201):
                data = resp.json()
                return data.get("id", f"hs_{lead.id[:8]}")
        except Exception:
            pass
        # fallback
        return f"hs_fallback_{lead.id[:8]}"


def get_crm() -> CRMProvider:
    token = os.getenv("HUBSPOT_TOKEN") or os.getenv("HUBSPOT_API_KEY")
    if token:
        return HubSpotCRM(token)
    return MockCRM()


# Singleton for MVP - keeps state in process
crm_singleton: CRMProvider | None = None


def get_singleton_crm() -> CRMProvider:
    global crm_singleton
    if crm_singleton is None:
        crm_singleton = get_crm()
        # Ensure MockCRM type for analytics even if HubSpot
        if not hasattr(crm_singleton, "store"):
            # wrap HubSpot with mock store for local analytics
            mock = MockCRM()
            orig_create = crm_singleton.create_contact

            def wrapped(lead: Lead) -> str:
                cid = orig_create(lead)
                lead.crm_id = cid
                mock.store[lead.id] = lead
                if hasattr(mock, "slack_log") and lead.band.value == "Hot":
                    mock.slack_log.append(f"🔥 HOT: {lead.name} {lead.email}")
                return cid

            crm_singleton.create_contact = wrapped  # type: ignore
            crm_singleton.store = mock.store  # type: ignore
            crm_singleton.slack_log = mock.slack_log  # type: ignore
    return crm_singleton
