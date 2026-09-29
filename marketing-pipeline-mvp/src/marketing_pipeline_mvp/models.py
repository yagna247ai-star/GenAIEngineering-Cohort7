from __future__ import annotations

from datetime import datetime
from enum import Enum
from uuid import uuid4

from pydantic import BaseModel, EmailStr, Field


class LeadBand(str, Enum):
    HOT = "Hot"
    WARM = "Warm"
    COLD = "Cold"


class BANT(BaseModel):
    budget: bool = False
    authority: bool = False
    need: bool = False
    timeline: bool = False

    @property
    def score(self) -> int:
        return sum([self.budget, self.authority, self.need, self.timeline])


class Lead(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid4()))
    name: str
    email: EmailStr
    company: str
    phone: str | None = None
    industry: str | None = None
    company_size: int | None = None
    timeline: str | None = None  # e.g., "2 weeks", "3 months"
    budget_band: str | None = None  # e.g., "5k", "10k-20k"
    pain_point: str | None = None
    source: str = "web"
    bant: BANT = Field(default_factory=BANT)
    score: int = 0  # 0-100
    band: LeadBand = LeadBand.COLD
    crm_id: str | None = None
    meeting_booked_at: datetime | None = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    raw_message: str | None = None


class LeadCreate(BaseModel):
    name: str
    email: EmailStr
    company: str
    phone: str | None = None
    industry: str | None = None
    company_size: int | None = None
    timeline: str | None = None
    budget_band: str | None = None
    pain_point: str | None = None
    source: str = "web"
    raw_message: str | None = None


class ChatRequest(BaseModel):
    message: str
    session_id: str | None = None


class ChatResponse(BaseModel):
    reply: str
    intent: str
    confidence: float
    ask_for_lead: bool = False
    kb_chunks: list[str] = Field(default_factory=list)


class BookRequest(BaseModel):
    lead_id: str
    slot: str  # ISO datetime


class Analytics(BaseModel):
    total_leads: int
    hot: int
    warm: int
    cold: int
    meetings_booked: int
    response_time_avg_sec: float = 42.0
    mql_to_sql_rate: float = 0.0
