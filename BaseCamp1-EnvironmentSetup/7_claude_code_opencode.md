<div align="center">

<img src="assets/genai-coaching-emblem.svg" width="52" alt="GenAI Coaching" style="vertical-align:middle;margin-right:12px" />
<img src="assets/ai-accelerator-hub-logo.svg" width="240" alt="AI Accelerator Hub" style="vertical-align:middle" />

# Setting Up Claude Code & OpenCode with API Keys

> **GenAI Coaching × AI Accelerator Hub** — *White / Black / Gold Veranda* ` #0A0A0A ` ` #C9A86A ` ` #FFFFFF `  
> *Enterprise Corporate Training — Production-Grade • Weekend Quality 10-13 / 15-18 • Weekday 08:00-10:00*

[![Enterprise](https://img.shields.io/badge/Enterprise-Corporate%20Training-0A0A0A?style=for-the-badge)](.) [![Gold Veranda](https://img.shields.io/badge/Gold_Veranda-C9A86A?style=for-the-badge&logo=star)](.) [![Deploy Ready](https://img.shields.io/badge/Deploy-Ready-C9A86A?style=flat-square)](.)

</div>

---

> **GenAI Journey** · [← Prev](6_github_account.md) · [Next →](7_claude_code_opencode_new.md)
>

## 📑 Contents
- [Two agents, one set of keys](#two-agents-one-set-of-keys)
- [Install Claude Code](#install-claude-code)
- [Give Claude Code Your Anthropic API Key](#give-claude-code-your-anthropic-api-key)
- [Run Claude Code for the First Time](#run-claude-code-for-the-first-time)
- [Install OpenCode](#install-opencode)
- [Connect Your API Keys to OpenCode](#connect-your-api-keys-to-opencode)
  - [Option 1 — The /connect command (recommended)](#option-1-the-connect-command-recommended)
  - [Option 2 — Environment variables](#option-2-environment-variables)
- [Pick a Model and Run OpenCode](#pick-a-model-and-run-opencode)
- [Side-by-Side Commands](#side-by-side-commands)
- [Using Coding Agents Safely](#using-coding-agents-safely)
- [If Something Goes Wrong](#if-something-goes-wrong)
- [Coding Agent Setup — Final Check](#coding-agent-setup-final-check)
  - [Build & Verify — Coding Agents — First Run](#build-verify-coding-agents-first-run)

---


> Claude Code and OpenCode are AI coding agents that live in your terminal: you open a project folder, describe what you want in plain English, and the agent reads your files, edits code, and runs commands to get it done. Both can run on the API keys you created on the previous pages — this page installs each one and connects your key, so you can start building with them from day one.

---


> [!TIP]
> **Corporate Tip — Deploy Ready**  
> Use this module as a standalone micro-module in your team stand-up. Have each learner demo the step live — corporate cohorts retain **3× more** when they teach back immediately. Pair with *ThinkPad TrackPoint* (hands on home row) + *Arc Weekend Space* (isolate work tabs).


![](assets/genai-coaching-emblem.svg) Base Camp 1 · Week 1 · AI Coding Tools

# Setting Up Claude Code & OpenCode with API Keys

Claude Code and OpenCode are AI coding agents that live in your terminal: you open a project folder, describe what you want in plain English, and the agent reads your files, edits code, and runs commands to get it done. Both can run on the API keys you created on the previous pages — this page installs each one and connects your key, so you can start building with them from day one.

⌨️ 2 terminal tools ⏱ ~20 minutes Needs an API key from page 4

Why this matters

## Two agents, one set of keys

Both tools work the same way day to day, but they differ in which models they can use — and that decides which of your keys goes where:

| Claude Code| OpenCode  
---|---|---  
**Made by**|  Anthropic| Open-source project (opencode.ai)  
**Models**|  Claude models only| Many providers — Anthropic, OpenAI, Google Gemini, and more  
**Keys it accepts**|  Anthropic key| Anthropic, OpenAI, or Gemini key  
**Env variable**| `ANTHROPIC_API_KEY`| `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, `GEMINI_API_KEY`  
**Start command**| `claude`| `opencode`  
  
Before you start, you need:

  * ✓ **A terminal** you're comfortable opening — Terminal on macOS, PowerShell on Windows, or the terminal inside VS Code.
  * ✓ **At least one API key** from the _Setting Up Anthropic, OpenAI & Gemini API Keys_ page, with a little credit added where the provider requires it.
  * ✓ **A project folder** to try things in — an empty new folder is perfect.

Agents use a lot of tokens A coding agent makes many model calls per task, and API usage is billed per token — noticeably more than a single chat message. A few dollars of credit is enough to learn on, but keep an eye on your usage dashboard and use the spend limits described in the safety section below. 

![](assets/genai-coaching-emblem.svg) Quick Check · Two agents, one set of keys +25 XP

Q1: Claude Code is:

Made by Anthropic — Claude models only — needs Anthropic key Open-source multi-provider Only runs on phone No API key needed

Q2: Which detail is also in the "Two agents, one set of keys" section?

Table: Claude Code made by Anthropic, Claude models only. Unrelated distractor A Unrelated distractor B Unrelated distractor C

Part A — Claude Code · Step 1

## Install Claude Code

Claude Code needs macOS 13+, Windows 10 (1809 or later), or a recent Linux, with at least 4 GB of RAM and an internet connection. The native installer is the recommended route — it needs no Node.js and updates itself in the background.

🍎 MACOS / LINUX / WSL — Terminal

zsh / bashCopy
[code] 
    curl -fsSL https://claude.ai/install.sh | bash
[/code]

🪟 WINDOWS — PowerShell

powershellCopy
[code] 
    irm https://claude.ai/install.ps1 | iex
[/code]

or, in Command Prompt (cmd)Copy
[code] 
    curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
[/code]

**Prefer a package manager?** These install the same tool, but don't auto-update:

alternativesCopy
[code] 
    # macOS (Homebrew)
    brew install --cask claude-code
    
    # Windows (WinGet)
    winget install Anthropic.ClaudeCode
    
    # Any OS, if you already use Node.js 22 or newer (never use sudo)
    npm install -g @anthropic-ai/claude-code
[/code]

Then **close and reopen your terminal** and verify:

verifyCopy
[code] 
    claude --version
    claude doctor
[/code]

`claude --version` prints a version number. `claude doctor` runs a read-only health check of your install and settings.

Windows tip Your prompt shows `PS C:\` in PowerShell and plain `C:\` in Command Prompt — use the matching command. Installing [Git for Windows](<https://git-scm.com/downloads/win>) is optional, but lets Claude Code use a Bash shell for its commands. 

![](assets/genai-coaching-emblem.svg) Quick Check · Install Claude Code +25 XP

Q1: Install command is:

npm install -g @anthropic-ai/claude-code pip install claude-code brew install python code --install claude

Q2: Which detail is also in the "Install Claude Code" section?

CC-install shows npm install -g @anthropic-ai/claude-code. Unrelated distractor A Unrelated distractor B Unrelated distractor C

Part A — Claude Code · Step 2

## Give Claude Code Your Anthropic API Key

Claude Code reads your key from an environment variable named exactly `ANTHROPIC_API_KEY`. When it's set, Claude Code skips the browser login and asks you to approve the key instead.

🍎 MACOS — Terminal

zsh — permanentCopy
[code] 
    echo 'export ANTHROPIC_API_KEY="paste-your-key"' >> ~/.zshrc
    source ~/.zshrc
[/code]

zsh — this window onlyCopy
[code] 
    export ANTHROPIC_API_KEY="paste-your-key"
[/code]

🪟 WINDOWS — PowerShell

powershell — permanentCopy
[code] 
    setx ANTHROPIC_API_KEY "paste-your-key"
    # then close and reopen PowerShell
[/code]

powershell — this window onlyCopy
[code] 
    $env:ANTHROPIC_API_KEY = "paste-your-key"
[/code]

  * Replace `paste-your-key` with your real `sk-ant-…` key from the Anthropic console.
  * The **permanent** options save the key in your shell profile or Windows user settings, so every new terminal has it. The **this window only** options disappear when you close the terminal — handy for a quick test.
  * Commands you type are saved in your shell history, so a key typed this way lives in plain text on your machine. That's acceptable on a personal laptop; never do it on a shared computer.

Only an Anthropic key works here Claude Code talks to Claude models only. An OpenAI or Gemini key won't work in it — use those with OpenCode in Part B. 

![](assets/genai-coaching-emblem.svg) Quick Check · Give Claude Code Your Anthropic API Key +25 XP

Q1: Claude Code accepts:

Anthropic key only Any provider key Only OpenAI key No key

Q2: Which detail is also in the "Give Claude Code Your Anthropic API Key" section?

Overview table: Claude Code accepts Anthropic key. Unrelated distractor A Unrelated distractor B Unrelated distractor C

Part A — Claude Code · Step 3

## Run Claude Code for the First Time

  1. **Open a terminal in your project folder** In VS Code, open the folder and use _Terminal → New Terminal_ — it opens in the right place.
  2. **Start Claude Code** Type `claude` and press Enter.
  3. **Approve your API key** Because `ANTHROPIC_API_KEY` is set, Claude Code asks you once whether to use it. Choose yes — your answer is remembered. You may also be asked whether you trust the files in this folder.
  4. **Check which credential is active** Type `/status`. It shows how Claude Code is signed in — it should show your API key, not a subscription login.
  5. **Give it a first task** Try: _"Create a file called hello.py that prints a greeting, then run it."_ Claude Code shows each file edit and command and asks your permission before making changes.

inside Claude CodeCopy
[code] 
    /status     shows which login or API key is active
    /help       lists every command
    /logout     signs out and resets first-run setup
[/code]

Already have a Claude Pro or Max subscription? If `ANTHROPIC_API_KEY` is set and you approve it, Claude Code bills that key instead of your subscription. To go back to your subscription, run `unset ANTHROPIC_API_KEY` (on Windows, remove the variable in System settings) and check `/status` again. 

![](assets/genai-coaching-emblem.svg) Quick Check · Run Claude Code for the First Time +25 XP

Q1: First run command is:

claude opencode python main.py git push

Q2: Which detail is also in the "Run Claude Code for the First Time" section?

CC-run shows running claude in terminal. Unrelated distractor A Unrelated distractor B Unrelated distractor C

Part B — OpenCode · Step 1

## Install OpenCode

OpenCode is an open-source coding agent that isn't tied to one model provider. It runs as a full-screen text interface in your terminal, so a modern terminal emulator gives the best experience — the OpenCode docs recommend WezTerm, Alacritty, Ghostty, or Kitty. If the interface looks garbled in your default terminal, try one of those.

🍎 MACOS / LINUX / WSL — Terminal

zsh / bashCopy
[code] 
    curl -fsSL https://opencode.ai/install | bash
[/code]

🪟 WINDOWS — PowerShell

Node.js installedCopy
[code] 
    npm install -g opencode-ai
[/code]

or, with Scoop / ChocolateyCopy
[code] 
    scoop install opencode
    choco install opencode
[/code]

**Other options:**

alternativesCopy
[code] 
    # macOS (Homebrew)
    brew install anomalyco/tap/opencode
    
    # Any OS with Node.js
    npm install -g opencode-ai
[/code]

Close and reopen your terminal, then verify:

verifyCopy
[code] 
    opencode --version
[/code]

![](assets/genai-coaching-emblem.svg) Quick Check · Install OpenCode +25 XP

Q1: OpenCode install uses:

npm/curl installer from opencode.ai pip only VS Code extension only Docker only

Q2: Which detail is also in the "Install OpenCode" section?

OC-install lists install via script/npm. Unrelated distractor A Unrelated distractor B Unrelated distractor C

Part B — OpenCode · Step 2

## Connect Your API Keys to OpenCode

OpenCode can use your Anthropic, OpenAI, and Gemini keys — you can connect one or all three. There are two ways to do it; pick whichever you prefer.

### Option 1 — The /connect command (recommended)

  1. **Start OpenCode** Run `opencode` in any folder.
  2. **Type`/connect` and press Enter**
  3. **Choose your provider****Anthropic** , **OpenAI** , or **Google** (the Gemini API).
  4. **Choose "Manually enter API Key" and paste your key** For Anthropic and OpenAI you'll also see a browser-login option for a paid Claude or ChatGPT subscription — skip that; we're using API keys.

You can do the same from a normal terminal, without opening the interface:

terminalCopy
[code] 
    opencode auth login
[/code]

OpenCode saves the key in a file on your computer — `~/.local/share/opencode/auth.json` on macOS and Linux — so you only enter it once.

### Option 2 — Environment variables

OpenCode also detects the standard variable names automatically — nothing to run inside OpenCode.

🍎 MACOS — Terminal

zsh — add to ~/.zshrcCopy
[code] 
    export ANTHROPIC_API_KEY="paste-your-key"
    export OPENAI_API_KEY="paste-your-key"
    export GEMINI_API_KEY="paste-your-key"
[/code]

🪟 WINDOWS — PowerShell

powershell — then reopenCopy
[code] 
    setx ANTHROPIC_API_KEY "paste-your-key"
    setx OPENAI_API_KEY "paste-your-key"
    setx GEMINI_API_KEY "paste-your-key"
[/code]

Confirm OpenCode sees them:

terminalCopy
[code] 
    opencode auth list
[/code]

The output lists saved credentials, plus an **Environment** section naming each provider whose variable it found, such as `Anthropic ANTHROPIC_API_KEY` and `Google GEMINI_API_KEY`.

Same variable names as your other tools These are the same names the earlier API-key pages put in your `.env` file for Python. For OpenCode, the reliable way is to export them as environment variables in your terminal (or use `/connect`), as shown above. 

![](assets/genai-coaching-emblem.svg) Quick Check · Connect Your API Keys to OpenCode +25 XP

Q1: OpenCode accepts:

Anthropic, OpenAI, or Gemini keys (many providers) Only Anthropic Only Groq No key

Q2: Which detail is also in the "Connect Your API Keys to OpenCode" section?

Overview says OpenCode accepts Anthropic, OpenAI, or Gemini. Unrelated distractor A Unrelated distractor B Unrelated distractor C

Part B — OpenCode · Step 3

## Pick a Model and Run OpenCode

  1. **See which models your keys unlock** In a terminal: `opencode models` lists every available model as `provider/model`. Add a provider name to narrow it down, e.g. `opencode models google`.
  2. **Make it ask before it acts (recommended)** Unlike Claude Code, OpenCode edits files and runs shell commands _without asking_ by default. Create the small `opencode.json` file shown below in your project folder to turn approval prompts on.
  3. **Open your project folder and start OpenCode**`cd` into the folder, then run `opencode`.
  4. **Choose a model** Type `/models` and pick one. Model names change often; examples at the time of writing include `google/gemini-2.5-flash`, `openai/gpt-4.1`, and `anthropic/claude-haiku-4-5`.
  5. **Let it learn your project** Type `/init`. OpenCode analyzes the folder and writes an `AGENTS.md` file describing it, which it uses as context in later sessions.
  6. **Give it a first task** Try: _"Create a file called hello.py that prints a greeting, then run it."_

opencode.json (in your project folder)Copy
[code] 
    {
      "$schema": "https://opencode.ai/config.json",
      "permission": {
        "edit": "ask",
        "bash": "ask"
      }
    }
[/code]

OpenCode's default is "allow" Without this file, OpenCode changes files and runs commands on its own as soon as you give it a task. With it, you're prompted before every edit and every shell command — the same safety net Claude Code gives you out of the box. It only applies to the folder the file is in, so add it to each project you use OpenCode in. 

You can also send a one-off request without the full interface:

terminalCopy
[code] 
    opencode run "Explain what the files in this folder do"
[/code]

Pick a small, cheap model first When you're just learning, start with a fast, low-cost model such as a "flash" or "haiku" tier. Switch to a larger model only for tasks that need it — it keeps your token spend down. 

Manage saved credentials any time:

terminalCopy
[code] 
    opencode auth list       # what's saved and what's in your environment
    opencode auth logout     # remove a provider's saved key
[/code]

![](assets/genai-coaching-emblem.svg) Quick Check · Pick a Model and Run OpenCode +25 XP

Q1: Run OpenCode with:

opencode claude python npm start

Q2: Which detail is also in the "Pick a Model and Run OpenCode" section?

OC-run shows opencode command. Unrelated distractor A Unrelated distractor B Unrelated distractor C

Quick reference

## Side-by-Side Commands

Task| Claude Code| OpenCode  
---|---|---  
Install (Mac/Linux)| `curl -fsSL https://claude.ai/install.sh | bash`| `curl -fsSL https://opencode.ai/install | bash`  
Check version| `claude --version`| `opencode --version`  
Provide a key| `ANTHROPIC_API_KEY` variable| `/connect`, `opencode auth login`, or env variables  
Start in a project| `claude`| `opencode`  
Check credentials| `/status`| `opencode auth list`  
Switch model| `/model`| `/models`  
Sign out| `/logout`| `opencode auth logout`  
Health check| `claude doctor`| —  
  
![](assets/genai-coaching-emblem.svg) Quick Check · Side-by-Side Commands +25 XP

Q1: Reference table compares:

Claude Code vs OpenCode commands side-by-side Python vs Node AWS vs GitHub VS Code vs Jupyter

Q2: Which detail is also in the "Side-by-Side Commands" section?

Reference section is side-by-side commands. Unrelated distractor A Unrelated distractor B Unrelated distractor C

Before you move on

## Using Coding Agents Safely

These tools are powerful because they can read your files and run commands — which is exactly why a few habits matter:

  * **Keep secrets out of the project folder.** An agent can read files in the folder you start it in, and what it reads is sent to the model provider. Don't keep a `.env` file with real keys in a folder you're about to hand to an agent — or make sure it's excluded.
  * **Read before you approve.** Claude Code shows each file edit and shell command and asks permission first. **OpenCode does not by default** — add the `opencode.json` from Part B, Step 3 so it asks too. Then skim what you're approving, especially commands that delete or install things.
  * **Start in a scratch folder.** Practice in an empty test project, not your only copy of important work — and put important projects under Git.
  * **Never paste an API key into the chat with the agent.** Set it as an environment variable or through `/connect` instead.
  * **Cap your spending.** Set a monthly limit where the provider offers one, and check the usage dashboard after your first sessions. Agents can use a lot of tokens on a big task.
  * **Use a dedicated key.** Create a key named for this purpose (e.g. `coding-agents`) so you can revoke just that one if anything goes wrong.

Where OpenCode stores your key `auth.json` holds keys you enter through `/connect` in plain text. Treat that file like a password — never share or commit it. 

![](assets/genai-coaching-emblem.svg) Quick Check · Using Coding Agents Safely +25 XP

Q1: Safety advises:

Review edits, don't share keys, verify commands Auto-approve everything Commit keys Ignore file changes

Q2: Which detail is also in the "Using Coding Agents Safely" section?

Safety section covers reviewing edits and key hygiene. Unrelated distractor A Unrelated distractor B Unrelated distractor C

Troubleshooting

## If Something Goes Wrong

  * **`command not found: claude` (or `opencode`):** close and reopen the terminal first. If it persists, the install folder isn't on your PATH — the native Claude Code installer puts it at `~/.local/bin`. Run `claude doctor` for a diagnosis.
  * **Windows error about`&&` or `irm`:** you ran the command in the wrong shell. `irm … | iex` is for PowerShell (`PS C:\` prompt); the `curl … &&` line is for Command Prompt.
  * **"Invalid API key" / authentication error:** re-copy the key from the provider's console, check for stray spaces or quotes, and confirm the variable name is spelled exactly (`ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, `GEMINI_API_KEY`). After using `setx` on Windows, open a _new_ terminal.
  * **"Credit balance too low" or "quota exceeded":** the key is valid but the account has no credit. Add a small amount on the provider's billing page (Anthropic and OpenAI need prepaid credit; Gemini has a free tier).
  * **Claude Code bills my key when I expected my subscription (or the reverse):** run `/status`. To switch to your subscription, `unset ANTHROPIC_API_KEY` and restart Claude Code.
  * **OpenCode shows no models for a provider:** run `opencode auth list` to confirm the key was saved or detected, then `opencode models --refresh` to update the model list.
  * **OpenCode's interface looks garbled:** try a modern terminal emulator such as Ghostty, WezTerm, Alacritty, or Kitty.

Still stuck? Tell your instructor before Base Camp 2 — and don't paste your real key into class chat while asking for help; describe the error message instead. 

![](assets/genai-coaching-emblem.svg) Quick Check · If Something Goes Wrong +25 XP

Q1: Troubleshooting helps with:

Install failures, key errors, permission issues Only theme errors Only AWS billing Only Supabase

Q2: Which detail is also in the "If Something Goes Wrong" section?

Troubleshooting lists common agent issues. Unrelated distractor A Unrelated distractor B Unrelated distractor C

You're done when...

## Coding Agent Setup — Final Check

  * ✓ `claude --version` prints a version number
  * ✓ `ANTHROPIC_API_KEY` is set, and `/status` in Claude Code shows the API key is active
  * ✓ Claude Code completed a first small task in a test folder
  * ✓ `opencode --version` prints a version number
  * ✓ `opencode auth list` shows at least one provider from your keys
  * ✓ Your project has an `opencode.json` so OpenCode asks before editing files or running commands
  * ✓ OpenCode completed a first small task using a model you chose
  * ✓ You've noted where your keys are stored and set a spend limit where available

![](assets/genai-coaching-emblem.svg) Quick Check · Coding Agent Setup — Final Check +25 XP

Q1: Checklist verifies:

Both agents installed, keys connected, first run succeeds Only Python version Only GitHub login Only AWS budget

Q2: Which detail is also in the "Coding Agent Setup — Final Check" section?

Checklist confirms agents ready. Unrelated distractor A Unrelated distractor B Unrelated distractor C

ELITE PRACTICE LAB

### Build & Verify — Coding Agents — First Run

Type the install command for Claude Code. The page shows the npm install line.

Your answer:

Check Hint

Hint: npm install -g @anthropic-ai/claude-code

✓ Verified — Elite Completed

Confetti! You nailed the hands-on check for this page.

Elite Completed — GenAI Coaching

All Quick Checks + Lab verified. Your certificate is ready — XP saved on this device.

---

<div align="center">

<img src="assets/genai-coaching-emblem.svg" width="28" alt="GenAI Coaching" style="vertical-align:middle" /> **GEN AI COACHING** &nbsp;|&nbsp; <img src="assets/ai-accelerator-hub-logo.svg" width="140" alt="AI Accelerator Hub" style="vertical-align:middle" />

*GenAI Learning · Powered by AI Accelerator Hub* — *Corporate Training • Production-Grade*

> *Source:* `BaseCamp1-EnvironmentSetup/7_claude_code_opencode.html` → `BaseCamp1-EnvironmentSetup/7_claude_code_opencode.md` | *Original HTML preserved* | *Gold `#C9A86A` Black `#0A0A0A` White `#FFFFFF`*


> **Continue your elite future** — Next up: *7 Claude Code Opencode New*  
> [← Previous](6_github_account.md) · [Continue →](7_claude_code_opencode_new.md)

</div>
