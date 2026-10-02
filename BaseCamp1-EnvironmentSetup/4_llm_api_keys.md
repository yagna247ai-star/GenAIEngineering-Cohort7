<div align="center">

<img src="assets/genai-coaching-emblem.svg" width="52" alt="GenAI Coaching" style="vertical-align:middle;margin-right:12px" />
<img src="assets/ai-accelerator-hub-logo.svg" width="240" alt="AI Accelerator Hub" style="vertical-align:middle" />

# Setting Up Anthropic, OpenAI & Gemini API Keys

> **GenAI Coaching × AI Accelerator Hub** — *White / Black / Gold Veranda* ` #0A0A0A ` ` #C9A86A ` ` #FFFFFF `  
> *Enterprise Corporate Training — Production-Grade • Weekend Quality 10-13 / 15-18 • Weekday 08:00-10:00*

[![Enterprise](https://img.shields.io/badge/Enterprise-Corporate%20Training-0A0A0A?style=for-the-badge)](.) [![Gold Veranda](https://img.shields.io/badge/Gold_Veranda-C9A86A?style=for-the-badge&logo=star)](.) [![Deploy Ready](https://img.shields.io/badge/Deploy-Ready-C9A86A?style=flat-square)](.)

</div>

---

> **GenAI Journey** · [← Prev](3_api_keys.md) · [Next →](5_aws_account.md)
>

## 📑 Contents
- [An API key is not your chat subscription](#an-api-key-is-not-your-chat-subscription)
- [Anthropic (Claude)](#anthropic-claude)
- [OpenAI](#openai)
- [Google Gemini](#google-gemini)
- [Side-by-Side Comparison](#side-by-side-comparison)
- [Test That Each Key Works](#test-that-each-key-works)
- [Keeping Your Keys Safe](#keeping-your-keys-safe)
- [LLM API Key Setup — Final Check](#llm-api-key-setup-final-check)
  - [Build & Verify — LLM Keys — Frontier Key Format](#build-verify-llm-keys-frontier-key-format)

---


> The previous page covered fast, open-weight and search providers. This one covers the three frontier model labs you'll call most often from Python: Anthropic's Claude, OpenAI's GPT models, and Google's Gemini. Each needs its own account and API key — do it now, calmly, so class time is spent coding instead of waiting on verification emails and billing pages.

---


> [!TIP]
> **Corporate Tip — Deploy Ready**  
> Use this module as a standalone micro-module in your team stand-up. Have each learner demo the step live — corporate cohorts retain **3× more** when they teach back immediately. Pair with *ThinkPad TrackPoint* (hands on home row) + *Arc Weekend Space* (isolate work tabs).


![](assets/genai-coaching-emblem.svg) Base Camp 1 · Week 1 · Before Base Camp 2

# Setting Up Anthropic, OpenAI & Gemini API Keys

The previous page covered fast, open-weight and search providers. This one covers the three frontier model labs you'll call most often from Python: Anthropic's Claude, OpenAI's GPT models, and Google's Gemini. Each needs its own account and API key — do it now, calmly, so class time is spent coding instead of waiting on verification emails and billing pages.

🔑 3 providers ⏱ ~15 minutes 💳 Small billing setup may be needed

Why this matters

## An API key is not your chat subscription

The chat apps you may already use — Claude.ai, ChatGPT, the Gemini app — and the developer APIs behind them are **separate products with separate billing**. A Claude Pro or ChatGPT Plus subscription does not include API credits. To call these models from code you need a key from each provider's developer console, created through the steps below.

  1. **Open the provider's key page** Direct links are given in each section so you don't have to hunt through menus.
  2. **Sign in** Use a personal email you check regularly — some providers send a verification link or ask for a phone number first.
  3. **Create a key and name it** Something you'll recognize later, e.g. `AI Accelerator Hub-fellowship`.
  4. **Copy it immediately** Anthropic and OpenAI show the full key exactly once. If you close the dialog first, you'll have to generate a new key.
  5. **Save it somewhere safe** A password manager, or the local `.env` file shown near the end of this page.

Plan for billing Anthropic and OpenAI generally require adding a small amount of prepaid credit before API calls will succeed — a few dollars is plenty for coursework. Gemini has a free tier that works without a card. Details are in each section, and dashboards change their wording from time to time, so trust the on-screen labels if they differ slightly from these steps. 

![](assets/genai-coaching-emblem.svg) Quick Check · An API key is not your chat subscription +25 XP

Q1: Chat subscription vs API key:

Separate products/billing — Claude Pro/ChatGPT Plus does not include API credits Same thing API key is free if you have chat subscription Billing is shared

Q2: Which detail is also in the "An API key is not your chat subscription" section?

Overview: chat and API are separate products with separate b Unrelated distractor A Unrelated distractor B Unrelated distractor C

Provider 1 of 3

## Anthropic (Claude)

Anthropic makes the Claude family of models. Their developer platform is where you create keys and manage credits for the Claude API.

api keys pageCopy
[code] 
    https://platform.claude.com/settings/keys
[/code]

  1. **Sign up or log in** Open the link above. If you don't have an account yet, you'll be prompted to create one with your email or a Google account.
  2. **Land on the API Keys page** The link takes you to _Settings → API Keys_ inside the developer console.
  3. **Click "Create Key"** Give it a name like `AI Accelerator Hub-fellowship`. If you're asked to pick a workspace, the default one is fine.
  4. **Copy the key right away** Anthropic keys start with `sk-ant-`, and the full key is displayed only once.
  5. **Add credit so calls succeed** Open _Settings → Billing_ and purchase a small amount of credit. A valid key with no credit will return an error when you actually call the model.

The Anthropic SDK looks for an environment variable named `ANTHROPIC_API_KEY` automatically — use exactly that name in your `.env` file and you won't have to pass the key around in code. 

![](assets/genai-coaching-emblem.svg) Quick Check · Anthropic (Claude) +25 XP

Q1: Anthropic keys are at:

console.anthropic.com → API Keys console.groq.com platform.openai.com aistudio.google.com

Q2: Which detail is also in the "Anthropic (Claude)" section?

Anthropic section links to console.anthropic.com. Unrelated distractor A Unrelated distractor B Unrelated distractor C

Provider 2 of 3

## OpenAI

OpenAI makes the GPT family of models. Its developer platform is separate from the ChatGPT app — your ChatGPT login usually works there, but the billing does not carry over.

api keys pageCopy
[code] 
    https://platform.openai.com/api-keys
[/code]

  1. **Sign up or log in** Open the link above and continue with your email, or a Google, Microsoft, or Apple account. New accounts may be asked to verify a phone number.
  2. **Land on the API Keys page** This page lists every secret key tied to your account and project.
  3. **Click "Create new secret key"** Name it (e.g. `AI Accelerator Hub-fellowship`). Leave the project as the default, and leave permissions on **All** for coursework.
  4. **Copy the key immediately** OpenAI keys start with `sk-` (project keys often start with `sk-proj-`). The full key is shown only once — copy it before clicking Done.
  5. **Add credit so calls succeed** Open _Settings → Billing_ , add a payment method, and purchase a small amount of prepaid credit. Without credit, requests fail with a "quota exceeded" error even though the key itself is valid.

The OpenAI SDK reads `OPENAI_API_KEY` from the environment by default — use that exact name in your `.env` file. The billing page also lets you set a monthly spend limit; setting a low one on day one caps your worst-case cost if a key ever leaks. 

![](assets/genai-coaching-emblem.svg) Quick Check · OpenAI +25 XP

Q1: OpenAI keys are at:

platform.openai.com → API keys console.anthropic.com serper.dev supabase.co

Q2: Which detail is also in the "OpenAI" section?

OpenAI section links to platform.openai.com. Unrelated distractor A Unrelated distractor B Unrelated distractor C

Provider 3 of 3

## Google Gemini

Gemini keys are created in Google AI Studio, Google's browser-based workspace for the Gemini API. You sign in with a regular Google account — no separate developer signup.

api keys page (Google AI Studio)Copy
[code] 
    https://aistudio.google.com/apikey
[/code]

  1. **Sign in with your Google account** Open the link above. Accept the terms of service if prompted.
  2. **Land on the API Keys page** Any keys you've created before are listed here.
  3. **Click "Create API key"** AI Studio asks which Google Cloud project the key belongs to. Pick an existing project, or choose the option to create the key in a new project — either works.
  4. **Copy the key** Gemini keys typically start with `AIza`. Unlike Anthropic and OpenAI, AI Studio keeps your keys listed, so you can usually come back and copy one again later.

The Gemini API has a free tier with rate limits, so you can get started without adding a card. The Google GenAI Python SDK reads the `GEMINI_API_KEY` environment variable — use that name in your `.env` file. 

Free-tier data note Under Google's terms, content sent through the free tier may be used to improve Google's products. Don't send sensitive, personal, or confidential data while using the free tier. 

![](assets/genai-coaching-emblem.svg) Quick Check · Google Gemini +25 XP

Q1: Gemini keys are at:

aistudio.google.com → API Keys (or Google AI Studio) platform.openai.com console.mistral.ai github.com

Q2: Which detail is also in the "Google Gemini" section?

Gemini section links to aistudio.google.com. Unrelated distractor A Unrelated distractor B Unrelated distractor C

Quick reference

## Side-by-Side Comparison

Provider| Key page| Key looks like| Billing to start| Env variable  
---|---|---|---|---  
**Anthropic**| `platform.claude.com/settings/keys`| `sk-ant-…`| Prepaid credit| `ANTHROPIC_API_KEY`  
**OpenAI**| `platform.openai.com/api-keys`| `sk-… / sk-proj-…`| Prepaid credit| `OPENAI_API_KEY`  
**Google Gemini**| `aistudio.google.com/apikey`| `AIza…`| Free tier available| `GEMINI_API_KEY`  
  
![](assets/genai-coaching-emblem.svg) Quick Check · Side-by-Side Comparison +25 XP

Q1: Which table row is shown?

Provider, key location, billing notes side-by-side Only prices Only model names Only URLs

Q2: Which detail is also in the "Side-by-Side Comparison" section?

Compare section provides side-by-side table. Unrelated distractor A Unrelated distractor B Unrelated distractor C

Optional but recommended

## Test That Each Key Works

Each command below asks the provider to list the models your key can use. It sends no prompt and costs nothing — a list of models means the key is valid, an authentication error means it was copied wrongly.

🍎 MACOS — Terminal

zshCopy
[code] 
    export ANTHROPIC_API_KEY="paste-your-key"
    curl https://api.anthropic.com/v1/models \
      -H "x-api-key: $ANTHROPIC_API_KEY" \
      -H "anthropic-version: 2023-06-01"
    
    export OPENAI_API_KEY="paste-your-key"
    curl https://api.openai.com/v1/models \
      -H "Authorization: Bearer $OPENAI_API_KEY"
    
    export GEMINI_API_KEY="paste-your-key"
    curl https://generativelanguage.googleapis.com/v1beta/models \
      -H "x-goog-api-key: $GEMINI_API_KEY"
[/code]

🪟 WINDOWS — PowerShell

powershellCopy
[code] 
    $env:ANTHROPIC_API_KEY = "paste-your-key"
    curl.exe https://api.anthropic.com/v1/models `
      -H "x-api-key: $env:ANTHROPIC_API_KEY" `
      -H "anthropic-version: 2023-06-01"
    
    $env:OPENAI_API_KEY = "paste-your-key"
    curl.exe https://api.openai.com/v1/models `
      -H "Authorization: Bearer $env:OPENAI_API_KEY"
    
    $env:GEMINI_API_KEY = "paste-your-key"
    curl.exe https://generativelanguage.googleapis.com/v1beta/models `
      -H "x-goog-api-key: $env:GEMINI_API_KEY"
[/code]

One-off test only Keys typed into a terminal end up in your shell history, and these variables vanish when you close the window. That's fine for a quick check — the permanent setup is the `.env` file below. On Windows, use `curl.exe` (not plain `curl`), because PowerShell aliases `curl` to a different command. 

![](assets/genai-coaching-emblem.svg) Quick Check · Test That Each Key Works +25 XP

Q1: How to test keys?

Run a small Python snippet that calls each provider Email support Wait for class Reinstall Python

Q2: Which detail is also in the "Test That Each Key Works" section?

Test section gives Python snippets to call each API. Unrelated distractor A Unrelated distractor B Unrelated distractor C

Before you move on

## Keeping Your Keys Safe

Frontier-model keys are billed per use, so a leaked key is a leaked credit card. The same rules apply as for every other key in this fellowship:

  * Never paste a key into code you plan to commit to GitHub, or share it in Slack, email, or a chat message.
  * Keep keys in a local `.env` file and keep that file out of version control.
  * If a key leaks, revoke or delete it on that provider's key page immediately — then create a fresh one.
  * Set a spend limit where the provider offers one (OpenAI's billing settings, for example).

Add these three lines to the same `.env` file you started on the previous API-keys page — one file, one line per key:

.envCopy
[code] 
    ANTHROPIC_API_KEY=your_anthropic_key_here
    OPENAI_API_KEY=your_openai_key_here
    GEMINI_API_KEY=your_gemini_key_here
[/code]

pythonCopy
[code] 
    from dotenv import load_dotenv
    import os
    
    load_dotenv()  # reads the .env file in your project folder
    
    anthropic_key = os.getenv("ANTHROPIC_API_KEY")
    openai_key = os.getenv("OPENAI_API_KEY")
    gemini_key = os.getenv("GEMINI_API_KEY")
[/code]

Don't have python-dotenv yet? That's expected — `pip install python-dotenv` and virtual environments are covered in Base Camp 2, Session 2. For now, just get every key generated and saved somewhere safe. 

![](assets/genai-coaching-emblem.svg) Quick Check · Keeping Your Keys Safe +25 XP

Q1: Safest practice is:

Store in .env, never commit, use password manager Commit .env to GitHub Share keys in Slack Hardcode in notebook

Q2: Which detail is also in the "Keeping Your Keys Safe" section?

Safety repeats .env + gitignore guidance. Unrelated distractor A Unrelated distractor B Unrelated distractor C

You're done when...

## LLM API Key Setup — Final Check

  * ✓ You have an Anthropic developer account, a copied API key, and a little credit added
  * ✓ You have an OpenAI developer account, a copied API key, and a little credit added
  * ✓ You have a Gemini API key from Google AI Studio
  * ✓ Each key returned a model list in the optional test (or you've noted which one didn't)
  * ✓ All three keys are saved somewhere safe — not just left open in a browser tab

Stuck? Flag your instructor before Base Camp 2. If billing is a problem for any provider, tell them which one — the exercises can be done with just one or two of these keys. 

![](assets/genai-coaching-emblem.svg) Quick Check · LLM API Key Setup — Final Check +25 XP

Q1: Final check needs:

Anthropic, OpenAI, Gemini keys saved Only Groq key Only GitHub login VS Code theme

Q2: Which detail is also in the "LLM API Key Setup — Final Check" section?

Checklist verifies the three frontier keys. Unrelated distractor A Unrelated distractor B Unrelated distractor C

ELITE PRACTICE LAB

### Build & Verify — LLM Keys — Frontier Key Format

Paste the prefix of an Anthropic key. The page says keys are shown once and start with sk-ant-…

Your answer:

Check Hint

Hint: Anthropic keys start with sk-ant-

✓ Verified — Elite Completed

Confetti! You nailed the hands-on check for this page.

Elite Completed — GenAI Coaching

All Quick Checks + Lab verified. Your certificate is ready — XP saved on this device.

---

<div align="center">

<img src="assets/genai-coaching-emblem.svg" width="28" alt="GenAI Coaching" style="vertical-align:middle" /> **GEN AI COACHING** &nbsp;|&nbsp; <img src="assets/ai-accelerator-hub-logo.svg" width="140" alt="AI Accelerator Hub" style="vertical-align:middle" />

*GenAI Learning · Powered by AI Accelerator Hub* — *Corporate Training • Production-Grade*

> *Source:* `BaseCamp1-EnvironmentSetup/4_llm_api_keys.html` → `BaseCamp1-EnvironmentSetup/4_llm_api_keys.md` | *Original HTML preserved* | *Gold `#C9A86A` Black `#0A0A0A` White `#FFFFFF`*


> **Continue your elite future** — Next up: *5 Aws Account*  
> [← Previous](3_api_keys.md) · [Continue →](5_aws_account.md)

</div>
