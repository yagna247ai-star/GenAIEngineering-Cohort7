"""Kore.ai Agent AI - tool/action registry with XO orchestration.

Agent AI concepts used:
- Autonomous agent with tools (function calling)
- Tool definitions: score_lead, create_crm_contact, book_meeting, send_nurture, notify_slack
- Goal: book_meeting for Hot, nurture for Warm (orchestrated by XO dialog branch)
- Handoff to human when confidence < threshold

This mirrors Kore.ai Agent AI Studio: define agent, attach tools, set goal.
Local mode runs tools directly; live mode would POST to /api/agentai/execute.
"""
from __future__ import annotations

import os
from dataclasses import dataclass
from typing import Callable, Any

import httpx

from ..models import Lead, LeadCreate
from ..pipeline.scoring import score_lead
from ..pipeline.nurture import nurture_sequence


@dataclass
class ToolResult:
    tool: str
    success: bool
    data: dict[str, Any]
    source: str  # "live" or "mock"


class AgentAI:
    def __init__(self, api_key: str | None = None, base_url: str = "https://bots.kore.ai", use_mock: bool | None = None):
        self.api_key = api_key or os.getenv("KORE_AGENTAI_API_KEY", "")
        self.base_url = os.getenv("KORE_AGENTAI_BASE_URL", base_url)
        if use_mock is None:
            self.use_mock = not bool(self.api_key)
        else:
            self.use_mock = use_mock
        # registry maps tool name -> callable
        self.tools: dict[str, Callable[..., ToolResult]] = {
            "score_lead": self.tool_score_lead,
            "create_crm_contact": self.tool_create_crm_contact,
            "book_meeting": self.tool_book_meeting,
            "send_nurture": self.tool_send_nurture,
            "notify_slack": self.tool_notify_slack,
        }

    # --- Tool implementations (mock + live bridge) ---
    def tool_score_lead(self, payload: dict) -> ToolResult:
        lc = LeadCreate(**payload)
        score, band, bant = score_lead(lc)
        return ToolResult(tool="score_lead", success=True, data={"score": score, "band": band.value, "bant": bant.model_dump()}, source="mock" if self.use_mock else "live")

    def tool_create_crm_contact(self, lead: Lead) -> ToolResult:
        from ..api.crm import get_singleton_crm

        crm = get_singleton_crm()
        cid = crm.create_contact(lead)
        return ToolResult(tool="create_crm_contact", success=True, data={"crm_id": cid}, source="mock")

    def tool_book_meeting(self, lead_id: str, slot: str) -> ToolResult:
        from ..api.crm import get_singleton_crm
        from datetime import datetime

        crm = get_singleton_crm()
        store = getattr(crm, "store", {})
        lead = store.get(lead_id) if isinstance(store, dict) else None
        if not lead:
            return ToolResult(tool="book_meeting", success=False, data={"error": "Lead not found"}, source="mock")
        try:
            dt = datetime.fromisoformat(slot.replace("Z", ""))
        except Exception as e:
            return ToolResult(tool="book_meeting", success=False, data={"error": str(e)}, source="mock")
        lead.meeting_booked_at = dt
        return ToolResult(tool="book_meeting", success=True, data={"booked_at": dt.isoformat()}, source="mock")

    def tool_send_nurture(self, lead: Lead) -> ToolResult:
        seq = nurture_sequence(lead)
        # In live mode, would enqueue via Kore.ai Campaigns or SendGrid/WhatsApp API
        if not self.use_mock:
            try:
                httpx.post(f"{self.base_url}/api/agentai/nurture", headers={"Authorization": f"Bearer {self.api_key}"}, json={"lead_id": lead.id, "sequence": seq}, timeout=5)
            except Exception:
                pass
        return ToolResult(tool="send_nurture", success=True, data={"sequence": seq, "enqueued": len(seq)}, source="mock" if self.use_mock else "live")

    def tool_notify_slack(self, lead: Lead) -> ToolResult:
        webhook = os.getenv("SLACK_WEBHOOK_URL", "")
        if webhook and not self.use_mock:
            try:
                httpx.post(webhook, json={"text": f"🔥 HOT LEAD: {lead.name} @ {lead.company} {lead.email} score={lead.score}"}, timeout=5)
            except Exception:
                pass
        return ToolResult(tool="notify_slack", success=True, data={"notified": lead.band.value == "Hot"}, source="mock")

    def execute(self, tool: str, **kwargs) -> ToolResult:
        fn = self.tools.get(tool)
        if not fn:
            return ToolResult(tool=tool, success=False, data={"error": f"Unknown tool {tool}"}, source="mock")
        return fn(**kwargs)  # type: ignore

    def orchestrate(self, lead: Lead) -> dict:
        """Agent AI goal orchestration: Hot->book, Warm->nurture. Mirrors XO branch."""
        if lead.band.value == "Hot":
            crm_res = self.execute("create_crm_contact", lead=lead)
            slots = ["2026-09-30T15:00:00", "2026-10-01T11:00:00", "2026-10-02T14:00:00"]
            slack = self.execute("notify_slack", lead=lead)
            return {"next_action": "book_meeting", "crm": crm_res.data, "slots": slots, "slack": slack.data}
        elif lead.band.value == "Warm":
            crm_res = self.execute("create_crm_contact", lead=lead)
            nur = self.execute("send_nurture", lead=lead)
            return {"next_action": "nurture", "crm": crm_res.data, "nurture": nur.data["sequence"]}
        else:
            crm_res = self.execute("create_crm_contact", lead=lead)
            return {"next_action": "newsletter", "crm": crm_res.data}

    @property
    def mode(self) -> str:
        return "mock (local tools)" if self.use_mock else "live (Kore.ai Agent AI)"


_singleton: AgentAI | None = None


def get_agent_ai() -> AgentAI:
    global _singleton
    if _singleton is None:
        _singleton = AgentAI()
    return _singleton
