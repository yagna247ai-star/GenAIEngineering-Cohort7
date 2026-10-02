<div align="center">

<img src="assets/genai-coaching-emblem.svg" width="52" alt="GenAI Coaching" style="vertical-align:middle;margin-right:12px" />
<img src="assets/ai-accelerator-hub-logo.svg" width="240" alt="AI Accelerator Hub" style="vertical-align:middle" />

# Full-Stack Build with OpenCode — Slides

> **GenAI Coaching × AI Accelerator Hub** — *White / Black / Gold Veranda* ` #0A0A0A ` ` #C9A86A ` ` #FFFFFF `  
> *Enterprise Corporate Training — Production-Grade • Weekend Quality 10-13 / 15-18 • Weekday 08:00-10:00*

[![Enterprise](https://img.shields.io/badge/Enterprise-Corporate%20Training-0A0A0A?style=for-the-badge)](.) [![Gold Veranda](https://img.shields.io/badge/Gold_Veranda-C9A86A?style=for-the-badge&logo=star)](.) [![Deploy Ready](https://img.shields.io/badge/Deploy-Ready-C9A86A?style=flat-square)](.)

</div>

---

> **GenAI Journey** · [← Prev](1_opencode_introduction.md) · [Next →](../BaseCamp1-EnvironmentSetup/Archive/4a_Virtual_Environment.md)
>

## 📑 Contents
- [How Today Breaks Down](#how-today-breaks-down)
- [By the End of Today, You Will Be Able To…](#by-the-end-of-today-you-will-be-able-to)
- [If Any of This Is All New to You](#if-any-of-this-is-all-new-to-you)
- [Where It Comes From](#where-it-comes-from)
- [The Blueprint's Shape (JSON)](#the-blueprint-s-shape-json)
- [Quick Check — Blueprint Shape](#quick-check-blueprint-shape)
- [No JSON? A Markdown Version](#no-json-a-markdown-version)
- [Set Up the Project](#set-up-the-project)
- [Three Layers, One Plan](#three-layers-one-plan)
- [The Build Prompt](#the-build-prompt)
- [Get the Full Plan](#get-the-full-plan)
- [Reading a Multi-Layer Plan](#reading-a-multi-layer-plan)
- [A Memory File Before You Start](#a-memory-file-before-you-start)
- [Choosing a Permission Setup](#choosing-a-permission-setup)
- [Init & Write Memory](#init-write-memory)

---


> Your app-idea blueprint goes in one end; a working FastAPI + SQLite + HTML/JS app comes out the other — plus two diagrams of your own app, drawn for you. Written for complete beginners: every term is explained the first time it shows up, and every step in both OpenCode and Claude Code. Everything from Session 1 (agents, skills, permissions, MCP) gets used for real, on your own app idea.

---


> [!TIP]
> **Corporate Tip — Deploy Ready**  
> Use this module as a standalone micro-module in your team stand-up. Have each learner demo the step live — corporate cohorts retain **3× more** when they teach back immediately. Pair with *ThinkPad TrackPoint* (hands on home row) + *Arc Weekend Space* (isolate work tabs).


![GenAI Coaching](assets/genai-coaching-emblem.svg) Slide 1 / 40 · use ← → or the sidebar

‹ Prev Next ›

![](assets/genai-coaching-emblem.svg) Week 1 · Full-Stack App Building with Coding Agents · Session 2

# Full-Stack Build with OpenCode

Your app-idea blueprint goes in one end; a working FastAPI + SQLite + HTML/JS app comes out the other — plus two diagrams of your own app, drawn for you. Written for complete beginners: every term is explained the first time it shows up, and every step in both OpenCode and Claude Code. Everything from Session 1 (agents, skills, permissions, MCP) gets used for real, on your own app idea.

⏱ ~5.5 hours, hands-on 🛠️ FastAPI · SQLite · plain HTML/JS 📄 Input: your blueprint file 🖼️ Output: 2 diagrams of your app

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

01

Corporate Tip — Deploy Ready Use this section as a standalone micro-module: pair the concept above with your team stand-up. Have each learner demo the step live — corporate cohorts retain 3× more when they teach back immediately. 

Session Agenda

## How Today Breaks Down

0:00–0:15Welcome, recap of Session 1 & a quick glossary for beginners

0:15–0:40Part 1 — Your Blueprint

0:40–1:10Part 2 — Plan the Whole Build

1:10–1:30Part 3 — Memory & Setup

1:30–1:40Break

1:40–2:10Part 4 — Database Layer

2:10–2:50Part 5 — FastAPI Back End

2:50–3:00Break

3:00–4:00Part 6 — Front End (plain HTML/JS)

4:00–4:45Part 7 — Skills, Subagents & Diagramming Your App

4:45–4:55Break

4:55–5:20Part 8 — Review, Test & Iterate

5:20–5:30Part 9 — Wrap-Up, Recap & Preview of Week 2

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

02

Corporate Tip — Deploy Ready Use this section as a standalone micro-module: pair the concept above with your team stand-up. Have each learner demo the step live — corporate cohorts retain 3× more when they teach back immediately. 

Learning Objectives

## By the End of Today, You Will Be Able To…

1Turn your blueprint file into a build prompt an agent can execute — no coding background required.

2Plan a three-layer build (database, back end, front end) before writing any code.

3Write a project memory file that keeps the agent consistent across a whole build.

4Have an agent build a real database, FastAPI backend, and plain HTML/JS frontend from your spec.

5Write a Skill and delegate a task to a Subagent inside a real project.

6Generate an architecture diagram (draw.io) and a sequence diagram (Mermaid) of the exact app you built.

7Review a diff that spans three layers, test end-to-end, and redirect the agent mid-task.

8Leave with a working full-stack app — plus two pictures of it — that you can show and explain to anyone.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

03

Corporate Tip — Deploy Ready Use this section as a standalone micro-module: pair the concept above with your team stand-up. Have each learner demo the step live — corporate cohorts retain 3× more when they teach back immediately. 

Before We Start

## If Any of This Is All New to You

You do not need any prior coding experience for today. Every word below shows up in the next five hours — read this once now, and come back anytime one doesn't click.

Term| In plain English  
---|---  
**Terminal**|  A window where you type commands instead of clicking icons. On a Mac it's the _Terminal_ app (in Applications → Utilities); on Windows it's _PowerShell_.  
**Folder**|  What programmers usually call a "directory" — same thing as the folders on your desktop.  
**Front end**|  The part of the app a person sees and clicks: pages, buttons, forms.  
**Back end**|  The part nobody sees: the rules and logic that run behind the scenes when a button is pressed.  
**Database**|  Where the app's information is permanently stored — think an extremely organized spreadsheet.  
**Endpoint**|  One specific "address" the front end can call on the back end to get one job done, e.g. `POST /bookings`.  
**JSON**|  A simple, structured way to write data as plain text, using `{ }` and `[ ]`, that both people and programs can read.  
**localhost / port**|  "This same computer," at a specific numbered door — `http://localhost:8000` means port 8000, on your own machine, reachable only by you.  
  
You don't need to memorize any of this. You just need to know it's here.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

04

Part 1 · Your Blueprint · 1.1

## Where It Comes From

Before this session, you were asked to turn your app idea into a **blueprint** using the tool your instructor shared: `app_idea_blueprint.html` — a form you open in any browser (no install, no account, works offline). It asks about your idea in plain business language, in three parts — front end, back end, database — plus scope and tech preferences, and it works out the backend endpoints for you automatically.

  * If you filled it in and clicked **Save as JSON** , you already have a file named something like `your-app-name-blueprint.json` — use it directly, exactly as it downloaded.
  * If you only have free-text answers from elsewhere (e.g. the Google Form version of the same questionnaire), 1.3 gives you a simple Markdown template to organize them the same way.
  * Haven't filled it in yet? Open `app_idea_blueprint.html` now and spend 15–20 minutes on it — a rushed hour of building on a vague idea wastes far more time than that does.

No coding knowledge was needed to fill it out, and none is needed to read it back — it's just your own words, organized.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

05

Part 1 · Your Blueprint · 1.2

## The Blueprint's Shape (JSON)

The blueprint tool's JSON export has a few parts an agent can read directly — here's a trimmed example, from _GlowBook_ , a made-up salon-booking app used throughout the blueprint tool's own examples:

glowbook-blueprint.json (excerpt)Copy
[code] 
    {
      "type": "app-idea-blueprint",
      "app_name": "GlowBook",
      "saved_at": "2026-09-20T14:32:00.000Z",
      "progress": { "required_answered": 26, "required_total": 26, "complete": true },
      "derived": {
        "api_endpoints": [
          {
            "method": "POST",
            "path": "/bookings",
            "used_by": ["Book screen › Confirm button"],
            "sends": ["service_id, stylist_id, date, time, name, phone"],
            "returns": ["the saved booking, including its id"],
            "errors": ["400 time already taken", "422 missing phone"]
          }
        ],
        "issues_to_review": []
      },
      "answers": {
        "pitch": { "section": "The Big Idea", "question": "One-sentence pitch",
          "answer": "GlowBook helps salon clients book appointments online." }
      }
    }
[/code]

  * `answers` — every question you answered, in your own plain business language, with the question text kept alongside it so nothing needs re-explaining.
  * `derived.api_endpoints` — every backend call your screens need, worked out automatically from the controls you described. This is your backend spec, already written for you.
  * `derived.issues_to_review` — gaps the tool spotted itself (e.g. a screen with no controls, or a control missing its endpoint). Worth fixing in the tool before you build.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

06

![](assets/genai-coaching-emblem.svg) GenAI Coaching · Quick Check — Blueprint

## Quick Check — Blueprint Shape

Slide 1.2: which key in the exported JSON already contains the backend spec the agent will build (worked out automatically)?

derived.api_endpoints answers progress issues_to_review

Slide 1.1: what is the single recommended build prompt instruction regarding decisions not covered by the blueprint?

Ask me before making any decision not covered by my answers Make the best guess and continue Skip that feature Use the AI default template

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

Quiz

Part 1 · Your Blueprint · 1.3

## No JSON? A Markdown Version

If you only have free-text answers, organize them into this shape instead — an agent reads this just as well as the JSON:

blueprint.mdCopy
[code] 
    # App name: GlowBook
    Pitch: GlowBook helps salon clients book
    appointments online so they never have to call.
    
    ## Front end (screens)
    - Home: list of services, "Book now" button per service
    - Booking: pick a time, client name/phone, "Confirm" button
    - My Bookings: list of upcoming bookings, "Cancel" button
    
    ## Back end (endpoints)
    - POST /bookings — create a booking (client_id, service_id, time)
    - GET /bookings?client_id=... — list a client's bookings
    - DELETE /bookings/{id} — cancel a booking
    
    ## Database (tables)
    - services: id, name, price, duration_minutes
    - bookings: id, client_name, client_phone, service_id, time, status
    
    ## Scope
    - One salon, one location, no payment processing yet
    - SQLite is fine for today
[/code]

Keep it specific — names, fields, and screen-by-screen behavior. "Users can manage bookings" is not specific; "DELETE /bookings/{id} cancels a booking and shows a confirmation" is.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

07

Part 1 · Hands-On · 1.4

## Set Up the Project

  1. **Create a project folder** e.g. `my-app` — a fresh folder for today's whole build. Right-click on your Desktop → New Folder is perfectly fine.
  2. **Put your blueprint inside it** As `blueprint.json` or `blueprint.md` — exactly one of the two, at the top level of that folder.
  3. **Open a terminal in that folder** Everything from here runs from this one project folder. On Mac: right-click the folder → "New Terminal at Folder" (or open Terminal and type `cd` then drag the folder in). On Windows: open the folder in File Explorer, type `powershell` in the address bar, press Enter.

🟢 OPENCODE

terminalCopy
[code]
    cd my-app
    opencode
[/code]

🔵 CLAUDE CODE

terminalCopy
[code]
    cd my-app
    claude
[/code]

Don't have a blueprint yet? Go back to 1.1 now — everything from Part 2 onward depends on this file existing.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

08

Part 2 · Plan the Whole Build · 2.1

## Three Layers, One Plan

Session 1's decision table said: plan first when there are multi-file changes, architectural decisions, and large scope. A database + a FastAPI backend + an HTML/JS frontend is exactly that, times three. Skipping the plan here is how you end up with a backend that doesn't match what the frontend expects — discovered an hour in, after dozens of files already exist.

The right order is always **database → backend → frontend** — each layer depends on the one before it already existing. You can't display data from a backend that doesn't exist yet, and a backend can't save data to a database that isn't there.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

09

Part 2 · Plan the Whole Build · 2.2

## The Build Prompt

This is the instruction the blueprint tool itself recommends, extended for today's stack — the "our class stack" default your blueprint likely chose (Section 5, question 35):

the build prompt — attach or paste your blueprint firstCopy
[code] 
    Build the app described in the attached
    blueprint. Plan first, then build the
    database (SQLite, tables and fields), the
    FastAPI back end (the endpoints listed
    under derived.api_endpoints and any
    extras), and the front end (plain HTML,
    CSS and JavaScript — one page per screen,
    with its controls and navigation between
    screens), and tell me how to run all of
    it. Use the color theme, logo, and look
    and feel I described. Ask me before making
    any decision that isn't covered by my
    answers.
[/code]

Notice this prompt itself asks for a plan first — you're about to enforce that with a Plan agent on top, which is belt-and-suspenders and exactly right for a build this size.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

10

Part 2 · Hands-On · 2.3

## Get the Full Plan

🟢 OPENCODE

Press `Tab` to switch to the Plan agent, then give it the 2.2 prompt plus:

appendCopy
[code]
    Read blueprint.json (or blueprint.md)
    first.
[/code]

🔵 CLAUDE CODE

Press `Shift+Tab` into Plan Mode, then give it the same 2.2 prompt plus the same line above.

Do not approve execution yet — read the plan fully first (2.4).

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

11

Part 2 · Plan the Whole Build · 2.4

## Reading a Multi-Layer Plan

Before approving, check the plan specifically for — you don't need to understand the code, just check it against your own blueprint:

  * **Order** — does it build the database before the backend, and the backend before the frontend?
  * **Coverage** — does every table in your blueprint get a place in the plan? Every endpoint in `derived.api_endpoints`? Every screen?
  * **Unclear items** — did it flag anything from `issues_to_review`, or ask you a clarifying question instead of guessing?
  * **Run instructions** — does the plan explain how you'll actually start the backend and frontend when it's done?

If something's missing, say so now — _"Your plan doesn't mention the Cancel button on My Bookings — add it"_ — before a single file gets written.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

12

Part 3 · Memory & Setup · 3.1

## A Memory File Before You Start

This project will run for hours across many turns. Standing rules belong in `AGENTS.md` / `CLAUDE.md` now, not repeated in every prompt — the same lesson from Session 1, now applied to a real, multi-hour project.

AGENTS.md / CLAUDE.md — starter contentCopy
[code] 
    # Project conventions
    
    - Backend: FastAPI, SQLite, in `backend/`
    - Frontend: plain HTML/CSS/JS, in `frontend/`
    - Run backend: `python main.py` from `backend/`
    - Run frontend: `python -m http.server 5500`
      from `frontend/`
    - Always confirm the server actually starts
      before saying a task is done.
    - Ask before changing anything not covered
      by blueprint.json / blueprint.md.
    
    ## Design
    (paste your blueprint's color theme, logo
    path, and look-and-feel answers here)
[/code]

That last "Design" section is Session 1's brand-context lesson, applied here — paste your blueprint's actual color and logo answers in once, and the frontend build in Part 6 follows them automatically.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

13

Part 3 · Memory & Setup · 3.2

## Choosing a Permission Setup

A build this size means dozens of individual edits. Approving each one-by-one for hours is exhausting — but so is missing something in a hundred silent changes. A reasonable middle ground, using Session 1's permission model:

🟢 OPENCODE

opencode.jsoncCopy
[code]
    {
      "permission": {
        "edit": "allow",
        "bash": {
          "*": "ask",
          "python *": "allow",
          "pip install *": "ask"
        }
      }
    }
[/code]

🔵 CLAUDE CODE

Switch to `acceptEdits` mode (`Shift+Tab`) — auto-accepts file edits, still prompts for commands like installs or starting servers.

Whatever you pick, stay in the room. Skim file names as they're created — you're trading per-edit approval for periodic spot-checks, not for ignoring it entirely.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

14

Part 3 · Hands-On · 3.3

## Init & Write Memory

  1. **Run`/init`**In either tool. OpenCode writes AGENTS.md; Claude Code writes CLAUDE.md.
  2. **Paste in the 3.1 content** Including your actual color theme and logo answers from the blueprint, under Design.
  3. **Set your permission setup from 3.2** Edit `opencode.jsonc`, or press `Shift+Tab` to `acceptEdits`.

Same command, different filename — you're now set up for the whole rest of today's build.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

15

Part 4 · Database Layer · 4.1

## Tables → Real Schema

Every "thing the app remembers" in your blueprint (Section 4) becomes a real SQLite table; every detail you listed for it becomes a column. A thing that "links to another thing" (e.g. "each booking is for exactly one stylist") becomes a foreign key — a column that points at a row in another table. This is the smallest, most mechanical layer to build, and everything else depends on getting it right first.

SQLite needs no server or install beyond Python itself — perfect for today. It's also literally a single file on your laptop, which makes it easy to look inside and easy to reset if something goes wrong.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

16

![](assets/genai-coaching-emblem.svg) GenAI Coaching · Quick Check — Database Layer

## Quick Check — Tables & Stack

Slide 4.1: a blueprint field that “links to another table” becomes what in SQLite?

A foreign key — a column pointing at a row in another table A new database file A JSON blob An index only

Slide 2.2: what is the recommended build order for the three layers — and why?

Database → Backend → Frontend (each depends on the previous existing) Frontend → Backend → Database Backend → Database → Frontend All three in parallel

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

Quiz

Part 4 · Hands-On · 4.2

## Build the Database

Release just the database portion of your approved plan — identical prompt in both tools:

promptCopy
[code] 
    Build just the database layer from the
    plan: the SQLite schema for every table in
    my blueprint, plus a small script that
    creates the database file with that
    schema. Don't start the backend yet.
[/code]

Watch the permission prompts (or the edit summary) as files are created in a `backend/` or `database/` folder — you should see one file per table's worth of logic, not one giant file.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

17

Part 4 · Hands-On · 4.3

## Verify the Schema

Don't just trust it — ask it to prove the schema matches your blueprint. Same prompt, either tool:

promptCopy
[code] 
    Run the setup script to create the
    database, then show me the schema of every
    table it created (columns and types).
[/code]

Compare the output against your blueprint's tables and fields yourself — this is the same "read the diff, don't just trust the claim" habit from Session 1, applied to a database instead of a code diff. You don't need to understand SQL to check that every field you listed actually shows up as a column.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

18

Part 5 · FastAPI Back End · 5.1

## Endpoints → Real Routes

Every entry in `derived.api_endpoints` (or the Back End section of your Markdown blueprint) becomes one FastAPI route: the same method (GET/POST/PUT/DELETE), the same path, reading or writing the tables from Part 4. Pydantic models — FastAPI's way of checking that incoming data has the right shape before anything happens with it — validate what each endpoint sends and returns. This is exactly the pattern from Base Camp 3's FastAPI session, just generated for your specific app instead of a calculator.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

19

Part 5 · Hands-On · 5.2

## Build the Backend

promptCopy
[code] 
    Now build the FastAPI back end: every
    endpoint from derived.api_endpoints (or my
    blueprint's Back End section), reading and
    writing the database from Part 4. Use
    Pydantic models for requests and
    responses. Enable CORS for all origins so
    a plain HTML frontend can call it. Add a
    way to run it with uvicorn. Don't build
    the front end yet.
[/code]

This is the biggest single step so far — expect several file edits and at least one permission/command prompt for installing `fastapi` and `uvicorn`. Read them; "installing a package" just means downloading a small piece of pre-written code your app depends on.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

20

Part 5 · Hands-On · 5.3

## Test It in Swagger

promptCopy
[code] 
    Start the backend, then tell me the URL
    for the Swagger docs (/docs).
[/code]

  1. **Open`/docs` in your browser**This is Swagger — an automatic, interactive web page FastAPI builds for you, listing every endpoint from your blueprint.
  2. **Try the "create" endpoint by hand** Click it, click "Try it out," fill in the request body, click "Execute," and confirm you get a real response back — not an error.
  3. **Try a "list" endpoint** Confirm the row you just created comes back.

This is the same Swagger workflow from Base Camp 3 — now proving out your own app's real endpoints. If this page loads and these two calls work, your backend is genuinely functioning, independent of any frontend.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

21

Halfway Point

# The Kitchen Is Built — Now the Dining Room

Your database stores real data and your FastAPI backend serves it — tested and proven in Swagger. The second half builds the plain HTML/JS front end your blueprint describes, wires it to the backend you just verified, teaches you to diagram the app you're building, and wraps everything in the review-and-iterate habits from Session 1.

Next up: Part 6 — Front End

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

22

Corporate Tip — Deploy Ready Use this section as a standalone micro-module: pair the concept above with your team stand-up. Have each learner demo the step live — corporate cohorts retain 3× more when they teach back immediately. 

Part 6 · Front End · 6.1

## Screens & Controls → Pages & Elements

Each screen in your blueprint becomes one HTML page; each control (button, input, list) becomes a plain HTML element inside it; each "Call the back end" control becomes a `fetch` call — JavaScript's way of asking the backend for something — to the exact endpoint you already tested in Part 5. Navigation between screens becomes links between pages.

This is deliberately the simplest possible frontend approach — no build tools, no installs, no npm. It's the same shape as last week's calculator app (`index.html` \+ `app.js`), just with more pages. If your blueprint asked for React instead, that's a fine choice for later — today's session builds the "our class stack" default so absolute beginners have zero extra tooling to fight with.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

23

![](assets/genai-coaching-emblem.svg) GenAI Coaching · Quick Check — Full-Stack Flow

## Quick Check — Front-End & Skills

Slide 6.1: each blueprint “screen” becomes what in the built app?

A page — one HTML file per screen with its controls and navigation A database table An API endpoint A MCP server

Slide 7.1: the “run-app” skill from Session 1 Part 5 is what kind of skill?

Scoped (project) skill — lives in .opencode/skills/ or .claude/skills/ inside the project Global skill — in ~/.config/opencode/skills/ MCP server tool Agent permission

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

Quiz

Part 6 · Hands-On · 6.2

## Scaffold the Front End

promptCopy
[code] 
    Create a frontend/ folder with one plain
    HTML page per screen in my blueprint, a
    shared style.css using my Design colors
    and logo from AGENTS.md, and a shared
    app.js. Don't build any screen content
    yet — just get a home page showing my
    app's name and logo.
[/code]

Verify it manually once it's done — no installs needed, this is the same tool from Session 1:

terminal — inside frontend/Copy
[code] 
    python3 -m http.server 5500
[/code]

Open `http://localhost:5500` and confirm you see your app's name, logo, and colors before moving on.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

24

Part 6 · Hands-On · 6.3

## Build the Screens

promptCopy
[code] 
    Now build every screen from my blueprint:
    the controls it describes, and navigation
    between screens (regular links between
    pages is fine). Don't wire up the backend
    calls yet — use fake placeholder data for
    now so we can see the screens first.
[/code]

Building the UI with fake data before wiring the real backend is deliberate — it isolates "does the UI look and flow right" from "does the network call work," so if something's broken later, you know which half to look in.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

25

Part 6 · Hands-On · 6.4

## Wire It to the Backend

promptCopy
[code] 
    Replace the placeholder data with real
    fetch calls to the FastAPI backend from
    Part 5, one endpoint per control, exactly
    matching derived.api_endpoints. Handle the
    loading and error states simply. Tell me
    how to run both servers together.
[/code]

A common snag here is **CORS** — a browser security rule that blocks a page from calling a different address unless that address explicitly allows it. If the frontend can't reach the backend, open your browser's console (right-click → Inspect → Console) and, if you see the word "CORS," just tell the agent: _"the browser console shows a CORS error — fix it."_ It knows the fix (FastAPI's `CORSMiddleware`, already added back in 5.2).

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

26

Part 7 · Skills, Subagents & Diagrams · 7.1

## A Skill to Run Everything

You'll start both servers many more times today. Package it once, per Session 1 — the same file works in both tools:

.opencode/skills/run-dev/SKILL.md (or .claude/skills/run-dev/SKILL.md)Copy
[code] 
    ---
    name: run-dev
    description: Start the backend and frontend dev servers together
    allowed-tools: bash(python*) bash(uvicorn*)
    ---
    
    Start the FastAPI backend (python main.py,
    from backend/) and the frontend static
    server (python -m http.server 5500, from
    frontend/) in the background. Report both
    URLs when ready.
[/code]

This is scoped to this one project (Session 1, Part 3) — it lives inside `my-app/`, so it won't clutter any other project's list of skills.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

27

Part 7 · Skills, Subagents & Diagrams · 7.2

## A Subagent to Cross-Check the Build

A focused, read-only cross-check is exactly the bounded, well-specified task a subagent is good for — it explores without polluting your main conversation with file dumps.

promptCopy
[code] 
    @general Compare blueprint.json against
    the actual code in backend/ and frontend/.
    List any endpoint, screen, or table from
    the blueprint that's missing or built
    differently than described. Don't change
    any files — just report back.
[/code]

In Claude Code, drop the `@general` and just ask in plain language — it'll pick the Agent tool on its own.

Remember Session 1's rule: context doesn't inherit. This prompt works because it re-states exactly what to compare — the subagent doesn't remember your earlier conversation about the app.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

28

Part 7 · Skills, Subagents & Diagrams · 7.3

## Why Diagram Your Own App?

You just asked an agent to build three connected layers at once. Before trusting that it's all wired together correctly, it helps enormously to actually _see_ the shape of what got built — not just read code you may not fully understand yet.

  * **What:** two small, visual pictures of your own app — one showing its pieces and how they connect (an **architecture diagram**), one showing a single request traveling through those pieces step by step (a **sequence diagram**).
  * **Why:** a diagram makes gaps obvious that text doesn't. If your frontend box has no arrow connecting it to your backend box, something's missing — you don't need to read Python to spot that.
  * **How:** two more Skills, exactly like the one you just wrote in 7.1 — you ask the agent to look at the code it built and draw what it finds, in two well-known, free diagram formats: **draw.io** and **Mermaid**.

Neither format needs you to install anything new — both open free, in a browser, over the next two slides.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

29

Part 7 · Skills, Subagents & Diagrams · 7.4

## A Skill to Draw the Architecture (draw.io)

**draw.io** (also called diagrams.net) is a free diagramming tool — boxes, arrows, text — that saves a diagram as a `.drawio` file: plain text underneath, which means an agent can write one directly, no drawing required.

.opencode/skills/draw-architecture/SKILL.md (or .claude/skills/...)Copy
[code] 
    ---
    name: draw-architecture
    description: Draw a draw.io architecture diagram of this app's frontend, backend, and database
    allowed-tools: read grep glob write
    ---
    
    Look at the actual code in backend/ and
    frontend/. Create architecture.drawio with
    three labeled boxes -- Browser / Frontend,
    FastAPI Backend, SQLite Database -- and
    arrows showing how a request flows between
    them. Use this color style: box fill
    #f2f9f6 with a #C9A86A border, 2px, titles
    in #0A0A0A bold. Label each arrow with
    what's sent, e.g. "GET /bookings".
[/code]

To view the finished diagram:

  1. **Go to app.diagrams.net** Free, runs in your browser, no account needed.
  2. **Choose "Open Existing Diagram"** Pick `architecture.drawio` from your project folder.
  3. **Look, don't edit (yet)** Check every box and arrow matches what you actually asked to be built.

This is the exact color style used in Base Camp 3's `calculator_app_evolution.drawio` — if you've seen that diagram before, your own will look like it belongs to the same family.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

30

Part 7 · Skills, Subagents & Diagrams · 7.5

## A Skill to Draw the Sequence (Mermaid)

**Mermaid** draws a diagram from plain text — you (or the agent) write a short script, and it renders as a picture, no dragging boxes around. A **sequence diagram** shows one single request traveling through your app, step by step, in the order it actually happens. This one below is real, live Mermaid, rendering right now on this slide:
[code] 
    sequenceDiagram
        participant U as User
        participant F as Frontend
        participant B as Backend (FastAPI)
        participant D as Database
        U->>F: Taps "Confirm" on Book screen
        F->>B: POST /bookings (service, time, name)
        B->>D: INSERT INTO bookings
        D-->>B: booking saved, id=42
        B-->>F: 200 OK (booking_id: 42)
        F-->>U: Shows "Booking confirmed!"
              
[/code]

.opencode/skills/draw-sequence/SKILL.md (or .claude/skills/...)Copy
[code] 
    ---
    name: draw-sequence
    description: Draw a Mermaid sequence diagram of this app's main user journey
    allowed-tools: read grep glob write
    ---
    
    Look at the main user journey from the
    blueprint (question 9) and the actual code
    in backend/ and frontend/. Create
    sequence.md containing one Mermaid
    sequenceDiagram code block with
    participants User, Frontend, Backend,
    Database. Show every step of that one
    journey, in order, using the real endpoint
    paths that were actually built.
[/code]

Your `sequence.md` will render the exact same way as the diagram above: automatically on GitHub, in VS Code's Markdown preview, or pasted into the free live editor at mermaid.live.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

31

Part 7 · Hands-On · 7.6

## Generate Both Diagrams for Your App

Create both skill files from 7.4 and 7.5 in your project, then ask for both, one after the other:

promptCopy
[code] 
    Use the draw-architecture skill, then the
    draw-sequence skill, on my actual backend/
    and frontend/ code.
[/code]

  1. **Open`architecture.drawio`**At app.diagrams.net — does every table from your blueprint appear as a box? Does every screen connect to the backend with an arrow?
  2. **Open`sequence.md`**In VS Code's preview, or paste the Mermaid block into mermaid.live — does it match the exact journey you described in your blueprint's question 9?

If either diagram is missing a piece, that's a real finding — treat it exactly like the 7.2 subagent's cross-check report, and fix it before Part 8.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

32

Part 7 · Hands-On · 7.7

## Write & Run the Skills, Then Cross-Check

  1. **Set up 7.1** Create the `run-dev` skill file, in whichever tool's skills folder (or both).
  2. **Try it**`"run-dev"` or _"start everything."_ — same words work in both tools.
  3. **Run the 7.2 cross-check** Note anything it flags — you'll fix real gaps in Part 8.
  4. **Confirm both diagrams from 7.6 exist** You'll hand these to someone else in Part 9 as proof of what you built.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

33

Part 8 · Review, Test & Iterate · 8.1

## Reading a Diff Across 3 Layers

Session 1's diff-reading checklist, applied to a build this size, means checking each layer's contract with its neighbor — your two new diagrams make several of these checkable at a glance:

  * Does every database column the backend reads actually exist in the schema?
  * Does every backend response shape match what the frontend expects to receive?
  * Does every frontend fetch call use the exact method + path the backend defined?
  * Did anything get built that isn't in the blueprint — or in your architecture diagram — at all?

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

34

Part 8 · Hands-On · 8.2

## End-to-End Test

With both servers running (your `run-dev` skill), open the app in your browser and do the real thing your app is for — the exact journey from your sequence diagram:

  1. **Create something** Use the app's main "add/create" screen exactly as a real user would.
  2. **See it reflected** Navigate to wherever it should now appear — a list, a dashboard.

Check the database directly:

promptCopy
[code] 
    Show me the current contents of the
    [table] table.
[/code]

This is the moment the three layers either prove they work together, or don't — and now you'll know exactly which layer to fix.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

35

Part 8 · Hands-On · 8.3

## Redirect & Iterate

Pick one real thing you noticed in 8.2 that isn't quite right — a field missing, a screen that doesn't flow the way you pictured — and fix it live:

promptCopy
[code] 
    On the [screen name] screen, [what's
    wrong]. Fix it so that [what should
    happen instead].
[/code]

Wrong path mid-task? OpenCode: try `Esc`, or `Ctrl+C` if that doesn't stop it. Claude Code: `Esc` — or double-tap it to jump back and edit an earlier message.

Same muscle memory as Session 1, now on your own app.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

36

Part 8 · Hands-On · 8.4

## Fix What Got Flagged

Go back to three lists you already have: your blueprint's `issues_to_review` (1.2), the 7.2 subagent's cross-check report, and anything your two diagrams (7.6) revealed. For each real gap:

promptCopy
[code] 
    The cross-check found: [paste one finding].
    Fix it, matching what the blueprint
    describes.
[/code]

Work through these one at a time, reviewing each diff — this is deliberately the slow, careful way, on purpose.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

37

Part 9 · Wrap-Up · 9.1

## What Powered What

Session 1 concept| Where it just did real work  
---|---  
Plan agent / Plan Mode| Part 2 — sequencing database → backend → frontend before touching a file  
Permissions| Throughout — reviewing edits and commands across three layers  
AGENTS.md / CLAUDE.md, brand context| Part 3 — kept stack, run commands, and your colors/logo consistent for hours  
Tools (Read/Write/Bash)| Parts 4–6 — every file created, every server started  
Skills (scoped)| Part 7 — `run-dev`, `draw-architecture`, `draw-sequence`, all scoped to this one project  
Subagents| Part 7 — the blueprint-vs-code cross-check, isolated from your main thread  
Reviewing & redirecting| Part 8 — catching and fixing real gaps before calling it done  
  
![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

38

Part 9 · Wrap-Up · 9.2

## Before Week 2

Your app currently lives only on your laptop, in a SQLite file, with no version history. Week 2 changes both:

  * **GitHub** — branching, pull requests, and code review, on the project you built today.
  * **CI/CD** — automated checks on every push.
  * **Going live** — this exact app, deployed to serverless hosting, with SQLite swapped for a real online database.

Keep your project folder, your blueprint, and both diagrams — you'll deploy this same app, not a new one, and the diagrams are exactly what you'll show to explain it to a reviewer.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

39

Recap

## Key Takeaways

1A specific blueprint (JSON or Markdown) is what turns "build me an app" into something an agent can actually execute — no coding background needed to write one.

2Database → backend → frontend, in that order, planned before any of it is built.

3A memory file — with your brand context inside it — keeps a multi-hour build consistent without repeating yourself.

4Skills and subagents stop being abstract once you're running the same steps for the fifth time.

5A diagram makes a gap in your app visible at a glance — you don't need to read code to spot a missing box or arrow.

6Testing end-to-end — not layer by layer in isolation — is what actually proves the app works.

7You built, tested, diagrammed, and shipped a real full-stack app today. That's the whole loop.

Before Week 2

Keep today's project folder intact — blueprint, backend, frontend, and both diagrams. Next session takes this exact app to GitHub and puts it online.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

40

Corporate Tip — Deploy Ready Use this section as a standalone micro-module: pair the concept above with your team stand-up. Have each learner demo the step live — corporate cohorts retain 3× more when they teach back immediately. 

![](assets/genai-coaching-emblem.svg) GenAI Coaching · Elite Practice Lab

## Elite Lab — Command Builder & Flow

Practice the exact commands from Sessions 1–2: verify models and wire a local MCP server.

inside OpenCode
[code]
    opencode
[/code]

Check

opencode.jsonc — local (stdio) MCP declaration (type field)
[code]
    "type": "local"
[/code]

Check

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

Lab

---

<div align="center">

<img src="assets/genai-coaching-emblem.svg" width="28" alt="GenAI Coaching" style="vertical-align:middle" /> **GEN AI COACHING** &nbsp;|&nbsp; <img src="assets/ai-accelerator-hub-logo.svg" width="140" alt="AI Accelerator Hub" style="vertical-align:middle" />

*GenAI Learning · Powered by AI Accelerator Hub* — *Corporate Training • Production-Grade*

> *Source:* `Week1-CodeAssistants/2_full_stack.html` → `Week1-CodeAssistants/2_full_stack.md` | *Original HTML preserved* | *Gold `#C9A86A` Black `#0A0A0A` White `#FFFFFF`*


> **Continue your elite future** — Next up: *4A Virtual Environment*  
> [← Previous](1_opencode_introduction.md) · [Continue →](../BaseCamp1-EnvironmentSetup/Archive/4a_Virtual_Environment.md)

</div>
