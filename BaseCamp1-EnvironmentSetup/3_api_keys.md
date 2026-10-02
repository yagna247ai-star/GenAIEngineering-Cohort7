<div align="center">

<img src="assets/genai-coaching-logo.svg" width="360" alt="GenAI Coaching — AI Accelerator Hub" />

# Setting Up API Keys

> **GenAI Coaching × AI Accelerator Hub** — *White / Black / Gold Veranda* ` #0A0A0A ` ` #C9A86A ` ` #FFFFFF `  
> *Enterprise Corporate Training — Production-Grade • Weekend Quality 10-13 / 15-18 • Weekday 08:00-10:00*

</div>

---

> **GenAI Journey** · [← Prev](2_VS_Code.md) · [Next →](4_llm_api_keys.md)
>

## 📑 Contents
- [One account, one key, per provider](#one-account-one-key-per-provider)
- [Mistral AI](#mistral-ai)
- [Groq](#groq)
- [OpenRouter](#openrouter)
- [Serper](#serper)
- [Hugging Face](#hugging-face)
- [Keeping Your Keys Safe](#keeping-your-keys-safe)
- [API Key Setup — Final Check](#api-key-setup-final-check)
  - [Build & Verify — API Keys — Validate Token Format](#build-verify-api-keys-validate-token-format)

---


> Base Camp 2 and beyond will have you calling real LLM, search, and model-hosting APIs from Python. Every one of those providers needs an account and an API key. Do this setup now — once, calmly, outside of class time — so you're not fumbling through sign-up flows and email verification links in the middle of a live session.

---


> [!TIP]
> **Corporate Tip — Deploy Ready**  
> Use this module as a standalone micro-module in your team stand-up. Have each learner demo the step live — corporate cohorts retain **3× more** when they teach back immediately. Pair with *ThinkPad TrackPoint* (hands on home row) + *Arc Weekend Space* (isolate work tabs).


Base Camp 1 · Week 1 · Before Base Camp 2

# Setting Up API Keys

Base Camp 2 and beyond will have you calling real LLM, search, and model-hosting APIs from Python. Every one of those providers needs an account and an API key. Do this setup now — once, calmly, outside of class time — so you're not fumbling through sign-up flows and email verification links in the middle of a live session.

🔑 5 providers ⏱ ~15 minutes No coding required yet

Why this matters

## One account, one key, per provider

Each of these five services gives you a different capability you'll use later in the fellowship: fast open-weight model inference, access to many different LLMs through one API, real-time web search results for grounding AI answers, and access to hosted models and datasets. All five work the same basic way:

  1. **Create an account** Sign up with an email address, or use a Google/GitHub sign-in where offered — whichever is faster for you.
  2. **Find the API keys page** Every dashboard has a dedicated page for creating and managing keys. Direct links are given below so you don't have to hunt for them.
  3. **Generate a key** Click "Create," give it a name you'll recognize later (e.g. `AI Accelerator Hub-fellowship`), and confirm.
  4. **Copy it immediately** Most providers show the full key exactly once. If you close the dialog without copying it, you'll have to generate a new one.
  5. **Save it somewhere safe** A password manager, or a local `.env` file as shown in the last section on this page.

Before you start Use a personal email you check regularly — some providers send a verification link before the API keys page unlocks. 


> [!NOTE]
> **Quick Check — One account, one key, per provider · +25 XP** 🎯
>
> **Q1: How many providers are set up on this page?**
>
> - [ ] 5 providers: Mistral, Groq, OpenRouter, Serper, Hugging Face
> - [ ] 3 providers
> - [ ] 8 providers
> - [ ] 2 providers
>
> **Q2: What is the common flow for every provider?**
>
> - [ ] Create account → find API keys page → generate key → copy immediately → save safe
> - [ ] Email the CEO → wait
> - [ ] Install VS Code → run Python
> - [ ] Push to GitHub → deploy
>
> <details><summary>✅ Reveal Answers — One account, one key, per provider</summary>
>
> - **Q1: How many providers are set up on this page?** → *5 providers: Mistral, Groq, OpenRouter, Serper, Hugging Face* — Meta pill and overview say 5 providers.
> - **Q2: What is the common flow for every provider?** → *Create account → find API keys page → generate key → copy immediately → save safe* — Overview lists the 5-step flow.
>
> </details>


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

Some new Mistral accounts need a verified phone number or a payment method on file before API access is fully enabled — follow any prompts the console shows you. 


> [!NOTE]
> **Quick Check — Mistral AI · +25 XP** 🎯
>
> **Q1: Where are Mistral keys managed?**
>
> - [ ] console.mistral.ai → API Keys
> - [ ] github.com/settings
> - [ ] supabase dashboard
> - [ ] aws console
>
> **Q2: Which detail is also in the "Mistral AI" section?**
>
> - [ ] Mistral section links to console.mistral.ai API Keys.
> - [ ] Unrelated distractor A
> - [ ] Unrelated distractor B
> - [ ] Unrelated distractor C
>
> <details><summary>✅ Reveal Answers — Mistral AI</summary>
>
> - **Q1: Where are Mistral keys managed?** → *console.mistral.ai → API Keys* — Mistral section links to console.mistral.ai API Keys.
> - **Q2: Which detail is also in the "Mistral AI" section?** → *Mistral section links to console.mistral.ai API Keys.* — Mistral section links to console.mistral.ai API Keys.
>
> </details>


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

Groq's free tier includes generous rate limits, which makes it a good default choice for testing and live coding during class. 


> [!NOTE]
> **Quick Check — Groq · +25 XP** 🎯
>
> **Q1: Groq dashboard is at:**
>
> - [ ] console.groq.com → API Keys
> - [ ] console.mistral.ai
> - [ ] platform.openai.com
> - [ ] serper.dev
>
> **Q2: Which detail is also in the "Groq" section?**
>
> - [ ] Groq section gives console.groq.com.
> - [ ] Unrelated distractor A
> - [ ] Unrelated distractor B
> - [ ] Unrelated distractor C
>
> <details><summary>✅ Reveal Answers — Groq</summary>
>
> - **Q1: Groq dashboard is at:** → *console.groq.com → API Keys* — Groq section gives console.groq.com.
> - **Q2: Which detail is also in the "Groq" section?** → *Groq section gives console.groq.com.* — Groq section gives console.groq.com.
>
> </details>


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

Setting a credit limit on day one is worth the extra ten seconds — it caps your worst-case spend if a key ever leaks or a script runs away in a loop. 


> [!NOTE]
> **Quick Check — OpenRouter · +25 XP** 🎯
>
> **Q1: OpenRouter provides:**
>
> - [ ] Access to many different LLMs through one API
> - [ ] Only one model
> - [ ] Only search results
> - [ ] Only storage
>
> **Q2: Which detail is also in the "OpenRouter" section?**
>
> - [ ] Overview says OpenRouter gives access to many LLMs through o
> - [ ] Unrelated distractor A
> - [ ] Unrelated distractor B
> - [ ] Unrelated distractor C
>
> <details><summary>✅ Reveal Answers — OpenRouter</summary>
>
> - **Q1: OpenRouter provides:** → *Access to many different LLMs through one API* — Overview says OpenRouter gives access to many LLMs through one API.
> - **Q2: Which detail is also in the "OpenRouter" section?** → *Overview says OpenRouter gives access to many LLMs through o* — Overview says OpenRouter gives access to many LLMs through one API.
>
> </details>


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


> [!NOTE]
> **Quick Check — Serper · +25 XP** 🎯
>
> **Q1: Serper is for:**
>
> - [ ] Real-time web search results for grounding AI answers
> - [ ] Hosting PostgreSQL
> - [ ] Python editing
> - [ ] Designing logos
>
> **Q2: Which detail is also in the "Serper" section?**
>
> - [ ] Overview says Serper provides real-time web search results.
> - [ ] Unrelated distractor A
> - [ ] Unrelated distractor B
> - [ ] Unrelated distractor C
>
> <details><summary>✅ Reveal Answers — Serper</summary>
>
> - **Q1: Serper is for:** → *Real-time web search results for grounding AI answers* — Overview says Serper provides real-time web search results.
> - **Q2: Which detail is also in the "Serper" section?** → *Overview says Serper provides real-time web search results.* — Overview says Serper provides real-time web search results.
>
> </details>


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


> [!NOTE]
> **Quick Check — Hugging Face · +25 XP** 🎯
>
> **Q1: Hugging Face keys are:**
>
> - [ ] Access tokens for hosted models and datasets
> - [ ] AWS root passwords
> - [ ] VS Code themes
> - [ ] Git commits
>
> **Q2: Which detail is also in the "Hugging Face" section?**
>
> - [ ] Overview says Hugging Face gives hosted models and datasets.
> - [ ] Unrelated distractor A
> - [ ] Unrelated distractor B
> - [ ] Unrelated distractor C
>
> <details><summary>✅ Reveal Answers — Hugging Face</summary>
>
> - **Q1: Hugging Face keys are:** → *Access tokens for hosted models and datasets* — Overview says Hugging Face gives hosted models and datasets.
> - **Q2: Which detail is also in the "Hugging Face" section?** → *Overview says Hugging Face gives hosted models and datasets.* — Overview says Hugging Face gives hosted models and datasets.
>
> </details>


## Keeping Your Keys Safe

Treat every API key exactly like a password: anyone who has it can make requests — and rack up usage or charges — on your account. A few rules that will save you real pain later:

  * Never paste a key directly into code you plan to commit to GitHub or share in Slack, email, or a chat message.
  * Store keys in a local `.env` file (shown below) and keep that file out of version control.
  * If a key ever leaks, go back to that same provider's dashboard and revoke or regenerate it immediately — don't just delete the leaked copy.

A sneak peek at the pattern you'll use once Base Camp 2 introduces functions and files: keep all your keys in one untracked file, and load them into Python at runtime.

.envCopy
[code] 
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
    
    mistral_key = os.getenv("MISTRAL_API_KEY")
    groq_key = os.getenv("GROQ_API_KEY")
[/code]

Don't have python-dotenv yet? That's expected — `pip install python-dotenv` and virtual environments are covered in Base Camp 2, Session 2. For now, just get every key generated and saved somewhere safe (a password manager works fine too). 


> [!NOTE]
> **Quick Check — Keeping Your Keys Safe · +25 XP** 🎯
>
> **Q1: Best place to store keys?**
>
> - [ ] Password manager or local .env file (not committed)
> - [ ] Paste in public GitHub repo
> - [ ] Email to group chat
> - [ ] Screenshot on desktop
>
> **Q2: Which detail is also in the "Keeping Your Keys Safe" section?**
>
> - [ ] Safety section says use password manager or local .env file.
> - [ ] Unrelated distractor A
> - [ ] Unrelated distractor B
> - [ ] Unrelated distractor C
>
> <details><summary>✅ Reveal Answers — Keeping Your Keys Safe</summary>
>
> - **Q1: Best place to store keys?** → *Password manager or local .env file (not committed)* — Safety section says use password manager or local .env file.
> - **Q2: Which detail is also in the "Keeping Your Keys Safe" section?** → *Safety section says use password manager or local .env file.* — Safety section says use password manager or local .env file.
>
> </details>


## API Key Setup — Final Check

  * ✓ You have a Mistral AI account and a copied API key
  * ✓ You have a Groq account and a copied API key
  * ✓ You have an OpenRouter account and a copied API key
  * ✓ You have a Serper account and a copied API key
  * ✓ You have a Hugging Face account and a copied access token
  * ✓ All five keys are saved somewhere safe — not just left open in a browser tab

Stuck? Flag your instructor before Base Camp 2 — you'll need at least the Groq and Serper keys ready for the earliest hands-on exercises. 


> [!NOTE]
> **Quick Check — API Key Setup — Final Check · +25 XP** 🎯
>
> **Q1: Checklist confirms:**
>
> - [ ] All 5 keys saved safely and retrievable
> - [ ] VS Code theme chosen
> - [ ] Python path verified
> - [ ] AWS MFA enabled
>
> **Q2: Which detail is also in the "API Key Setup — Final Check" section?**
>
> - [ ] Checklist verifies all 5 provider keys.
> - [ ] Unrelated distractor A
> - [ ] Unrelated distractor B
> - [ ] Unrelated distractor C
>
> <details><summary>✅ Reveal Answers — API Key Setup — Final Check</summary>
>
> - **Q1: Checklist confirms:** → *All 5 keys saved safely and retrievable* — Checklist verifies all 5 provider keys.
> - **Q2: Which detail is also in the "API Key Setup — Final Check" section?** → *Checklist verifies all 5 provider keys.* — Checklist verifies all 5 provider keys.
>
> </details>

Check Hint

Hint: Hugging Face tokens start with hf_ followed by letters/numbers

✓ Verified — Elite Completed

Confetti! You nailed the hands-on check for this page.

Elite Completed — GenAI Coaching

All Quick Checks + Lab verified. Your certificate is ready — XP saved on this device.

---

<div align="center">

<img src="assets/ai-accelerator-hub-logo.svg" width="180" alt="AI Accelerator Hub" />

*GenAI Learning · Powered by AI Accelerator Hub* — *Corporate Training • Production-Grade*

> *Source:* `BaseCamp1-EnvironmentSetup/3_api_keys.html` → `BaseCamp1-EnvironmentSetup/3_api_keys.md` | *Original HTML preserved* | *Gold `#C9A86A` Black `#0A0A0A` White `#FFFFFF`*


> **Continue your elite future** — Next up: *4 Llm Api Keys*  
> [← Previous](2_VS_Code.md) · [Continue →](4_llm_api_keys.md)

</div>
