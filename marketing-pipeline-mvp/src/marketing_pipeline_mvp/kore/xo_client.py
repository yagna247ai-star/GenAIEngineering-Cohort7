"""Kore.ai XO Platform client - real API with local fallback.

XO Platform concepts used:
- Bot Definition (bot.json)
- Dialog Tasks (dialogs/*.json) - welcome, capture, scoring, branch
- Entity extraction (entities/*.json) - email, company_size etc
- Session management
- Web SDK hook (web_sdk.py)

Real XO REST: https://bots.kore.ai/api/1.1/rest/bot/{botId}/...
Auth: JWT generated from clientId/clientSecret (Kore.ai Developer Console).

This client tries real XO if KORE_BOT_ID + KORE_CLIENT_ID/SECRET + KORE_JWT_URL are set,
otherwise falls back to local simulation so MVP runs without Kore account.
"""
from __future__ import annotations

import os
import time
from dataclasses import dataclass
from typing import Any

import httpx


@dataclass
class XOSession:
    session_id: str
    bot_id: str
    channel: str = "web"
    language: str = "en"


@dataclass
class XODialogResult:
    intent: str
    confidence: float
    entities: dict[str, Any]
    reply: str
    next_dialog: str | None = None


class XOClient:
    """Thin wrapper over Kore.ai XO Platform REST. Fallback = local logic."""

    def __init__(
        self,
        bot_id: str | None = None,
        client_id: str | None = None,
        client_secret: str | None = None,
        base_url: str = "https://bots.kore.ai",
        use_mock: bool | None = None,
    ):
        self.bot_id = bot_id or os.getenv("KORE_BOT_ID", "")
        self.client_id = client_id or os.getenv("KORE_CLIENT_ID", "")
        self.client_secret = client_secret or os.getenv("KORE_CLIENT_SECRET", "")
        self.base_url = os.getenv("KORE_BASE_URL", base_url)
        # If credentials missing, force mock. Explicit use_mock overrides.
        if use_mock is None:
            self.use_mock = not bool(self.bot_id and self.client_id)
        else:
            self.use_mock = use_mock
        self._jwt: str | None = None
        self._jwt_expiry: float = 0

    def _get_jwt(self) -> str | None:
        if self.use_mock:
            return None
        if self._jwt and time.time() < self._jwt_expiry - 60:
            return self._jwt
        # Kore.ai JWT: POST /api/users/sts with clientId/secret
        try:
            resp = httpx.post(
                f"{self.base_url}/api/users/sts",
                json={"clientId": self.client_id, "clientSecret": self.client_secret, "audience": "https://api.kore.ai/users/sts"},
                timeout=5,
            )
            if resp.status_code == 200:
                data = resp.json()
                self._jwt = data.get("jwt") or data.get("token")
                self._jwt_expiry = time.time() + 3600
                return self._jwt
        except Exception:
            pass
        return None

    def create_session(self, channel: str = "web") -> XOSession:
        import uuid

        return XOSession(session_id=str(uuid.uuid4()), bot_id=self.bot_id or "mock-marketing-pipeline-bot", channel=channel)

    def detect_intent(self, message: str, session: XOSession | None = None) -> XODialogResult:
        """Real path: Kore.ai NLU /api/1.1/rest/bot/{botId}/getNlpData . Mock path: rule-based same as before but now logged as XO fallback."""
        if not self.use_mock:
            jwt = self._get_jwt()
            if jwt and self.bot_id:
                try:
                    resp = httpx.post(
                        f"{self.base_url}/api/1.1/rest/bot/{self.bot_id}/getNlpData",
                        headers={"Authorization": f"Bearer {jwt}", "Content-Type": "application/json"},
                        json={"input": message, "streamId": getattr(session, "session_id", "web")},
                        timeout=5,
                    )
                    if resp.status_code == 200:
                        data = resp.json()
                        # Map Kore.ai NLU response -> our model
                        intent = data.get("intent") or data.get("nlp", {}).get("intent", "general_question")
                        conf = float(data.get("confidence") or data.get("nlp", {}).get("confidence", 0.8))
                        entities = data.get("entities") or {}
                        return XODialogResult(intent=intent, confidence=conf, entities=entities, reply=data.get("reply", ""), next_dialog=data.get("nextDialog"))
                except Exception:
                    pass
            # fall through to mock if real call fails

        # --- Mock fallback (explicitly marked as XO simulation) ---
        m = message.lower()
        if any(k in m for k in ["price", "pricing", "cost", "plan", "how much"]):
            return XODialogResult(intent="pricing_inquiry", confidence=0.92, entities={}, reply="", next_dialog="KB_Answer")
        if any(k in m for k in ["book", "meeting", "calendar", "schedule", "demo"]):
            return XODialogResult(intent="book_meeting", confidence=0.88, entities={}, reply="", next_dialog="Capture_Lead")
        if any(k in m for k in ["hi", "hello", "hey"]):
            return XODialogResult(intent="greeting", confidence=0.85, entities={}, reply="", next_dialog="Welcome")
        if any(k in m for k in ["feature", "integration", "hubspot", "salesforce"]):
            return XODialogResult(intent="product_question", confidence=0.80, entities={}, reply="", next_dialog="KB_Answer")
        return XODialogResult(intent="general_question", confidence=0.70, entities={}, reply="", next_dialog="KB_Answer")

    def extract_entities(self, message: str) -> dict[str, Any]:
        """XO Entity extraction. In mock, simple regex."""
        import re

        entities: dict[str, Any] = {}
        email = re.search(r"[\w\.-]+@[\w\.-]+\.\w+", message)
        if email:
            entities["email"] = email.group(0)
        size = re.search(r"(\d+)\s*(employees|users|people|seats)", message, re.I)
        if size:
            entities["company_size"] = int(size.group(1))
        return entities

    @property
    def mode(self) -> str:
        return "mock (local XO simulation)" if self.use_mock else "live (Kore.ai XO Platform)"


_singleton: XOClient | None = None


def get_xo_client() -> XOClient:
    global _singleton
    if _singleton is None:
        _singleton = XOClient()
    return _singleton
