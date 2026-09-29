"""Central config via .env (pydantic-settings) - loads marketing-pipeline-mvp/.env"""

from pathlib import Path

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    # Kore.ai
    KORE_BOT_ID: str = ""
    KORE_CLIENT_ID: str = ""
    KORE_CLIENT_SECRET: str = ""
    KORE_BASE_URL: str = "https://bots.kore.ai"
    KORE_SEARCHAI_API_KEY: str = ""
    KORE_SEARCHAI_INDEX_ID: str = "kb-marketing-pipeline"
    KORE_SEARCHAI_BASE_URL: str = "https://bots.kore.ai"
    KORE_AGENTAI_API_KEY: str = ""
    KORE_AGENTAI_BASE_URL: str = "https://bots.kore.ai"
    # CRM
    HUBSPOT_TOKEN: str = ""
    HUBSPOT_API_KEY: str = ""  # legacy
    # Notifications
    SLACK_WEBHOOK_URL: str = ""
    # App
    PORT: int = 8000
    HOST: str = "127.0.0.1"

    model_config = SettingsConfigDict(
        env_file=str(Path(__file__).resolve().parents[2] / ".env"),
        env_file_encoding="utf-8",
        extra="ignore",
    )

    @property
    def hubspot_token(self) -> str:
        return self.HUBSPOT_TOKEN or self.HUBSPOT_API_KEY

    def kore_status(self) -> dict:
        return {
            "xo": "live" if self.KORE_BOT_ID and self.KORE_CLIENT_ID else "mock",
            "search_ai": "live" if self.KORE_SEARCHAI_API_KEY and self.KORE_SEARCHAI_INDEX_ID else "mock",
            "agent_ai": "live" if self.KORE_AGENTAI_API_KEY else "mock",
            "crm": "live" if self.hubspot_token else "mock",
            "slack": "live" if self.SLACK_WEBHOOK_URL else "mock",
        }


settings = Settings()
