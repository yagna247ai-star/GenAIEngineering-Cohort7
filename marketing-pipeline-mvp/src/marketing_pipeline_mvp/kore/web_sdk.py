"""Kore.ai Web SDK snippet generator.

Kore.ai Web SDK (XO Platform) - embed via KoreChat SDK:
<script src="https://bots.kore.ai/api/botstack/sdk/kore-ai-sdk.js"></script>
KoreChat.show({botOptions: {koreAPIUrl: "https://bots.kore.ai/api/", botInfo:{name, _id}, clientId, clientSecret}})

This generator emits the snippet for live mode, or a local widget fallback.
"""
from __future__ import annotations

import os


def web_sdk_snippet(bot_name: str = "Lead-to-Meeting Agent", bot_id: str | None = None) -> str:
    bot_id = bot_id or os.getenv("KORE_BOT_ID", "mock-marketing-pipeline-bot")
    client_id = os.getenv("KORE_CLIENT_ID", "")
    if client_id and bot_id != "mock-marketing-pipeline-bot":
        return f"""<!-- Kore.ai Web SDK (LIVE) -->
<script src=\"https://bots.kore.ai/api/botstack/sdk/kore-ai-sdk.js\"></script>
<script>
console.log('Kore.ai XO Web SDK: connecting to bot {bot_id}');
if (window.KoreSDK) {{
  KoreSDK.chatConfig.botOptions.botInfo = {{name: \"{bot_name}\", \"_id\": \"{bot_id}\"}};
  KoreSDK.chatConfig.botOptions.clientId = \"{client_id}\";
  KoreSDK.chatConfig.botOptions.enableAck = {{delivery: true}};
  KoreSDK.show(KoreSDK.chatConfig);
}} else {{ console.warn('Kore SDK not loaded'); }}
</script>
"""
    return """<!-- Kore.ai Web SDK (MOCK - local widget) -->
<!-- In production, replace with snippet from kore-studio/web-sdk-snippet.html -->
<script>console.log('Kore.ai Web SDK mock: using local FastAPI widget at /')</script>
<div id=\"kore-web-sdk-mock\" style=\"position:fixed;bottom:20px;right:20px;background:#0f766e;color:white;padding:10px 14px;border-radius:999px;font:600 13px system-ui;box-shadow:0 4px 12px rgba(0,0,0,.15)\">💬 Chat with us (Local MVP)</div>
"""


def web_sdk_config() -> dict:
    return {
        "bot_id": os.getenv("KORE_BOT_ID", "mock-marketing-pipeline-bot"),
        "has_credentials": bool(os.getenv("KORE_CLIENT_ID")),
        "mode": "live" if os.getenv("KORE_CLIENT_ID") else "mock",
        "sdk_url": "https://bots.kore.ai/api/botstack/sdk/kore-ai-sdk.js",
        "local_fallback": "/",
    }
