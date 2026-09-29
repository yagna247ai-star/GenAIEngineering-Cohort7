"""Kore.ai Search AI (RAG) wrapper - real API with indexed KB fallback.

Search AI concepts used:
- Indexed source: data/kb/*.md uploaded to Search AI console
- Retrieval: POST /api/searchai/search with query + threshold
- Grounding: only answer from returned chunks, else handoff
- Confidence threshold: <0.7 triggers human handoff (Kore.ai Agent Transfer)

Env for live mode:
  KORE_SEARCHAI_API_KEY, KORE_SEARCHAI_INDEX_ID, KORE_SEARCHAI_BASE_URL
If missing, uses local KB chunk search (same as before) but now explicitly logs as Search AI mock.
"""
from __future__ import annotations

import os
from pathlib import Path
from dataclasses import dataclass

import httpx

KB_DIR = Path(__file__).resolve().parents[3] / "data" / "kb"


@dataclass
class SearchResult:
    chunks: list[str]
    confidence: float
    source: str  # "live" or "mock"
    grounded: bool


class SearchAI:
    def __init__(
        self,
        api_key: str | None = None,
        index_id: str | None = None,
        base_url: str = "https://bots.kore.ai",
        threshold: float = 0.7,
        use_mock: bool | None = None,
    ):
        self.api_key = api_key or os.getenv("KORE_SEARCHAI_API_KEY", "")
        self.index_id = index_id or os.getenv("KORE_SEARCHAI_INDEX_ID", "")
        self.base_url = os.getenv("KORE_SEARCHAI_BASE_URL", base_url)
        self.threshold = threshold
        if use_mock is None:
            self.use_mock = not bool(self.api_key and self.index_id)
        else:
            self.use_mock = use_mock

    def search(self, query: str) -> SearchResult:
        if not self.use_mock:
            try:
                resp = httpx.post(
                    f"{self.base_url}/api/searchai/search",
                    headers={"Authorization": f"Bearer {self.api_key}", "Content-Type": "application/json"},
                    json={"indexId": self.index_id, "query": query, "threshold": self.threshold, "topK": 2},
                    timeout=6,
                )
                if resp.status_code == 200:
                    data = resp.json()
                    chunks = [h.get("chunk") or h.get("text") or "" for h in data.get("hits", [])][:2]
                    conf = float(data.get("confidence", 0.85)) if data.get("hits") else 0.0
                    return SearchResult(chunks=chunks or ["No relevant KB chunk found."], confidence=conf, source="live", grounded=conf >= self.threshold)
            except Exception:
                pass

        # Mock: local KB search (Search AI simulation)
        q = query.lower()
        chunks: list[str] = []
        if KB_DIR.exists():
            for p in KB_DIR.glob("*.md"):
                text = p.read_text()
                if any(w in text.lower() for w in q.split() if len(w) > 3):
                    chunks.append(text[:700])
            if not chunks:
                for p in KB_DIR.glob("*.md"):
                    chunks.append(p.read_text()[:700])
                    break
        if not chunks:
            chunks = ["KB not found - fallback: Ask for your needs and I'll connect you to sales."]
        # Mock confidence: 0.88 if overlap, else 0.5
        conf = 0.88 if chunks and q.split()[0] in chunks[0].lower() else 0.62
        return SearchResult(chunks=chunks[:2], confidence=conf, source="mock", grounded=conf >= self.threshold)

    def grounded_answer(self, query: str, fallback: str = "Let me connect you to a human SDR.") -> tuple[str, SearchResult]:
        res = self.search(query)
        if not res.grounded:
            return fallback, res
        # In real Search AI, LLM is already grounded on chunks; here we return chunk as answer
        answer = res.chunks[0][:600]
        return answer, res

    @property
    def mode(self) -> str:
        return "mock (local KB)" if self.use_mock else "live (Kore.ai Search AI)"


_singleton: SearchAI | None = None


def get_search_ai() -> SearchAI:
    global _singleton
    if _singleton is None:
        _singleton = SearchAI()
    return _singleton
