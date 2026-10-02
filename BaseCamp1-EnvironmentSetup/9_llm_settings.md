<div align="center">

<img src="assets/genai-coaching-logo.svg" width="360" alt="GenAI Coaching — AI Accelerator Hub" />

# Setting Up LLM & API Keys

> **GenAI Coaching × AI Accelerator Hub** — *White / Black / Gold Veranda* ` #0A0A0A ` ` #C9A86A ` ` #FFFFFF `  
> *Enterprise Corporate Training — Production-Grade • Weekend Quality 10-13 / 15-18 • Weekday 08:00-10:00*

</div>

---

> **GenAI Journey** · [← Prev](8_supabase_account.md) · [Next →](../BaseCamp1/4a_Virtual_Environment.md)
>

## 📑 Contents
- [One account, one key, per provider](#one-account-one-key-per-provider)
- [Anthropic (Claude)](#anthropic-claude)
- [OpenAI](#openai)
- [Google Gemini](#google-gemini)
- [Mistral AI](#mistral-ai)
- [Groq](#groq)
- [OpenRouter](#openrouter)
- [Serper](#serper)
- [Hugging Face](#hugging-face)
- [Side-by-Side Comparison](#side-by-side-comparison)
- [Test That Each Key Works](#test-that-each-key-works)
- [Keeping Your Keys Safe](#keeping-your-keys-safe)
- [LLM & API Key Setup — Final Check](#llm-api-key-setup-final-check)
  - [Build & Verify — LLM Settings — .env Format](#build-verify-llm-settings-env-format)

---


> Base Camp 2 and beyond will have you calling real LLM, search, and model-hosting APIs from Python. Every one of the eight providers below needs its own account and API key — three frontier labs you'll call most often (Anthropic, OpenAI, Google), plus fast open-weight and multi-model routing options, a web-search API, and a model-hosting service. Do this setup now, calmly, outside of class time, so you're not fumbling through sign-up flows and email verification links in the middle of a live session.

---


> [!TIP]
> **Corporate Tip — Deploy Ready**  
> Use this module as a standalone micro-module in your team stand-up. Have each learner demo the step live — corporate cohorts retain **3× more** when they teach back immediately. Pair with *ThinkPad TrackPoint* (hands on home row) + *Arc Weekend Space* (isolate work tabs).


Base Camp 1 · Week 1 · Before Base Camp 2

# Setting Up LLM & API Keys

Base Camp 2 and beyond will have you calling real LLM, search, and model-hosting APIs from Python. Every one of the eight providers below needs its own account and API key — three frontier labs you'll call most often (Anthropic, OpenAI, Google), plus fast open-weight and multi-model routing options, a web-search API, and a model-hosting service. Do this setup now, calmly, outside of class time, so you're not fumbling through sign-up flows and email verification links in the middle of a live session.

🔑 8 providers ⏱ ~25 minutes 💳 Small billing setup may be needed for a couple of them

Why this matters

## One account, one key, per provider

The chat apps you may already use — Claude.ai, ChatGPT, the Gemini app — and the developer APIs behind them are **separate products with separate billing**. A Claude Pro or ChatGPT Plus subscription does not include API credits. Each of the eight services below gives you a different capability you'll use later in the fellowship: three frontier chat models, fast open-weight inference, access to many different LLMs through one API, real-time web search results for grounding AI answers, and access to hosted models and datasets. All eight work the same basic way:

  1. **Open the provider's key page** Direct links are given in each section so you don't have to hunt through menus.
  2. **Sign in** Use a personal email you check regularly — some providers send a verification link or ask for a phone number first.
  3. **Create a key and name it** Something you'll recognize later, e.g. `AI Accelerator Hub-fellowship`.
  4. **Copy it immediately** Most providers show the full key exactly once. If you close the dialog first, you'll have to generate a new key.
  5. **Save it somewhere safe** A password manager, or the local `.env` file shown near the end of this page.

Plan for billing Anthropic and OpenAI generally require adding a small amount of prepaid credit before API calls will succeed — a few dollars is plenty for coursework. Gemini, Mistral, Groq, OpenRouter, Serper, and Hugging Face all have free tiers that work without a card. Details are in each section, and dashboards change their wording from time to time, so trust the on-screen labels if they differ slightly from these steps. 

Quick Check · One account, one key, per provider +25 XP

Q1: How many providers on this page?

8 providers: Anthropic, OpenAI, Gemini, Mistral, Groq, OpenRouter, Serper, Hugging Face 5 providers 3 providers 11 providers

Q2: Which detail is also in the "One account, one key, per provider" section?

Lede: Eight providers — three frontier labs plus open-weight Unrelated distractor A Unrelated distractor B Unrelated distractor C

Provider 1 of 8

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

Quick Check · Anthropic (Claude) +25 XP

Q1: Anthropic console is:

console.anthropic.com platform.openai.com aistudio.google.com serper.dev

Q2: Which detail is also in the "Anthropic (Claude)" section?

Anthropic section links to console.anthropic.com. Unrelated distractor A Unrelated distractor B Unrelated distractor C

Provider 2 of 8

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

Quick Check · OpenAI +25 XP

Q1: OpenAI console is:

platform.openai.com console.anthropic.com console.groq.com supabase.com

Q2: Which detail is also in the "OpenAI" section?

OpenAI section links to platform.openai.com. Unrelated distractor A Unrelated distractor B Unrelated distractor C

Provider 3 of 8

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

Quick Check · Google Gemini +25 XP

Q1: Gemini console is:

aistudio.google.com platform.openai.com console.mistral.ai github.com

Q2: Which detail is also in the "Google Gemini" section?

Gemini section links to aistudio.google.com. Unrelated distractor A Unrelated distractor B Unrelated distractor C

Provider 4 of 8

## Mistral AI

Mistral is a leading European AI lab — their API gives you access to models like Mistral Large and Mistral Small directly.

api keys pageCopy
[code] 
    https://admin.mistral.ai/organization/api-keys
[/code]

  1. **Sign up or log in** Open the link above. If you don't have an account yet, you'll be redirected to create one with your email, Google, or Microsoft account.
  2. **Land on the organization admin console** Logging in takes you straight to your organization's settings — the API Keys page is on the left-hand navigation.
  3. **Click "Create new key"** Give it a name like `AI Accelerator Hub-fellowship`. You can optionally set an expiration date.
  4. **Copy the key right away** Mistral displays the full key only once, immediately after creation.

Some new Mistral accounts need a verified phone number or a payment method on file before API access is fully enabled — follow any prompts the console shows you. The Mistral SDK reads `MISTRAL_API_KEY` from the environment. 

Quick Check · Mistral AI +25 XP

Q1: Mistral console is:

console.mistral.ai platform.openai.com aws.amazon.com supabase.co

Q2: Which detail is also in the "Mistral AI" section?

Mistral section links to console.mistral.ai. Unrelated distractor A Unrelated distractor B Unrelated distractor C

Provider 5 of 8

## Groq

Groq runs open-weight models (Llama, and others) on custom hardware built for extremely fast inference — useful whenever response speed matters.

api keys pageCopy
[code] 
    https://console.groq.com/keys
[/code]

  1. **Sign up or log in** Open the link above and continue with Google, GitHub, or an email address.
  2. **You're already on the right page** The link drops you directly onto the API Keys screen inside the Groq console.
  3. **Click "Create API Key"** Name it and confirm.
  4. **Copy the key from the dialog** It's shown once — copy it before closing the popup.

Groq's free tier includes generous rate limits, which makes it a good default choice for testing and live coding during class. The Groq SDK reads `GROQ_API_KEY` from the environment. 

Quick Check · Groq +25 XP

Q1: Groq console is:

console.groq.com console.mistral.ai platform.openai.com github.com

Q2: Which detail is also in the "Groq" section?

Groq section links to console.groq.com. Unrelated distractor A Unrelated distractor B Unrelated distractor C

Provider 6 of 8

## OpenRouter

OpenRouter is a single API that routes to dozens of different model providers — one key, one request format, many models to choose between.

api keys pageCopy
[code] 
    https://openrouter.ai/workspaces/default/keys
[/code]

  1. **Sign up or log in** Open the link above and continue with Google, GitHub, or an email address.
  2. **You land on your default workspace's Keys page** This is where every key you create for this workspace is listed.
  3. **Click "Create Key"** Name it, and optionally set a credit limit — a safety net that stops the key from spending past whatever cap you choose.
  4. **Copy the key** OpenRouter keys start with `sk-or-`. Copy the full string before closing the dialog.

Setting a credit limit on day one is worth the extra ten seconds — it caps your worst-case spend if a key ever leaks or a script runs away in a loop. The OpenRouter SDK reads `OPENROUTER_API_KEY` from the environment. 

Quick Check · OpenRouter +25 XP

Q1: OpenRouter gives:

Many LLMs via one API Only one model Only search Only DB

Q2: Which detail is also in the "OpenRouter" section?

Overview says OpenRouter many LLMs via one API. Unrelated distractor A Unrelated distractor B Unrelated distractor C

Provider 7 of 8

## Serper

Serper is a fast Google Search API — the standard way to give an AI agent real-time web search results instead of relying only on what a model already "knows."

api keys pageCopy
[code] 
    https://serper.dev/api-keys
[/code]

  1. **Sign up or log in** Open the link above — Google sign-in is supported alongside email.
  2. **Check the API Key page** Serper typically generates a default key automatically the moment you sign up.
  3. **Copy the existing key, or create a new one** If you'd rather start fresh, use the option on that page to generate a new key.

Serper's free tier gives you a fixed number of free search credits when you sign up — plenty for coursework, but keep an eye on usage once you start building agents that search on every request. 

Quick Check · Serper +25 XP

Q1: Serper provides:

Real-time web search PostgreSQL hosting Code editing Logo design

Q2: Which detail is also in the "Serper" section?

Overview says Serper provides real-time web search. Unrelated distractor A Unrelated distractor B Unrelated distractor C

Provider 8 of 8

## Hugging Face

Hugging Face hosts the largest catalog of open-source models and datasets, plus an Inference API for running many of them without downloading anything locally.

tokens pageCopy
[code] 
    https://huggingface.co/settings/tokens
[/code]

  1. **Sign up or log in** Open the link above and create an account with your email or a Google sign-in.
  2. **You land on Access Tokens settings** This page lists every token tied to your account.
  3. **Click "New token"** Name it, and choose a role: **Read** is enough for downloading models and datasets; pick **Write** only if you'll also be uploading models yourself.
  4. **Click "Generate token" and copy it** Hugging Face calls this a "token" rather than a "key" — functionally, it's the same thing.

Hugging Face calls these **access tokens** everywhere in its own docs — if you see that term later in the fellowship, it's the same key you're creating here. 

Quick Check · Hugging Face +25 XP

Q1: Hugging Face provides:

Hosted models and datasets via tokens Only AWS billing Only VS Code themes Only GitHub auth

Q2: Which detail is also in the "Hugging Face" section?

Overview says Hugging Face hosted models/datasets. Unrelated distractor A Unrelated distractor B Unrelated distractor C

Quick reference

## Side-by-Side Comparison

Provider| Key page| Key looks like| Billing to start| Env variable  
---|---|---|---|---  
**Anthropic**| `platform.claude.com/settings/keys`| `sk-ant-…`| Prepaid credit| `ANTHROPIC_API_KEY`  
**OpenAI**| `platform.openai.com/api-keys`| `sk-… / sk-proj-…`| Prepaid credit| `OPENAI_API_KEY`  
**Google Gemini**| `aistudio.google.com/apikey`| `AIza…`| Free tier available| `GEMINI_API_KEY`  
**Mistral AI**| `admin.mistral.ai/organization/api-keys`| opaque string| Free tier / verification| `MISTRAL_API_KEY`  
**Groq**| `console.groq.com/keys`| `gsk_…`| Free tier available| `GROQ_API_KEY`  
**OpenRouter**| `openrouter.ai/workspaces/default/keys`| `sk-or-…`| Free-tier models available| `OPENROUTER_API_KEY`  
**Serper**| `serper.dev/api-keys`| opaque string| Free search credits| `SERPER_API_KEY`  
**Hugging Face**| `huggingface.co/settings/tokens`| `hf_…`| Free| `HUGGINGFACE_API_KEY`  
  
Quick Check · Side-by-Side Comparison +25 XP

Q1: Compare table shows:

All 8 providers, key locations, billing notes Only 3 Only prices Only URLs

Q2: Which detail is also in the "Side-by-Side Comparison" section?

Compare is side-by-side for all 8. Unrelated distractor A Unrelated distractor B Unrelated distractor C

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
    
    export MISTRAL_API_KEY="paste-your-key"
    curl https://api.mistral.ai/v1/models \
      -H "Authorization: Bearer $MISTRAL_API_KEY"
    
    export GROQ_API_KEY="paste-your-key"
    curl https://api.groq.com/openai/v1/models \
      -H "Authorization: Bearer $GROQ_API_KEY"
    
    export OPENROUTER_API_KEY="paste-your-key"
    curl https://openrouter.ai/api/v1/models \
      -H "Authorization: Bearer $OPENROUTER_API_KEY"
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
    
    $env:MISTRAL_API_KEY = "paste-your-key"
    curl.exe https://api.mistral.ai/v1/models `
      -H "Authorization: Bearer $env:MISTRAL_API_KEY"
    
    $env:GROQ_API_KEY = "paste-your-key"
    curl.exe https://api.groq.com/openai/v1/models `
      -H "Authorization: Bearer $env:GROQ_API_KEY"
    
    $env:OPENROUTER_API_KEY = "paste-your-key"
    curl.exe https://openrouter.ai/api/v1/models `
      -H "Authorization: Bearer $env:OPENROUTER_API_KEY"
[/code]

One-off test only Keys typed into a terminal end up in your shell history, and these variables vanish when you close the window. That's fine for a quick check — the permanent setup is the `.env` file below. On Windows, use `curl.exe` (not plain `curl`), because PowerShell aliases `curl` to a different command. 

Quick Check · Test That Each Key Works +25 XP

Q1: Test uses:

Small Python snippets calling each provider Manual email Reinstall Python VS Code only

Q2: Which detail is also in the "Test That Each Key Works" section?

Test section shows Python snippets. Unrelated distractor A Unrelated distractor B Unrelated distractor C

Before you move on

## Keeping Your Keys Safe

Treat every API key exactly like a password — and remember that frontier-model keys are billed per use, so a leaked key can also be a leaked credit card:

  * Never paste a key into code you plan to commit to GitHub, or share it in Slack, email, or a chat message.
  * Keep keys in a local `.env` file and keep that file out of version control.
  * If a key ever leaks, revoke or regenerate it on that provider's key page immediately — then create a fresh one.
  * Set a spend limit where the provider offers one (OpenAI's and OpenRouter's billing settings, for example).

Keep all eight keys in one untracked `.env` file, and load them into Python at runtime:

.envCopy
[code] 
    ANTHROPIC_API_KEY=your_anthropic_key_here
    OPENAI_API_KEY=your_openai_key_here
    GEMINI_API_KEY=your_gemini_key_here
    MISTRAL_API_KEY=your_mistral_key_here
    GROQ_API_KEY=your_groq_key_here
    OPENROUTER_API_KEY=your_openrouter_key_here
    SERPER_API_KEY=your_serper_key_here
    HUGGINGFACE_API_KEY=your_huggingface_token_here
[/code]

pythonCopy
[code] 
    from dotenv import load_dotenv
    import os
    
    load_dotenv()  # reads the .env file in your project folder
    
    anthropic_key = os.getenv("ANTHROPIC_API_KEY")
    openai_key = os.getenv("OPENAI_API_KEY")
    gemini_key = os.getenv("GEMINI_API_KEY")
    # ...and so on for the rest, using the same variable names shown above
[/code]

Don't have python-dotenv yet? That's expected — `pip install python-dotenv` and virtual environments are covered in Base Camp 2, Session 2. For now, just get every key generated and saved somewhere safe. 

Quick Check · Keeping Your Keys Safe +25 XP

Q1: Save keys in:

.env file + password manager; don't commit Public repo Chat Screenshot

Q2: Which detail is also in the "Keeping Your Keys Safe" section?

Safety says .env + password manager. Unrelated distractor A Unrelated distractor B Unrelated distractor C

You're done when...

## LLM & API Key Setup — Final Check

  * ✓ You have an Anthropic developer account, a copied API key, and a little credit added
  * ✓ You have an OpenAI developer account, a copied API key, and a little credit added
  * ✓ You have a Gemini API key from Google AI Studio
  * ✓ You have a Mistral AI account and a copied API key
  * ✓ You have a Groq account and a copied API key
  * ✓ You have an OpenRouter account and a copied API key
  * ✓ You have a Serper account and a copied API key
  * ✓ You have a Hugging Face account and a copied access token
  * ✓ Each key returned a model list in the optional test (or you've noted which one didn't)
  * ✓ All eight keys are saved somewhere safe — not just left open in a browser tab

Stuck? Flag your instructor before Base Camp 2. If billing is a problem for any provider, tell them which one — you'll need at least the Groq and Serper keys ready for the earliest hands-on exercises, and the exercises can otherwise be done with just one or two of these keys. 

Quick Check · LLM & API Key Setup — Final Check +25 XP

Q1: Checklist expects:

All 8 keys saved safely Only 3 keys Only GitHub login Only Python version

Q2: Which detail is also in the "LLM & API Key Setup — Final Check" section?

Checklist verifies all 8. Unrelated distractor A Unrelated distractor B Unrelated distractor C

ELITE PRACTICE LAB

### Build & Verify — LLM Settings — .env Format

Type an env line as the safety section recommends. Example: ANTHROPIC_API_KEY=sk-ant-...

Your answer:

Check Hint

Hint: e.g. ANTHROPIC_API_KEY=sk-ant-... or OPENAI_API_KEY=sk-...

✓ Verified — Elite Completed

Confetti! You nailed the hands-on check for this page.

Elite Completed — GenAI Coaching

All Quick Checks + Lab verified. Your certificate is ready — XP saved on this device.

---

<div align="center">

<img src="assets/ai-accelerator-hub-logo.svg" width="180" alt="AI Accelerator Hub" />

*GenAI Learning · Powered by AI Accelerator Hub* — *Corporate Training • Production-Grade*

> *Source:* `BaseCamp1-EnvironmentSetup/9_llm_settings.html` → `BaseCamp1-EnvironmentSetup/9_llm_settings.md` | *Original HTML preserved* | *Gold `#C9A86A` Black `#0A0A0A` White `#FFFFFF`*


> **Continue your elite future** — Next up: *4A Virtual Environment*  
> [← Previous](8_supabase_account.md) · [Continue →](../BaseCamp1/4a_Virtual_Environment.md)

</div>
