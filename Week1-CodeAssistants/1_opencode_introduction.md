<div align="center">

<img src="assets/genai-coaching-logo.svg" width="360" alt="GenAI Coaching — AI Accelerator Hub" />

# Introduction to OpenCode — Slides

> **GenAI Coaching × AI Accelerator Hub** — *White / Black / Gold Veranda* ` #0A0A0A ` ` #C9A86A ` ` #FFFFFF `  
> *Enterprise Corporate Training — Production-Grade • Weekend Quality 10-13 / 15-18 • Weekday 08:00-10:00*

</div>

---

> **GenAI Journey** · [← Prev](../BaseCamp3-FullStack/code/calculator_frontend/index.md) · [Next →](2_full_stack.md)
>

## 📑 Contents
- [How Today Breaks Down](#how-today-breaks-down)
- [By the End of Today, You Will Be Able To…](#by-the-end-of-today-you-will-be-able-to)
- [The opencode.jsonc Config File](#the-opencode-jsonc-config-file)
- [Global vs Project Config — Where the Files Live](#global-vs-project-config-where-the-files-live)
- [Quick Check — Configuring OpenCode](#quick-check-configuring-opencode)
- [model vs small_model](#model-vs-small-model)
- [Choosing Models, Provider by Provider](#choosing-models-provider-by-provider)
- [Claude Code's Equivalent Config](#claude-code-s-equivalent-config)
- [Write Your Config — No Shell Commands Needed](#write-your-config-no-shell-commands-needed)
- [Session Lifecycle Commands](#session-lifecycle-commands)
- [Interface & Model Commands](#interface-model-commands)
- [The "Timeline" — /undo & /redo](#the-timeline-undo-redo)
- [Quick Check — OpenCode Commands](#quick-check-opencode-commands)
- [Windows vs Mac Keybindings](#windows-vs-mac-keybindings)
- [Agents — No Slash Command, Tab & @mention Instead](#agents-no-slash-command-tab-mention-instead)

---


> Every OpenCode command, explained and run live — what it does, when to use it, and what outcome to expect — with the Claude Code equivalent next to each one. Agents (including how to build your own custom ones), Skills, and MCP servers: what each one is, why it exists, how it's used, worked examples, and best practices. Then a real build: a branded FastAPI calculator with an HTML frontend, scaffolded with OpenCode from a single/init, and tested end to end with the Playwright MCP server.

---


> [!TIP]
> **Corporate Tip — Deploy Ready**  
> Use this module as a standalone micro-module in your team stand-up. Have each learner demo the step live — corporate cohorts retain **3× more** when they teach back immediately. Pair with *ThinkPad TrackPoint* (hands on home row) + *Arc Weekend Space* (isolate work tabs).


Slide 1 / 54 · use ← → or the sidebar

‹ Prev Next ›

Week 1 · Full-Stack App Building with Coding Agents · OpenCode Deep Dive

# Introduction to OpenCode

Every OpenCode command, explained and run live — what it does, when to use it, and what outcome to expect — with the Claude Code equivalent next to each one. Agents (including how to build your own custom ones), Skills, and MCP servers: what each one is, why it exists, how it's used, worked examples, and best practices. Then a real build: a branded FastAPI calculator with an HTML frontend, scaffolded with OpenCode from a single `/init`, and tested end to end with the Playwright MCP server.

⏱ ~5.5 hours, hands-on 🟢 OpenCode · 🔵 Claude Code side by side 🛠️ FastAPI · HTML/JS · Playwright MCP

GenAI Coaching | Powered by AI Accelerator Hub

01

Session Agenda

## How Today Breaks Down

0:00–0:10Welcome & why OpenCode gets its own session

0:10–0:40Part 0 — Configure OpenCode: opencode.jsonc, global vs project, providers, models

0:40–1:20Part 1 — Command Reference: what/when/outcome, vs Claude Code

1:20–1:30Break

1:30–2:20Part 2 — Agents: what/why/how, primary agents, subagents, custom agents, tools, permissions

2:20–2:50Part 3 — Skills: what/why/how, anatomy, scoped vs global, use cases

2:50–3:25Part 4 — MCP Servers: what/why/how, local vs remote, installing & using Playwright MCP

3:25–3:35Break

3:35–4:55Part 5 — Build: branded FastAPI calculator, tested with Playwright MCP

4:55–5:05Recap

GenAI Coaching | Powered by AI Accelerator Hub

02

Corporate Tip — Deploy Ready Use this section as a standalone micro-module: pair the concept above with your team stand-up. Have each learner demo the step live — corporate cohorts retain 3× more when they teach back immediately. 

Learning Objectives

## By the End of Today, You Will Be Able To…

1Write an opencode.jsonc that whitelists models per provider, entirely file-based — no shell exports — and explain how it merges with the global config.

2For any OpenCode command, state what it does, when you'd reach for it, and what outcome confirms it worked — plus its Claude Code equivalent, or the honest lack of one.

3Explain what an agent is and why one agent isn't enough; use OpenCode's two primary agents, delegate to a built-in subagent, and write and invoke your own custom agent.

4Explain the difference between a tool existing and an action being permitted, and configure both at the project and per-agent level.

5Explain what a Skill is and why it exists; tell a scoped (project) skill apart from a global one, and write a SKILL.md that auto-triggers on the right task.

6Explain what an MCP server is and why it exists; distinguish a local (stdio) server from a remote (HTTP) one, install and run Playwright MCP standalone, and have it connected and callable in both tools.

7Start a build with `/init`, feed it brand context (color, logo), and scaffold a FastAPI REST backend and a matching HTML frontend.

8Create a virtual environment, install requirements, run both halves of an app on their designated ports, and test the finished app end to end by driving a real browser through Playwright MCP.

GenAI Coaching | Powered by AI Accelerator Hub

03

Part 0 · Configure OpenCode · 0.1

## The opencode.jsonc Config File

If your project already has an `opencode.jsonc` — OpenCode's JSON-with-comments variant of its config file — use that file for everything below instead of creating a separate `opencode.json`. Same fields, same schema, just with room for `//` comments so the config documents itself. Everything about which models OpenCode can see, and which key it uses, is read directly from this one file — nothing is set in your shell.

opencode.jsoncCopy
[code] 
    {
      "$schema": "https://opencode.ai/config.json",
    
      // Primary model — used for real work: reading code, planning, editing
      "model": "anthropic/claude-sonnet-4-5-20250929",
    
      // Cheaper/faster model for lightweight background tasks (e.g. session titles)
      "small_model": "groq/llama-3.1-8b-instant",
    
      // Allow-list: only these providers are considered at all
      "enabled_providers": ["anthropic", "openai", "google", "mistral", "groq", "openrouter"],
    
      "provider": {
        "anthropic": {
          "whitelist": ["claude-sonnet-4-5-20250929"],
          "options": { "apiKey": "sk-ant-paste-your-real-key-here" }
        },
        "openai": {
          "whitelist": ["gpt-4.1-mini"],
          "options": { "apiKey": "sk-paste-your-real-key-here" }
        },
        "google": {
          "whitelist": ["gemini-3.5-flash-lite"],
          "options": { "apiKey": "paste-your-real-key-here" }
        },
        "mistral": {
          "whitelist": ["mistral-medium-2508"],
          "options": { "apiKey": "paste-your-real-key-here" }
        },
        "groq": {
          "whitelist": ["llama-3.1-8b-instant"],
          "options": { "apiKey": "gsk_paste-your-real-key-here" }
        },
        "openrouter": {
          "whitelist": ["qwen/qwen3.8-27b:free"],
          "options": { "apiKey": "sk-or-paste-your-real-key-here" }
        }
      }
    }
[/code]

  * **`enabled_providers`** — an allow-list. Only these providers are even considered; everything else is ignored, even if you have a key for it lying around.
  * **`whitelist`** (per provider) — narrows the `/models` picker for that provider down to exactly these model IDs.
  * **`options.apiKey`** — the credential itself, typed directly into the file. No environment variable, no export — the file is the single source of truth.

This file now holds real secrets Once you paste actual keys in, add `opencode.jsonc` to your project's `.gitignore` before you ever commit — that's a file-system precaution, not a shell command, and it's the one step worth taking even though everything else here stays inside the config file. 

GenAI Coaching | Powered by AI Accelerator Hub

04

Part 0 · Configure OpenCode · 0.2

## Global vs Project Config — Where the Files Live

0.1's file is project-scoped — this one project only. OpenCode also reads a **global** config and merges the two: anything the project file sets wins; anything it doesn't set falls back to the global file. Put things you want on _every_ project (a personal `small_model`, a theme) there instead of copy-pasting them into every `opencode.jsonc` you create.

Scope| Location  
---|---  
Project| `./opencode.jsonc` — this one project only  
Global (macOS / Linux)| `~/.config/opencode/opencode.json` — every project on this machine  
  
macOS / Linux — check it existsCopy
[code] 
    ls ~/.config/opencode/opencode.json
[/code]

Windows (PowerShell) — check it existsCopy
[code] 
    Get-ChildItem "$env:USERPROFILE\.config\opencode\opencode.json"
[/code]

Windows specifics OpenCode's own docs recommend running it inside **WSL** on Windows — in which case the path is identical to macOS/Linux: `~/.config/opencode/opencode.json`, inside your WSL filesystem. Running natively on Windows isn't separately documented; OpenCode doesn't switch to a Windows-native folder like `%APPDATA%`, so the same relative path typically resolves to `%USERPROFILE%\.config\opencode\opencode.json` — the command above confirms it either way. 

GenAI Coaching | Powered by AI Accelerator Hub

05

GenAI Coaching · Quick Check — OpenCode Config

## Quick Check — Configuring OpenCode

Slide 0.1 says `opencode.jsonc` holds secrets file-based. Which field is the allow-list of providers (slide 0.1)?

enabled_providers allowed_models providers model_allowlist

Slide 0.2: where does the global config live on macOS/Linux?

~/.config/opencode/opencode.json ./opencode.json ~/.opencode/config.json /etc/opencode.json

GenAI Coaching | Powered by AI Accelerator Hub

Quiz

Part 0 · Configure OpenCode · 0.3

## model vs small_model

Field| Purpose  
---|---  
`model`| The primary model OpenCode uses for your actual conversation — reading code, planning, writing edits.  
`small_model`| A separate, cheaper/faster model OpenCode reaches for on lightweight background tasks — like generating a short title for a session. If you don't set it, OpenCode picks a cost-effective option from your enabled providers on its own.  
  
This is the same "fast/cheap vs frontier" split from last session's model-choice table — `small_model` just makes it explicit and automatic instead of something you switch by hand.

Set `small_model` to your free-tier or cheapest whitelisted model. There's no reason to spend frontier-model tokens on naming a session.

GenAI Coaching | Powered by AI Accelerator Hub

06

Part 0 · Configure OpenCode · 0.4

## Choosing Models, Provider by Provider

Before you whitelist a model ID, check the provider's own current model list — names and capabilities change often, and a stale ID in your config just silently fails to appear in the picker.

Provider| Where to check current models  
---|---  
Anthropic| [platform.claude.com/docs/en/models/overview](<https://platform.claude.com/docs/en/models/overview>)  
OpenAI| [developers.openai.com/api/docs/models/all](<https://developers.openai.com/api/docs/models/all>)  
Google Gemini| [ai.google.dev/gemini-api/docs/models](<https://ai.google.dev/gemini-api/docs/models>)  
Mistral| [docs.mistral.ai/models](<https://docs.mistral.ai/models>)  
Groq| [console.groq.com/docs/models](<https://console.groq.com/docs/models>)  
OpenRouter (free tier)| [openrouter.ai/collections/free-models](<https://openrouter.ai/collections/free-models>)  
  
A model ID is a moving targetProviders rename, deprecate, and version their model IDs (notice `claude-sonnet-4-5-20250929` carries a date). Click through and copy the exact current ID — don't guess at it or reuse one from an old tutorial.

GenAI Coaching | Powered by AI Accelerator Hub

07

Part 0 · Configure OpenCode · 0.5

## Claude Code's Equivalent Config

Claude Code only ever speaks to Anthropic, so there's no multi-provider block to write — but it still gives you two purely file-based ways to authenticate, matching the "everything from a config file" pattern above:

Option A · No key at all

Run `claude`, then authenticate once with your Claude account:

inside Claude CodeCopy
[code]
    /login
[/code]

OAuth sign-in — nothing to store in any file.

Option B · Key in settings.json

Store it directly in Claude Code's own config file:

.claude/settings.jsonCopy
[code]
    {
      "env": {
        "ANTHROPIC_API_KEY": "sk-ant-paste-your-real-key-here"
      }
    }
[/code]

Same shape as `opencode.jsonc` — a JSON file Claude Code reads directly — just a nested `env` object instead of a `provider` object. Use `.claude/settings.json` for a key the whole project should share, or `~/.claude/settings.json` for one that follows you across every project — the same global-vs-project split as 0.2.

GenAI Coaching | Powered by AI Accelerator Hub

08

Part 0 · Hands-On · 0.6

## Write Your Config — No Shell Commands Needed

In a fresh project folder, create (or open) `opencode.jsonc` and paste 0.1's example directly — replace every placeholder with a real key, in the file itself.

🟢 OPENCODE

Edit `opencode.jsonc`, save it, then confirm inside OpenCode:

inside OpenCodeCopy
[code]
    /models
[/code]

Should list only your whitelisted models.

🔵 CLAUDE CODE

Either run `/login`, or create `.claude/settings.json` with the `env` block from 0.5, then confirm:

inside Claude CodeCopy
[code]
    /status
[/code]

Should report you're authenticated.

Both configs are just files sitting in your project. Close the terminal, reopen it tomorrow, and neither tool needs anything re-entered — the file is still there.

GenAI Coaching | Powered by AI Accelerator Hub

09

Part 1 · Command Reference · 1.1

## Session Lifecycle Commands

Command| What it does| When to use it| Outcome  
---|---|---|---  
`/init`| Scans the project, drafts AGENTS.md| Once, right when a project starts (or after a big structural change)| AGENTS.md appears in the project root; read automatically every session after  
`/new` / `/clear`| Wipes the current conversation, same working directory| Starting an unrelated task, or context has drifted| Empty transcript; files on disk untouched  
`/sessions` / `/resume` / `/continue`| Lists past sessions, switches into one, and is where you rename one| Picking back up a multi-day task, or checking what an old session did| That session's full history reloads exactly where you left it  
`/compact` / `/summarize`| Replaces the conversation so far with a condensed summary| A long session nears its context limit, or has dead-end exploration you don't need verbatim| A short summary replaces the full history; key decisions survive  
  
  * `/init` → Claude Code's `/init` — same idea, writes CLAUDE.md instead of AGENTS.md
  * `/new`/`/clear` → Claude Code's `/clear` — identical behavior
  * `/sessions`/`/resume` → **no in-session browser or rename in Claude Code.** Closest is `claude --continue` (most recent) or `claude --resume` (picker) at launch
  * `/compact` → Claude Code's `/compact` — same idea, optionally with focus instructions

GenAI Coaching | Powered by AI Accelerator Hub

10

Part 1 · Command Reference · 1.2

## Interface & Model Commands

Command| What it does| When to use it| Outcome  
---|---|---|---  
`/models` (ctrl+x m, ctrl+t)| Opens a picker of every whitelisted model across enabled providers| Switching cost/capability tradeoffs — planning vs a hard debugging problem| Model badge updates; next message uses the new model  
`/thinking`| Toggles whether reasoning/thinking blocks show inline| Debugging why the agent decided something, or cutting visual noise on a routine task| Grey "thinking" blocks appear or disappear before responses  
`/themes` (ctrl+x t)| Lists and switches the terminal color theme| Improving contrast/readability for your terminal and lighting| UI recolors immediately; no effect on files or conversation  
  
  * `/models` → Claude Code's `/model` (in-session picker)
  * `/thinking` → **no dedicated toggle in Claude Code** ; extended thinking is invoked contextually, not a command you flip
  * `/themes` → chosen from Claude Code's `/config` settings screen, not a dedicated command

Run `/models` right now and pick your fast/cheap tier from 0.4 before doing anything else today.

GenAI Coaching | Powered by AI Accelerator Hub

11

Part 1 · Command Reference · 1.3

## The "Timeline" — /undo & /redo

OpenCode has no separate timeline view — undo/redo through your message history _is_ the timeline.

Command| What it does| When to use it| Outcome  
---|---|---|---  
`/undo` (ctrl+x u)| Removes the most recent user message and its response| You asked the wrong thing, before the agent did anything worth keeping| That exchange disappears; conversation rewinds to just before it  
`/redo` (ctrl+x r)| Restores the message `/undo` just removed| You undid by mistake, or changed your mind again| The removed exchange reappears exactly as it was  
  
Claude Code has no equivalent pairThe closest working analogue is pressing **Esc twice** to jump back to an earlier point in the conversation and edit what you sent — a rewind, not a symmetric undo/redo. Neither mechanism, in either tool, undoes file edits already made on disk — version control is still your real safety net for that.

GenAI Coaching | Powered by AI Accelerator Hub

12

GenAI Coaching · Quick Check — Commands & Lifecycle

## Quick Check — OpenCode Commands

Slide 1.1: which command scans the project and drafts AGENTS.md?

/init /new /models /compact

Slide 1.3: what does `/undo` do — and what does it NOT undo (callout)?

Removes last message+response; does NOT undo file edits on disk Deletes last file edit from disk Reverts git commit Closes the session

GenAI Coaching | Powered by AI Accelerator Hub

Quiz

Part 1 · Command Reference · 1.4

## Windows vs Mac Keybindings

Every chord in this reference — `ctrl+x m`, `ctrl+x n`, `ctrl+x l`, `ctrl+x c`, `ctrl+x t`, `ctrl+x u/r` — is sent as a raw keystroke to the terminal app, not intercepted by the OS. That means **the same`Ctrl`-based chord works identically on Windows, macOS, and Linux terminals.** There's no "use Cmd instead" variant to memorize for these.

Where platforms genuinely differ is starting things and activating a Python environment — never in setting up your provider keys, since those live in `opencode.jsonc` / `.claude/settings.json` either way, at the identical path:

Task| macOS / Linux| Windows (PowerShell)  
---|---|---  
Start OpenCode / Claude Code| `opencode` / `claude`| `opencode` / `claude` — identical  
Activate a Python venv| `source .venv/bin/activate`| `.venv\Scripts\Activate.ps1`  
Where your provider keys live| `opencode.jsonc` / `.claude/settings.json`| Same files, same path — no OS-specific step  
  
The CLI itself doesn't care which OS it's on. The shell around it does — that's the actual line to remember.

GenAI Coaching | Powered by AI Accelerator Hub

13

Part 1 · Command Reference · 1.5

## Agents — No Slash Command, Tab & @mention Instead

Mechanism| What it does| When to use it| Outcome  
---|---|---|---  
`Tab`| Switches which primary agent is driving — Build (full read/write/execute) or Plan (read-only)| Before a multi-step or ambiguous change, switch to Plan first; back to Build once you approve| Agent badge changes; Plan refuses to edit/run until you switch back  
`@general help me search for this`| Routes this one message to a named subagent instead of the primary agent| A bounded, delegable job — a search, a review, a lookup| A separate focused exchange runs and reports back; your main conversation's context is untouched  
  
Claude Code's `Shift+Tab` cycles _permission modes_ instead of agent identity — a related but different axis. Its chat input's `@` typeahead _does_ support mentioning an agent by name for guaranteed invocation, alongside file references — it's not file-only. Full purpose, worked examples, and — new this session — how to build your own custom agent, in Part 2.

GenAI Coaching | Powered by AI Accelerator Hub

14

Part 1 · Command Reference · 1.6

## Skills — Auto-Discovered, Not Typed

| What it does| When it triggers| Outcome  
---|---|---|---  
Skill matching  
(no command)| Matches your task's wording against every discovered SKILL.md's description, auto-loads the best match| Whenever your phrasing resembles a skill's description closely enough| The agent follows the skill's exact steps instead of improvising  
  
A Skill is just a `SKILL.md` file sitting in a folder the agent already knows to check — `.opencode/skills/` (project) or `~/.config/opencode/skills/` (global); OpenCode also reads Claude-compatible skills straight out of `.claude/skills/`. What a Skill actually is, why it exists, full anatomy, scoping rules, worked examples, and best practices in Part 3.

GenAI Coaching | Powered by AI Accelerator Hub

15

Part 1 · Command Reference · 1.7

## MCP Servers — Configured, Not Toggled

| What it does| When to use it| Outcome  
---|---|---|---  
MCP config  
(no command)| Declares an external tool/data server the agent can call, alongside its built-ins| You need a capability that isn't text/file/shell — browser control, a database, a third-party API| The server's tools appear in the toolbox at the next session start  
  
Declared under the `"mcp"` key in `opencode.jsonc`; no `/mcp` slash command in OpenCode — servers just load at startup. Claude Code's `/mcp` _does_ exist, but it's status-only — it shows what's connected, it doesn't turn anything on or off. What an MCP server actually is, why it exists, full schema, installing and using a real worked example (Playwright), use cases, and best practices in Part 4; you'll connect it for real in 4.7.

GenAI Coaching | Powered by AI Accelerator Hub

16

Part 1 · Command Reference · 1.8

## Status & Timestamps

Command| What it does| When to use it| Outcome  
---|---|---|---  
OpenCode timestamps  
(no command)| Renders a timestamp inline per message in the TUI| Always on — no toggle needed| Every message shows when it was sent  
Claude Code `/cost`| Reports cumulative token usage and cost for this session| Checking whether you're burning through a budget mid-task| A one-time printed usage report  
Claude Code `/status`| Reports version, account, and connectivity| Confirming you're authenticated (0.6), or debugging a connection issue| A one-time printed status report  
  
Different shape, same underlying need — knowing where you stand in a session. OpenCode answers "when did I send this," Claude Code answers "what has this session cost me so far."

GenAI Coaching | Powered by AI Accelerator Hub

17

Part 1 · Hands-On · 1.9

## Run Every Command Once, Read the Outcome

In your configured project folder, run each of these in OpenCode, in order, and actually read what comes back before moving to the next one:

  1. **`/init`** Watch it read your files and draft AGENTS.md. Open the file afterward — it should describe your actual project, not generic boilerplate.
  2. **`/models`** Confirm only your whitelisted models from 0.1 appear. Pick one.
  3. **Send one message** Ask anything — "what files are in this folder?" — so there's a real message to undo.
  4. **`/undo`, then `/redo`**Confirm the message disappears, then comes back.
  5. **`/compact`** Notice the conversation gets replaced with a summary — try it again later once you have a longer history to actually compact.
  6. **`/themes`** Switch to a different theme, then switch back to whichever you actually prefer.
  7. **`/new`** Confirm you're back to a clean slate.

Now do it in Claude CodeRun `/init`, `/model`, `/compact`, `/cost`, `/status`, and Esc-Esc on a sent message. Notice which outcomes feel identical and which don't — that gap is the point of this whole section.

GenAI Coaching | Powered by AI Accelerator Hub

18

Part 2 · Agents · 2.1

## What Is an Agent, and Why Do You Need More Than One?

Session 1 covered what one agent is — something that reads, plans, edits, and runs commands in a loop. Today's question is different: why would you ever want more than one in a single project?

  * **What:** an agent is a configured "personality" for the same underlying model — a name, a system prompt, a set of tools it can use, and a permission stance. Not a different AI, just a different mandate.
  * **Why:** one agent doing everything accumulates context (dead-end explorations, irrelevant file reads) and mixes mandates — exploring vs editing, reviewing vs writing. Separate agents keep each job's context clean and its capabilities matched to the risk of the task.
  * **How:** OpenCode gives you three layers, all covered today — switch between two built-in **primary agents** (Build/Plan) with `Tab`, delegate to a **built-in subagent** (`@general`) for a bounded side-task, or write your own **custom agent** with exactly the tools and permissions a recurring job needs.

By the end of Part 2 you'll have used all three layers on the same project — not just read about them.

GenAI Coaching | Powered by AI Accelerator Hub

19

Part 2 · Agents · 2.2

## Primary Agents — Build vs Plan

OpenCode ships two primary agents you cycle between with `Tab` — they're the same underlying model, given a different mandate:

Agent| Mandate  
---|---  
**Build**|  Full read/write/execute — edits files, runs commands, gets things done directly. Your default.  
**Plan**|  Read-only exploration — investigates and proposes an approach, but won't touch a file or run a command until you switch to Build and approve it.  
  
**Example:** in Plan, ask "how would you add a soft-delete flag to the tasks table?" — it reads the schema and code, then writes out a numbered plan. Switch to Build and say "do it" and the same plan gets executed.

This is the same "explore first, then act" idea as Claude Code's `plan` permission mode from last session — cycled with `Tab` here instead of `Shift+Tab`, and framed as switching _which agent_ you're talking to rather than switching a mode on the same agent.

GenAI Coaching | Powered by AI Accelerator Hub

20

Part 2 · Agents · 2.3

## Subagents via @mention

Beyond Build and Plan, OpenCode lets you address a specific subagent by name, right in your message:

promptCopy
[code] 
    @general help me search for every place
    this config value is read.
[/code]

**What comes back:** a short report — the file paths and line numbers where that value is read — not a running commentary of every file the subagent opened along the way. That noise stays inside the subagent's own throwaway context.

🎓 Same rule as Claude Code's Agent toolA subagent starting fresh with zero memory of your conversation isn't an OpenCode quirk — it's how delegation works in both tools. "Check if this is right" tells a fresh subagent nothing; it needs the actual file, function, or claim spelled out.

GenAI Coaching | Powered by AI Accelerator Hub

21

Part 2 · Agents · 2.4

## Built-In Subagents, Recapped

Before writing your own, know what already ships. From Session 1: Claude Code and the Claude Agent SDK call this the **Agent** tool (older material calls it "Task" — same mechanism, renamed). Four subagents ship by default:

Subagent| Purpose  
---|---  
`Explore`| Fast, read-only file discovery and codebase search  
`Plan`| Research for plan mode before proposing changes  
`general-purpose`| Multi-step tasks needing exploration _and_ action  
`claude`| Catch-all fallback  
  
OpenCode ships one default subagent, `general` — the closest match to Claude Code's `general-purpose`, and the one you've been calling with `@general` throughout this session.

Every custom agent you write in the next few slides sits _alongside_ these built-ins — it doesn't replace them. You reach for a built-in first; you write a custom one when none of the built-ins fit the job.

GenAI Coaching | Powered by AI Accelerator Hub

22

Part 2 · Agents · 2.5

## Creating a Custom Agent — File & Fields

A custom agent is the same shape as a Skill (3.2) — a markdown file with YAML frontmatter — except the body becomes the agent's _system prompt_ , not a set of steps to follow once.

🟢 OPENCODE

**File:** `.opencode/agents/<name>.md` (project) or `~/.config/opencode/agents/` (global)  
  
**Fields:** `description` (required), `mode` (`primary` / `subagent` / `all`), `model`, `temperature`, `prompt`, `permission`, `hidden`

🔵 CLAUDE CODE

**File:** `.claude/agents/<name>.md` (project) or `~/.claude/agents/` (global)  
  
**Fields:** `name`, `description` (required), `tools`, `disallowedTools`, `model`, `permissionMode`

Both discover recursively, so you can organize into subfolders — and both are matched against your task the same way a Skill's `description` is: it's the selection criteria, not documentation. The `permission` / `tools` / `permissionMode` fields are the two levers worth understanding properly before you write one — next.

GenAI Coaching | Powered by AI Accelerator Hub

23

Part 2 · Agents · 2.6

## Tools — The Building Blocks

Every action an agent can take — reading a file, running a command, fetching a URL — is a _tool_. The agent has no innate ability to touch your disk; it can only do what a tool exposes.

Tool| Does  
---|---  
`read`| Read a file's contents  
`write`| Create a new file  
`edit`| Modify an existing file via string replacement  
`bash`| Execute a shell command  
`grep` / `glob`| Search file contents / find files by pattern  
`webfetch` / `websearch`| Fetch a URL / search the web  
`skill`| Load a Skill's instructions (Part 3)  
`question`| Ask you something mid-task instead of guessing  
  
**Why this matters:** an agent's tool access is your first line of safety, before you even get to permissions (next) — an agent that can never call `bash` cannot run a destructive command, full stop, regardless of what it's asked to do.

OpenCode has no separate "turn this tool off" switchUnlike Claude Code's explicit `tools:` allow-list on a custom agent — which decides whether a tool _exists_ for it at all — OpenCode's built-in tools always exist. What you control instead is whether using one is _allowed_ , which is entirely the job of Permissions.

Restricting which subagents an agent can spawnClaude Code lets a custom agent's `tools` list name exactly which other subagents it may itself delegate to: `tools: Agent(worker, researcher), Read, Bash` restricts it to spawning only `worker` and `researcher` — useful for a coordinator agent you don't want fanning out into every subagent you own. OpenCode doesn't document an equivalent.

GenAI Coaching | Powered by AI Accelerator Hub

24

Part 2 · Agents · 2.7

## Permissions — The Approval Model

If Tools are what an agent _can_ do, Permissions decide whether it's allowed to do it without asking first — set project-wide, and overridable per agent.

opencode.jsonc — project-wide defaultCopy
[code] 
    {
      "permission": {
        "bash": {
          "*": "ask",
          "git *": "allow",
          "git push *": "deny"
        },
        "edit": {
          "*": "ask",
          "src/**": "allow"
        },
        "webfetch": "deny"
      }
    }
[/code]

  * Every category — `read`, `edit`, `bash`, `webfetch`, `websearch`, and more — resolves to `allow`, `ask`, or `deny`.
  * `bash` and `edit` support pattern-based rules; the most specific match wins — `git push *` overrides the broader `git *` above it.
  * A custom agent's own `permission` block (2.5) merges with this global one — the agent's rule wins for anything it sets, and it inherits the rest.

Claude Code's version of the same idea is the six permission modes from Session 1 (`default` / `plan` / `acceptEdits` / `auto` / `dontAsk` / `bypassPermissions`), plus a custom agent's own `permissionMode` field to pin it to one of those regardless of the session's overall mode.

Set the risky stuff to `ask`, the safe stuff to `allow`, and the truly dangerous stuff (`git push`, `rm`) to `deny` outright — a specific pattern is worth more than a blanket `ask` on everything, which just trains you to click "yes" without reading.

GenAI Coaching | Powered by AI Accelerator Hub

25

Part 2 · Agents · 2.8

## Worked Example — a Read-Only code-reviewer Agent

Same job, same name, written the way each tool expects — both physically incapable of editing anything, by construction, not by instruction:

🟢 OPENCODE

.opencode/agents/code-reviewer.mdCopy
[code]
    ---
    description: Reviews code for quality and best practices. Use after writing or modifying code.
    mode: subagent
    model: anthropic/claude-sonnet-4-5-20250929
    permission:
      edit: deny
      bash: deny
    ---
    
    You are in code review mode. Focus on code
    quality, potential bugs, performance, and
    security. Provide specific, actionable
    feedback — never make changes yourself.
[/code]

🔵 CLAUDE CODE

.claude/agents/code-reviewer.mdCopy
[code]
    ---
    name: code-reviewer
    description: Reviews code for quality and best practices. Use after writing or modifying code.
    tools: Read, Grep, Glob
    model: sonnet
    ---
    
    You are a code reviewer. Analyze the code
    and provide specific, actionable feedback
    on quality, security, and best practices.
[/code]

OpenCode gets there via Permissions — _denying_ edit/bash; Claude Code gets there via Tools — never _listing_ them. Different lever, same guarantee: this agent cannot touch your files, no matter how it's prompted.

GenAI Coaching | Powered by AI Accelerator Hub

26

Part 2 · Agents · 2.9

## Diverse Use Cases

Scenario| Why delegate  
---|---  
**Codebase-wide search** — "find every caller of this deprecated function"| Noisy, exploratory — keeps dozens of file reads out of your main conversation's context  
**Independent code review** — "review this diff for correctness bugs"| A subagent with no memory of writing the code reviews it more skeptically than the agent that just wrote it  
**Research a library's current API** — "check how this package's auth flow works now"| Bounded, one-shot lookup — the answer is all you need back, not the search process  
**Parallel investigation** — checking three unrelated hypotheses for a bug at once| Each subagent explores one hypothesis independently; you compare their reports instead of one agent context-switching serially  
**Drafting test cases** for code someone else (or another agent) just wrote| Fresh eyes on requirements, not on the implementation that was just produced  
  
GenAI Coaching | Powered by AI Accelerator Hub

27

Part 2 · Agents · 2.10

## Best Practices

  * **Write the prompt like the subagent is a new hire** — no shared history, no assumed context. Include the file paths, the specific claim to check, the exact scope.
  * **Keep delegated tasks narrow and bounded.** "Investigate the whole codebase" produces a vague report; "check whether these three files still call this deprecated function" produces a checkable one.
  * **Don't delegate trivial work.** A one-line fix doesn't need a subagent round-trip — that overhead only pays off on noisy, multi-step, or parallelizable tasks.
  * **Ask for a specific output shape** — "summarize in 3 bullets," "return pass/fail per file" — so the report is easy to act on, not another wall of text to re-read.
  * **Give a custom agent the least tools/permissions it needs to do its one job** — a reviewer that can't edit is a feature, not a limitation; it's what makes its feedback trustworthy.
  * **Treat Plan mode as a subagent's little sibling** — same principle (look before you touch), applied to your one main conversation instead of a delegated one.

GenAI Coaching | Powered by AI Accelerator Hub

28

Part 2 · Hands-On · 2.11

## Delegate a Real Question

🟢 OPENCODE

Switch to Plan (`Tab`), then @mention a subagent:

promptCopy
[code]
    @general Research what the current stable
    FastAPI version's recommended way to add
    CORS middleware is. Summarize in 3 bullets.
    Don't install anything yet.
[/code]

🔵 CLAUDE CODE

Ask in plain language and let Claude choose the Agent tool:

promptCopy
[code]
    Using a subagent, research the current
    stable FastAPI version's recommended way
    to add CORS middleware. Summarize in 3
    bullets. Don't install anything yet.
[/code]

Keep this answer — it's exactly what Part 5's build needs, and you'll use it there.

GenAI Coaching | Powered by AI Accelerator Hub

29

Part 2 · Hands-On · 2.12

## Write & Invoke Your Own Custom Agent

Create the `code-reviewer` file from 2.8 in today's practice project — the OpenCode version, the Claude Code version, or both — then invoke it by name:

🟢 OPENCODE

promptCopy
[code]
    @code-reviewer look at tasks.py and
    suggest improvements.
[/code]

🔵 CLAUDE CODE

promptCopy
[code]
    @code-reviewer look at tasks.py and
    suggest improvements.
[/code]

Type `@` and it should appear in the typeahead alongside your files.

Now try to break itFollow up with _"just fix the issues you found."_ It should refuse, or explain that it can't edit — proving the restriction from 2.8 is real and enforced, not just a polite instruction in the prompt.

GenAI Coaching | Powered by AI Accelerator Hub

30

Part 3 · Skills · 3.1

## What Is a Skill, and Why Package Instructions?

A quick reset before the mechanics: what problem does a Skill actually solve?

  * **What:** a Skill is a saved, named procedure — a markdown file the agent can load mid-conversation — for a job you do the same way every time.
  * **Why:** without one, you re-explain the same multi-step process in every session ("run the tests, then build, then push, in that order") and get slightly different execution each time. A Skill makes the procedure itself the source of truth, not your memory of it in the moment.
  * **How:** you write it once as a `SKILL.md` file with a `description` (what makes the agent reach for it) and a body (the steps); the agent then either auto-loads it when your task matches, or you invoke it by name.

Contrast with a custom agent (Part 2): an agent is a standing personality you talk _to_ ; a Skill is a one-off procedure the current agent borrows, runs, and sets back down.

GenAI Coaching | Powered by AI Accelerator Hub

31

Part 3 · Skills · 3.2

## Anatomy of a SKILL.md

The same file format works in `.opencode/skills/` and `.claude/skills/` — a markdown file with a small YAML frontmatter block:

.opencode/skills/deploy/SKILL.mdCopy
[code] 
    ---
    name: deploy
    description: Deploy the application to a specified environment
    allowed-tools: bash(git *) bash(npm run deploy *)
    ---
    
    1. Run the test suite
    2. Build the application
    3. Push to the deployment target
[/code]

  * **`description`** is the selection criteria — the agent matches your task's wording against every discovered skill's description and auto-loads the best match. Vague description, unreliable triggering.
  * **`allowed-tools`** pre-approves exactly the tools this skill needs — nothing more. This is least-privilege applied to a packaged workflow.
  * The body is plain instructions — numbered steps, a checklist, a template — whatever a person would need to do the job by hand.

GenAI Coaching | Powered by AI Accelerator Hub

32

Part 3 · Skills · 3.3

## Scoped vs Global Skills

OpenCode looks for skills by walking _upward_ from your current working directory until it hits the git worktree root, loading any `skills/*/SKILL.md` it passes along the way. That walk is what makes a skill "scoped."

Location| Scope  
---|---  
`~/.config/opencode/skills/<name>/SKILL.md`| **Global** — every project on your machine sees it  
`.opencode/skills/<name>/SKILL.md` at a project's root| **Scoped** — only visible while working inside that project's folder tree  
`apps/calculator/.opencode/skills/<name>/SKILL.md` in a monorepo| **Scoped to that app** — visible from `apps/calculator/` and below, invisible from a sibling `apps/billing/`  
  
Use global for anything genuinely personal and universal — a commit-message style you always want. Use scoped for anything project-specific — a deploy sequence, a run command, a set of ports — so it doesn't leak into (or clutter the picker for) unrelated work. Part 5 writes one scoped to a single app on purpose.

GenAI Coaching | Powered by AI Accelerator Hub

33

Part 3 · Skills · 3.4

## Diverse Use Cases

Skill| What it packages  
---|---  
**pr-description**|  A house style for pull-request write-ups — summary, test plan, screenshots — so every PR reads the same way regardless of who (or what) opened it  
**db-migration**|  Your team's exact steps for writing a safe migration — backfill defaults, avoid locking a huge table, run it in staging first  
**changelog**|  Turn a batch of merged commits into a customer-facing changelog entry, in your project's established tone  
**run-app**|  Create/activate a venv, install requirements, start a backend and frontend on their designated ports — exactly what you'll build in Part 5  
**onboarding-brief**|  Summarize a codebase area for a new contributor — architecture, gotchas, where to start reading  
  
GenAI Coaching | Powered by AI Accelerator Hub

34

Part 3 · Skills · 3.5

## Best Practices

  * **Make the description specific and disambiguating.** "Helps with deployment" matches too much (or too little); "Deploy the application to a named environment after running its test suite" matches on purpose.
  * **Grant only the tools the skill actually needs.** A changelog skill doesn't need `bash` access to your deploy scripts.
  * **Scope project-specific skills to the project, not global.** A `run-app` skill for one app has no business triggering in another.
  * **One skill, one job.** A skill that tries to cover five loosely related workflows triggers unpredictably and is harder to trust.
  * **Keep the body procedural, not aspirational.** "Always write good tests" isn't actionable; "run `pytest -x`, and if it fails, stop and report which test failed" is.

GenAI Coaching | Powered by AI Accelerator Hub

35

Part 3 · Hands-On · 3.6

## Write a Tiny Skill

🟢 OPENCODE

Create `.opencode/skills/task-summary/SKILL.md` in today's practice folder:

.opencode/skills/task-summary/SKILL.mdCopy
[code]
    ---
    name: task-summary
    description: Summarize how many files changed in this session
    ---
    
    When asked to summarize the session,
    report: how many files were read, how
    many were edited, in one sentence.
[/code]

Then ask: _"Summarize the session so far."_

🔵 CLAUDE CODE

Same file, unmodified, at `.claude/skills/task-summary/SKILL.md` — that's the payoff of the shared format from 3.2.

GenAI Coaching | Powered by AI Accelerator Hub

36

Part 4 · MCP Servers · 4.1

## What Is an MCP Server, and Why Connect One?

Before local-vs-remote schemas, the basic idea: what is MCP actually for?

  * **What:** the Model Context Protocol is an open standard for connecting an agent to a capability that isn't a file, a shell command, or a web page — a database, a ticket tracker, a real browser.
  * **Why:** without it, every new capability would need its own bespoke integration built directly into the harness. MCP means any tool built to the standard works in OpenCode, Claude Code, or any other compliant host, unmodified.
  * **How:** you declare a server in config (4.2); the host starts or connects to it, and whatever tools it exposes just show up in the agent's toolbox — same as a built-in tool, from the agent's point of view.

Session 1 introduced the concept — host/client/server, tools/resources/prompts. Today you install one, connect it, and actually use it to test a real app — Playwright MCP, ahead in 4.3 and reused throughout Part 5.

GenAI Coaching | Powered by AI Accelerator Hub

37

Part 4 · MCP Servers · 4.2

## Local vs Remote Servers

An MCP server either runs as a subprocess your agent starts and talks to over stdio ("local"), or already exists somewhere reachable over HTTP ("remote"). Same distinction, different keywords, in each tool's config:

opencode.jsonc — local (stdio)Copy
[code] 
    {
      "mcp": {
        "my-local-server": {
          "type": "local",
          "command": ["npx", "-y", "my-mcp-command"],
          "enabled": true
        }
      }
    }
[/code]

opencode.jsonc — remote (HTTP)Copy
[code] 
    {
      "mcp": {
        "my-remote-mcp": {
          "type": "remote",
          "url": "https://my-mcp-server.com",
          "enabled": true,
          "headers": { "Authorization": "Bearer paste-your-token-here" }
        }
      }
    }
[/code]

Claude Code's `.mcp.json` uses the same two shapes: `command`/`args` for local, `"type": "http"` \+ `url` for remote.

GenAI Coaching | Powered by AI Accelerator Hub

38

GenAI Coaching · Quick Check — MCP & Agents

## Quick Check — MCP Servers & Agents

Slide 4.2: how is a local (stdio) MCP server declared in opencode.jsonc?

"type": "local" with "command": ["npx", ...] "type": "http" with "url" "type": "remote" with "socket" "mcp": "npx @playwright/mcp"

Slide 1.5: how do you switch the primary agent between Build and Plan in OpenCode?

Press Tab Type /agents Type /plan Press Shift+Tab

GenAI Coaching | Powered by AI Accelerator Hub

Quiz

Part 4 · MCP Servers · 4.3

## Install & Set Up Playwright MCP

Before wiring Playwright MCP into either tool's config, get it running standalone once — that isolates "is the server itself okay" from "is my MCP config okay" if something doesn't work later.

  * **Requirement:** Node.js 18 or newer — check with `node -v`.
  * **No separate install step.** `npx @playwright/mcp@latest` downloads and runs the current version on demand, every time — there's nothing to `npm install` ahead of time.
  * **First run is slower.** npx fetches the package before starting the server; every run after that is fast.

terminal — verify it runs standaloneCopy
[code] 
    npx @playwright/mcp@latest --headless
[/code]

No output and no errors is correct — it's sitting there waiting for an MCP client to connect over stdio. Press `Ctrl+C` to stop it once you've confirmed it starts cleanly.

Flag| Purpose  
---|---  
`--browser <chrome|firefox|webkit|msedge>`| Pick which browser engine to drive  
`--headless`| Run without a visible window (headed is the default)  
`--isolated`| Keep the browser profile in memory only — nothing saved to disk  
`--port <n>`| Serve over HTTP instead of stdio, for a shared/remote setup  
  
If no browser launchesRun `npx playwright install chromium` once to fetch browser binaries, then retry the command above.

GenAI Coaching | Powered by AI Accelerator Hub

39

Part 4 · MCP Servers · 4.4

## Example Utility — Playwright MCP

With the server confirmed working standalone (4.3), wire it into your agent's config. This is what makes "a server exposes tools" concrete instead of abstract: a real, widely used MCP server that drives an actual browser.

opencode.jsoncCopy
[code] 
    {
      "mcp": {
        "playwright": {
          "type": "local",
          "command": ["npx", "@playwright/mcp@latest"],
          "enabled": true
        }
      }
    }
[/code]

.mcp.json (Claude Code)Copy
[code] 
    {
      "mcpServers": {
        "playwright": { "command": "npx", "args": ["@playwright/mcp@latest"] }
      }
    }
[/code]

The moment this is enabled, real tools appear in the agent's toolbox — the same way `Read` or `Bash` already do:

Tool| Does  
---|---  
`browser_navigate`| Load a URL  
`browser_click`| Click an element on the page  
`browser_type` / `browser_fill_form`| Type into a field, or fill several at once  
`browser_snapshot`| Read the page's accessibility tree — what's actually on screen, as text  
`browser_take_screenshot`| Capture a visual screenshot  
  
GenAI Coaching | Powered by AI Accelerator Hub

40

Part 4 · MCP Servers · 4.5

## Diverse Use Cases

Server| Type| Use case  
---|---|---  
GitHub MCP server| Local or remote| Read and comment on issues/PRs without leaving the agent  
Postgres MCP server| Local| Query a real database in plain English during development  
Filesystem MCP server| Local| Safely let an agent reach a second project folder outside its working directory  
A team's internal API, wrapped as MCP| Remote| Every teammate's agent gets the same tool without each of them running a local process  
**Playwright MCP**|  Local| End-to-end testing, screenshotting a live bug for a report, filling out a form for a demo — today's build, Part 5  
  
GenAI Coaching | Powered by AI Accelerator Hub

41

Part 4 · MCP Servers · 4.6

## Best Practices

  * **Secrets stay inside the config file, never a literal you paste elsewhere.** A remote server's `headers` value is still just a field in `opencode.jsonc` — same file-based pattern as Part 0.
  * **Enable only what a given project needs.** A GitHub MCP server sitting enabled on a project that never touches GitHub is unused attack surface, not a convenience.
  * **Read a new server's tool descriptions before trusting it** — same reasoning as reading a permission prompt (Week 1, Session 1, Part 3). An MCP server's tools are just as capable of a destructive action as your own `Bash` tool.
  * **Prefer remote (HTTP) for anything shared across a team** — one running server, everyone's agent points at the same URL.
  * **Prefer local (stdio) for anything that only makes sense on your machine** — Playwright MCP driving your own local browser is exactly this case.

GenAI Coaching | Powered by AI Accelerator Hub

42

Part 4 · Hands-On · 4.7

## Connect Playwright MCP, Right Now

Add 4.4's config block to your `opencode.jsonc` (or `.mcp.json` for Claude Code), restart the tool, then prove the connection with a real task:

promptCopy
[code] 
    Using the Playwright MCP tools, navigate to
    https://example.com, take a snapshot, and
    tell me the page's exact heading text.
[/code]

Expect a visible `browser_navigate` call followed by a `browser_snapshot`, then the agent reading "Example Domain" back to you from the snapshot — not from its own memory of that page. You'll reuse this exact server, live, in Part 5 to test the calculator you're about to build.

GenAI Coaching | Powered by AI Accelerator Hub

43

Part 5 · Build with OpenCode · 5.1

## Create the App Folder & Run /init

Everything from today lands here — a real REST API and a matching frontend, built the same disciplined way as any other OpenCode task: folder first, memory file first, code second.

terminalCopy
[code] 
    mkdir calculator_app
    cd calculator_app
    opencode
[/code]

The folder is empty — that's fine. Run `/init` anyway, as the very first action:

inside OpenCodeCopy
[code] 
    /init
[/code]

On an empty project, `/init` writes a short, mostly-generic AGENTS.md — that's expected. You're about to make it specific in 5.2, which is the whole point: a memory file is something you curate, not something that has to be perfect the moment it's generated.

GenAI Coaching | Powered by AI Accelerator Hub

44

Part 5 · Build with OpenCode · 5.2

## Give It Brand Context — Color, Logo, Font

Without this step, the agent invents its own default look for the frontend in 5.7 — usually a generic blue button on a white background. Tell it what "on-brand" means _once_ , in AGENTS.md, and every future prompt inherits it automatically.

If you have real brand assets, use them — this deck's own kit is a fine stand-in for practice:

append to AGENTS.mdCopy
[code] 
    ## Design
    
    - Primary color: #0A0A0A (dark teal)
    - Accent color: #C9A86A (mint green)
    - Background: #ffffff
    - Logo: assets/logo.svg — show it next to the
      page title and use it as the favicon
    - Layout: a single centered card, plain
      HTML/CSS/JS, no framework
    - Tone: clean, minimal, developer-friendly
[/code]

Copy an actual logo file into `calculator_app/assets/logo.svg` before 5.7 so the path in AGENTS.md points at something real.

This is last session's "memory file" lesson applied for real: standing context you write once, in a place the agent reliably re-reads, instead of repeating "make it dark teal" in every single prompt.

GenAI Coaching | Powered by AI Accelerator Hub

45

Part 5 · Hands-On · 5.3

## Write This App's Scoped "run-app" Skill

Applying 3.3 directly: this skill lives inside `calculator_app/` itself, not your global skills folder — it's scoped to this one project, and OpenCode's upward directory walk means it will never show up while you're working somewhere else.

calculator_app/.opencode/skills/run-app/SKILL.mdCopy
[code] 
    ---
    name: run-app
    description: Create/activate the venv, install requirements, and run the calculator backend and frontend on their designated ports
    allowed-tools: bash(python*) bash(pip*)
    ---
    
    1. If backend/.venv doesn't exist, create it
    2. Activate it and install backend/requirements.txt
    3. Start the FastAPI backend on port 8000
    4. Serve frontend/ as static files on port 5500
    5. Report both URLs once both are running
[/code]

Write this now, before the backend or frontend even exist — you'll invoke it for real in 5.10, once there's something for it to run.

GenAI Coaching | Powered by AI Accelerator Hub

46

Part 5 · Hands-On · 5.4

## Scaffold the FastAPI Backend

A plain REST API — four operations, same shape as Base Camp 3's calculator session, built fresh here with the agent:

promptCopy
[code] 
    Create backend/main.py: a FastAPI REST API
    with GET endpoints /add, /subtract,
    /multiply, /divide, each taking two float
    query params a and b. Divide must return a
    clean 400 error on b=0, not crash. Enable
    CORS for all origins so a static HTML
    frontend can call it. Run it on port 8000
    with uvicorn when the file is executed
    directly. Also create backend/requirements.txt
    listing exactly what this needs. Don't start
    the server yet.
[/code]

Same prompt works in both tools — approve each edit as it comes, per last session's Part 3.

GenAI Coaching | Powered by AI Accelerator Hub

47

Part 5 · Hands-On · 5.5

## The Generated Backend, Reviewed

Expect something close to this shape — read it against what you asked for before running it:

backend/main.pyCopy
[code] 
    import uvicorn
    from fastapi import FastAPI, HTTPException
    from fastapi.middleware.cors import CORSMiddleware
    
    app = FastAPI()
    
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_methods=["*"],
        allow_headers=["*"],
    )
    
    
    @app.get("/")
    def read_root():
        return {"message": "Calculator API is running"}
    
    
    @app.get("/add")
    def add(a: float, b: float):
        return {"result": a + b}
    
    
    @app.get("/subtract")
    def subtract(a: float, b: float):
        return {"result": a - b}
    
    
    @app.get("/multiply")
    def multiply(a: float, b: float):
        return {"result": a * b}
    
    
    @app.get("/divide")
    def divide(a: float, b: float):
        if b == 0:
            raise HTTPException(status_code=400, detail="Cannot divide by zero")
        return {"result": a / b}
    
    
    if __name__ == "__main__":
        uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
[/code]

backend/requirements.txtCopy
[code] 
    fastapi
    uvicorn[standard]
[/code]

GenAI Coaching | Powered by AI Accelerator Hub

48

Part 5 · Hands-On · 5.6

## Activate, Install, Run — on Its Designated Port

You could ask the agent to run these for you — but run them yourself once, so you know exactly what "the backend is up" actually takes:

macOS / Linux

terminalCopy
[code]
    cd backend
    python3 -m venv .venv
    source .venv/bin/activate
    pip install -r requirements.txt
    python main.py
[/code]

Windows (PowerShell)

terminalCopy
[code]
    cd backend
    python -m venv .venv
    .venv\Scripts\Activate.ps1
    pip install -r requirements.txt
    python main.py
[/code]

Open `http://127.0.0.1:8000/docs` — FastAPI's Swagger UI should load, listing all four endpoints. That's your backend confirmed running on its designated port before the frontend exists.

GenAI Coaching | Powered by AI Accelerator Hub

49

Part 5 · Hands-On · 5.7

## Build the Branded Frontend

With the backend running, ask for the frontend — deliberately without repeating any styling detail, since it's already in AGENTS.md from 5.2:

promptCopy
[code] 
    Create frontend/index.html and
    frontend/app.js. Two number inputs, an
    operation dropdown (add/subtract/multiply/
    divide), a Calculate button, and a result
    area. On click, fetch the matching endpoint
    on http://127.0.0.1:8000 and display the
    result, or the error message on failure.
    Follow the Design section in AGENTS.md.
[/code]

Serve it on its own designated port, next to the backend's 8000:

terminal, from inside frontend/Copy
[code] 
    python3 -m http.server 5500
[/code]

Windows: the same command, just `python` instead of `python3` if that's how your install is aliased.

GenAI Coaching | Powered by AI Accelerator Hub

50

Part 5 · Hands-On · 5.8

## Reading This Diff Like a Reviewer

Before trusting either half, check specifically:

  * Does `/divide` return a clean 400 with a message on `b=0`, instead of a 500 or a crash?
  * Does the frontend actually use the colors, logo, and layout from AGENTS.md's Design section — not a generic default?
  * Is CORS really enabled? Open `index.html` in a browser and check the console for a CORS error before assuming it's fine.
  * Are the ports exactly 8000 (backend) and 5500 (frontend) — matching what the scoped skill in 5.3 assumes?
  * Did anything outside `backend/` and `frontend/` get touched that didn't need to be?

GenAI Coaching | Powered by AI Accelerator Hub

51

Part 5 · Hands-On · 5.9

## Test It With Playwright MCP

With Playwright MCP already installed and connected (Part 4) and both servers running (8000 + 5500), stop clicking through the UI by hand — have the agent drive a real browser instead:

promptCopy
[code] 
    Using the Playwright MCP tools, open
    http://127.0.0.1:5500. Enter 12 and 30,
    select Add, click Calculate, and take a
    snapshot to read the result. Then enter 10
    and 0, select Divide, click Calculate, and
    confirm an error message appears instead
    of a crash. Report both outcomes.
[/code]

This is MCP actually doing something, not just being configuredExpect a real sequence — `browser_navigate`, `browser_fill_form`, `browser_click`, `browser_snapshot` — with the agent reading "42" and the divide-by-zero error text back from the live page, not from its own arithmetic. If it just computes the answer itself without touching the browser, redirect it back to the tools explicitly.

GenAI Coaching | Powered by AI Accelerator Hub

52

Part 5 · Hands-On · 5.10

## Run the Scoped Skill to Wrap Up

Stop both servers, then let 5.3's skill bring the whole app back up in one shot:

promptCopy
[code] 
    Run the run-app skill.
[/code]

Confirm it activates the existing venv (doesn't recreate it), installs from `requirements.txt`, starts the backend on 8000 and the frontend on 5500, and reports both URLs — exactly what 5.3 specified. Then open a new terminal in a completely different folder and check that `run-app` does _not_ appear there — proof the scoping from 3.3 is real, not just a claim on a slide.

GenAI Coaching | Powered by AI Accelerator Hub

53

Recap

## Key Takeaways

1opencode.jsonc (project) merges with opencode.json at ~/.config/opencode/ (global, same relative path on Windows via WSL) — the single source of truth for providers, models, and keys, no shell exports.

2Every command has a what/when/outcome — and most, but not all, have a Claude Code equivalent; the honest gaps are worth knowing, not papering over.

3An agent is a mandate, not a different AI — you used built-in primary agents, a built-in subagent, and wrote your own custom one, each with a clear why.

4Tools decide what an agent can ever do; Permissions decide whether it can do it without asking — two different levers, set globally and overridable per agent.

5A Skill is a saved procedure, not a personality — its location determines its reach, global for anything universal, scoped for anything project-specific.

6An MCP server adds real, callable tools for capabilities outside files/shell/web — installing and using Playwright MCP made that concrete by driving an actual browser.

7You built a REST API and a matching branded frontend, ran both on designated ports, and proved they work end to end by watching an MCP-driven browser use them.

Before Next Session

Add one more operation to the calculator — e.g. `power(a, b)` — as a new backend endpoint and a matching frontend control, then have Playwright MCP click through it for you. Same loop, one more rep.

GenAI Coaching | Powered by AI Accelerator Hub

54

GenAI Coaching · Elite Practice Lab

## Elite Lab — Command Builder

From slides 0.6 and 4.3 / 5.4: type the exact commands to verify config and run a local MCP server.

inside OpenCode — verify whitelisted models
[code]
    /models
[/code]

Check

terminal — verify Playwright MCP runs standalone
[code]
    npx @playwright/mcp@latest --headless
[/code]

Check

GenAI Coaching | Powered by AI Accelerator Hub

Lab

---



---

## ✅ Quick Checks — Interactive Practice## ✅ Quick Checks — Interactive Practice

> *Test your understanding with checkboxes — check your answers and reveal feedback instantly. Each check = +25 XP.*


> [!NOTE]
> **Quick Check · +25 XP** 🎯
>
> **Slide 0.1 saysopencode.jsoncholds secrets file-based. Which field is the allow-list of providers (slide 0.1)?**
>
> - [ ] enabled_providers
> - [ ] allowed_models
> - [ ] providers
> - [ ] model_allowlist
>
> **Slide 0.2: where does the global config live on macOS/Linux?**
>
> - [ ] ~/.config/opencode/opencode.json
> - [ ] ./opencode.json
> - [ ] ~/.opencode/config.json
> - [ ] /etc/opencode.json
>
> <details><summary>✅ Reveal Answers — Quick Check</summary>
>
> - **Slide 0.1 saysopencode.jsoncholds secrets file-based. Which field is the allow-list of providers (slide 0.1)?** → *enabled_providers* — 
> - **Slide 0.2: where does the global config live on macOS/Linux?** → *~/.config/opencode/opencode.json* — 
>
> </details>


> [!NOTE]
> **Quick Check · +25 XP** 🎯
>
> **Slide 1.1: which command scans the project and drafts AGENTS.md?**
>
> - [ ] /init
> - [ ] /new
> - [ ] /models
> - [ ] /compact
>
> **Slide 1.3: what does/undodo — and what does it NOT undo (callout)?**
>
> - [ ] Removes last message+response; does NOT undo file edits on disk
> - [ ] Deletes last file edit from disk
> - [ ] Reverts git commit
> - [ ] Closes the session
>
> <details><summary>✅ Reveal Answers — Quick Check</summary>
>
> - **Slide 1.1: which command scans the project and drafts AGENTS.md?** → */init* — 
> - **Slide 1.3: what does/undodo — and what does it NOT undo (callout)?** → *Removes last message+response; does NOT undo file edits on disk* — 
>
> </details>


> [!NOTE]
> **Quick Check · +25 XP** 🎯
>
> **Slide 4.2: how is a local (stdio) MCP server declared in opencode.jsonc?**
>
> - [ ] "type": "local" with "command": ["npx", ...]
> - [ ] "type": "http" with "url"
> - [ ] "type": "remote" with "socket"
> - [ ] "mcp": "npx @playwright/mcp"
>
> **Slide 1.5: how do you switch the primary agent between Build and Plan in OpenCode?**
>
> - [ ] Press Tab
> - [ ] Type /agents
> - [ ] Type /plan
> - [ ] Press Shift+Tab
>
> <details><summary>✅ Reveal Answers — Quick Check</summary>
>
> - **Slide 4.2: how is a local (stdio) MCP server declared in opencode.jsonc?** → *"type": "local" with "command": ["npx", ...]* — 
> - **Slide 1.5: how do you switch the primary agent between Build and Plan in OpenCode?** → *Press Tab* — 
>
> </details>


> [!NOTE]
> **Quick Check · +25 XP** 🎯
>

<div align="center">

<img src="assets/ai-accelerator-hub-logo.svg" width="180" alt="AI Accelerator Hub" />

*GenAI Learning · Powered by AI Accelerator Hub* — *Corporate Training • Production-Grade*

> *Source:* `Week1-CodeAssistants/1_opencode_introduction.html` → `Week1-CodeAssistants/1_opencode_introduction.md` | *Original HTML preserved* | *Gold `#C9A86A` Black `#0A0A0A` White `#FFFFFF`*


> **Continue your elite future** — Next up: *2 Full Stack*  
> [← Previous](../BaseCamp3-FullStack/code/calculator_frontend/index.md) · [Continue →](2_full_stack.md)

</div>
