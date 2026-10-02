# Bringing the Calculator to Life with HTML &amp; JavaScript — Slides | GenAI Coaching — AI Accelerator Hub

> **Source:** `BaseCamp3-FullStack/2_UI.html` → `BaseCamp3-FullStack/2_UI.md`  
> **Brand:** GenAI Coaching × AI Accelerator Hub | White / Black / Gold Veranda `#0A0A0A` `#C9A86A` `#FFFFFF`  
> **Deployment:** Corporate training — production-grade Markdown (converted from HTML, content verbatim)  
> **Original HTML preserved alongside Markdown**

---

Skip to content

![](assets/genai-coaching-emblem.svg) GenAI Journey [← Prev](<1_fastapi.html>) [Next →](<app_idea_blueprint.html>)

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)

GEN AI  
COACHING

Unlock Your Elite Future · Powered by AI Accelerator Hub

XP **0**

#### Base Camp 3 · Week 2 · Session 2

  * Title
  * Session Agenda
  * Learning Objectives
  * Part 1 · HTML Basics
  * 1.1 What Is HTML?
  * 1.2 The Skeleton of Every Page
  * 1.3 Text & Structure Tags
  * 1.4 Input Elements — Building a Form
  * 1.5 The Calculator Skeleton
  * Part 2 · Introducing JavaScript
  * 2.1 What Is JavaScript (and Where It Runs)
  * 2.2 Adding a <script> Tag
  * 2.3 Selecting Elements: getElementById
  * 2.4 Reading Input Values
  * 2.5 Listening for Clicks: addEventListener
  * 2.6 Putting a Result on the Page
  * 2.7 A Local-Only Calculator
  * Part 3 · Talking to the Server
  * 3.1 Recap: Our Server Is Still Running
  * 3.2 What Is fetch()?
  * 3.3 Calling /add from the Console
  * 3.4 CORS: Why the Browser Blocks You
  * 3.5 Fixing CORS in FastAPI
  * 3.6 Wiring fetch() into the Button
  * 3.7 Watch It Happen: the Network Tab
  * 3.8 Handling Errors from the Server
  * Halfway Point
  * Part 4 · Two Ports, Two Servers
  * 4.1 Two Servers, Two Ports — Why Split Them?
  * 4.2 Keep the Backend Running
  * 4.3 Serving the Front-End on Its Own Port
  * 4.4 Two Terminals, Side by Side
  * 4.5 Confirming Both Are Alive
  * Part 5 · Full Calculator, End to End
  * 5.1 The Complete index.html
  * 5.2 The Complete app.js
  * 5.3 Trying It End-to-End
  * 5.4 Testing the divide-by-zero Error
  * 5.5 Under the Hood: One Click, Recapped
  * Recap

![GenAI Coaching](assets/genai-coaching-emblem.svg) Slide 1 / 35 · use ← → or the sidebar

‹ Prev Next ›

![](assets/genai-coaching-emblem.svg) Base Camp 3 · Week 2 · Session 2

# Bringing the Calculator to Life with HTML & JavaScript

Step-by-step HTML · the DOM & JavaScript events · `fetch()` and CORS · running the front-end and back-end on two ports at once. Yesterday we built the server — today, a real interface calls it live, in the browser.

⏱ Extended, hands-on 🔌 Two servers, two ports, one browser tab

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

01

Session Agenda

## How This Extended Session Breaks Down

0:00–0:10Welcome & Recap

0:10–0:50Part 1 — HTML Basics

0:50–1:30Part 2 — Introducing JavaScript

1:30–1:40Break

1:40–2:40Part 3 — Talking to the Server

2:40–2:50Break

2:50–3:30Part 4 — Two Ports, Two Servers

3:30–4:10Part 5 — Full Calculator, End to End

4:10–4:20Final Recap & Wrap-up

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

02

Corporate Tip — Deploy Ready Use this section as a standalone micro-module: pair the concept above with your team stand-up. Have each learner demo the step live — corporate cohorts retain 3× more when they teach back immediately. 

Learning Objectives

## By the End of This Session, You Will Be Able To…

By the end of this session, you will be able to:

1Explain what HTML is and build a page skeleton — doctype, `html`, `head`, `body`.

2Build form elements (`input`, `select`, `button`) with ids that JavaScript can target.

3Explain what JavaScript is and where it runs — in the browser, not on the server.

4Select DOM elements with `getElementById` and read their values.

5Respond to clicks with `addEventListener` and update the page with `textContent`.

6Explain what `fetch()` does and use it to call an API from the browser.

7Explain CORS, reproduce a blocked request, and fix it with FastAPI's `CORSMiddleware`.

8Handle both successful and error responses from `fetch()` using `response.ok` and `.catch()`.

9Run the backend (uvicorn) and a front-end file server on two different ports, at the same time.

10Build and test a complete calculator UI that calls the live FastAPI server end to end.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

03

Part 1 · HTML Basics · 1.1

## What Is HTML?

**HTML** (HyperText Markup Language) describes the structure and content of a web page using **tags**. The browser reads your HTML and renders it visually — headings, paragraphs, buttons, input boxes.

Where it fits HTML is the **skeleton** — what's on the page and how it's organized. Today we'll add a little **CSS** for appearance, but our real focus is structure (HTML) and behavior (JavaScript, Part 2). 

Almost every tag comes in an opening and closing pair — `<p>` starts a paragraph, `</p>` ends it. Everything between them is that element's content.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

04

Part 1 · HTML Basics · 1.2

## The Skeleton of Every Page

Every HTML file starts with this same shape. Save it as `index.html`.

index.htmlCopy
[code] 
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Calculator</title>
    </head>
    <body>
    
    </body>
    </html>
[/code]

  * `<!doctype html>` tells the browser "this is a modern HTML5 page."
  * `<head>` holds metadata — nothing inside it is visible on the page itself (the `<title>` shows in the browser tab).
  * `<body>` holds everything visitors actually see. Everything we build goes here.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

05

Part 1 · HTML Basics · 1.3

## Text & Structure Tags

A handful of tags cover most of what a page needs to say something.

inside <body>Copy
[code] 
    <h1>Calculator</h1>
    <p>Enter two numbers and pick an operation.</p>
    
    <div id="app">
      <!-- our calculator will live in here -->
    </div>
[/code]

  * `<h1>`…`<h6>` are headings, biggest to smallest; `<p>` is a paragraph.
  * `<div>` is a generic container — it groups other elements together with no visual styling of its own.
  * An `id` attribute (like `id="app"`) gives an element a unique name — JavaScript will use these constantly, starting in Part 2.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

06

Part 1 · HTML Basics · 1.4

## Input Elements — Building a Form

The three elements our calculator actually needs: two number inputs, a dropdown, and a button.

inside <div id="app">Copy
[code] 
    <label for="a">First number</label>
    <input type="number" id="a" />
    
    <label for="b">Second number</label>
    <input type="number" id="b" />
    
    <label for="op">Operation</label>
    <select id="op">
      <option value="add">Add</option>
      <option value="subtract">Subtract</option>
      <option value="multiply">Multiply</option>
      <option value="divide">Divide</option>
    </select>
    
    <button id="calcBtn">Calculate</button>
[/code]

Every element that JavaScript needs to find later gets a distinct `id` — `a`, `b`, `op`, `calcBtn`. Get these exactly right; Part 2 depends on them.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

07

Part 1 · HTML Basics · 1.5

## The Calculator Skeleton (Putting It Together)

1.2 + 1.3 + 1.4, combined into one real file, plus an empty `div` to hold the result later.

index.htmlCopy
[code] 
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Calculator</title>
    </head>
    <body>
      <h1>Calculator</h1>
    
      <label for="a">First number</label>
      <input type="number" id="a" /><br/>
    
      <label for="b">Second number</label>
      <input type="number" id="b" /><br/>
    
      <label for="op">Operation</label>
      <select id="op">
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
      </select><br/>
    
      <button id="calcBtn">Calculate</button>
    
      <div id="result"></div>
    </body>
    </html>
[/code]

Open this file directly in a browser (double-click it). You'll see a full form — but clicking "Calculate" does nothing yet. That's Part 2.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

08

Part 2 · Introducing JavaScript · 2.1

## What Is JavaScript (and Where It Runs)

**JavaScript** is the language browsers execute to make a page interactive — respond to clicks, change what's on screen, talk to a server.

The key architectural point Python (`main.py`) runs on _your server_. JavaScript in a `<script>` tag runs inside _the visitor's browser_ — on their machine, not yours. This is client-side code, meeting the client–server model from last session head-on. 

That distinction matters all session: anything JavaScript does happens locally, instantly, with no server involved — until we deliberately ask it to talk to one, in Part 3.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

09

Part 2 · Introducing JavaScript · 2.2

## Adding a <script> Tag

Add this just before `</body>` in `index.html` — after all the elements above it, so they already exist when the script runs.

index.html (before </body>)Copy
[code] 
      <script>
        console.log("Hello from JavaScript!");
      </script>
    </body>
[/code]

  * Save the file, reload it in the browser.
  * Open DevTools (right-click → Inspect, or F12) → the **Console** tab — you'll see your message there.
  * `console.log()` is your best debugging friend all session — use it constantly to check what a value actually is.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

10

Part 2 · Introducing JavaScript · 2.3

## Selecting Elements: getElementById

inside <script>Copy
[code] 
    const aInput = document.getElementById("a");
    console.log(aInput);
[/code]

  * The **DOM** (Document Object Model) is JavaScript's live map of the page — every tag becomes an object it can inspect and change.
  * `document.getElementById("a")` fetches the exact element whose `id="a"` — the first number input from 1.4.
  * `const` declares a variable that won't be reassigned — the standard choice unless you know a value needs to change.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

11

Part 2 · Introducing JavaScript · 2.4

## Reading Input Values

inside <script>Copy
[code] 
    const aValue = document.getElementById("a").value;
    console.log(aValue, typeof aValue);
    // "4" string  -- even though the input type is "number"!
    
    const a = Number(document.getElementById("a").value);
    console.log(a, typeof a);
    // 4 number
[/code]

`.value` on any input **always** returns a string. Forget `Number()` and `"4" + "5"` gives you `"45"`, not `9` — a classic first bug.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

12

Part 2 · Introducing JavaScript · 2.5

## Listening for Clicks: addEventListener

inside <script>Copy
[code] 
    const btn = document.getElementById("calcBtn");
    
    btn.addEventListener("click", function () {
      console.log("Button was clicked!");
    });
[/code]

  * This is **event-driven** code — nothing inside the function runs until the user actually clicks.
  * The function you pass to `addEventListener` runs _every time_ that click happens, for as long as the page stays open.
  * Save, reload, click "Calculate" — watch the Console log once per click.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

13

Part 2 · Introducing JavaScript · 2.6

## Putting a Result on the Page

inside the click listenerCopy
[code] 
    const sum = 4 + 5;
    document.getElementById("result").textContent = "Result: " + sum;
[/code]

  * `textContent` sets the visible text inside an element — here, the empty `<div id="result">` from 1.5.
  * The page updates **instantly** , with no reload — this is the whole point of client-side JavaScript.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

14

Part 2 · Introducing JavaScript · 2.7

## A Local-Only Calculator

2.3 through 2.6, combined — a fully working calculator, entirely inside the browser.

index.html (inside <script>)Copy
[code] 
    document.getElementById("calcBtn").addEventListener("click", function () {
      const a = Number(document.getElementById("a").value);
      const b = Number(document.getElementById("b").value);
      const op = document.getElementById("op").value;
    
      let result;
      if (op === "add") result = a + b;
      else if (op === "subtract") result = a - b;
      else if (op === "multiply") result = a * b;
      else if (op === "divide") result = a / b;
    
      document.getElementById("result").textContent = "Result: " + result;
    });
[/code]

This works! But the math happens entirely in the browser — the FastAPI server from last session isn't involved at all. Part 3 replaces this local math with a real network call to it.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

15

![](assets/genai-coaching-emblem.svg) GenAI Coaching · Quick Check — DOM & Events

## Quick Check — DOM Selection & Events

In Part 2.3, which JavaScript call selects the element with `id="a"` (slide 2.3)?

document.getElementById("a") document.querySelector("a") document.getElementByTagName("a") document.getElementById(a)

Slide 2.4 warns `.value` always returns a string. What is the result of `"4" + "5"` without `Number()`?

"45" (string concatenation) 9 (number) 45 (number) Error

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GENAI COACHING | by AI Accelerator Hub

Quiz

Part 3 · Talking to the Server · 3.1

## Recap: Our Server Is Still Running

Everything from Session 1's `main.py` still applies — we're adding a client for it, not rebuilding it.

Terminal — venv_fastapi active, from last sessionCopy
[code] 
    python main.py
    INFO:     Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C to quit)
[/code]

  * If it's not already running, start it now with `python main.py`, from inside your `calculator_api` folder — the `main()` you wrote last session starts uvicorn for you.
  * Confirm it's alive: open `http://localhost:8000/docs` — Swagger should load, exactly like last session.
  * Leave this terminal running for the rest of today.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

16

Part 3 · Talking to the Server · 3.2

## What Is fetch()?

`fetch()` is a function built into every browser for making HTTP requests from JavaScript — the browser-side equivalent of Python's `requests` library from last session.

shape of a fetch callCopy
[code] 
    fetch("http://localhost:8000/add?a=4&b=5")
      .then(response => response.json())
      .then(data => console.log(data));
[/code]

  * `fetch(url)` sends the request and returns a **Promise** — a value that isn't ready yet, but will be.
  * `.then()` chains what happens once each step finishes: first turn the response into JSON, then use that data.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

17

Part 3 · Talking to the Server · 3.3

## Calling /add from the Console

Before wiring anything into the page, prove it works by pasting straight into the DevTools Console — on the `index.html` tab you already have open.

DevTools ConsoleCopy
[code] 
    fetch("http://localhost:8000/add?a=4&b=5")
      .then(response => response.json())
      .then(data => console.log(data));
    
    // logs: {result: 9}
[/code]

If you see `{result: 9}` logged, the browser just called your FastAPI server directly — no Swagger, no `requests`, just JavaScript.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

18

Part 3 · Talking to the Server · 3.4

## CORS: Why the Browser Blocks You

Later today, `index.html` will be served from a different port than the API. Try that combination now and the exact same `fetch()` fails.

DevTools Console — page served from a different originCopy
[code] 
    Access to fetch at 'http://localhost:8000/add?a=4&b;=5'
    from origin 'http://localhost:5500' has been blocked by CORS policy:
    No 'Access-Control-Allow-Origin' header is present on the requested resource.
[/code]

  * Browsers enforce a **same-origin policy** : a page loaded from one origin (protocol + host + **port**) can't read a response from a different origin unless that server explicitly allows it.
  * `:5500` (front-end) and `:8000` (API) count as _different origins_ — even on the very same laptop.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

19

Part 3 · Talking to the Server · 3.5

## Fixing CORS in FastAPI

Back in `main.py` — a few lines that permit other origins to call this API.

main.py (near the top, after app = FastAPI())Copy
[code] 
    from fastapi.middleware.cors import CORSMiddleware
    
    app = FastAPI()
    
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_methods=["*"],
        allow_headers=["*"],
    )
[/code]

  * This adds the `Access-Control-Allow-Origin` header the browser was looking for in 3.4.
  * `allow_origins=["*"]` means "any origin may call this API" — fine for local learning; a real deployment would list its exact front-end URL instead.
  * Save — `reload=True` (from your `main()`) restarts the server with the fix applied.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

20

Part 3 · Talking to the Server · 3.6

## Wiring fetch() into the Button

Replace 2.7's local math with a real network call to the server.

index.html (inside <script>, replacing 2.7)Copy
[code] 
    document.getElementById("calcBtn").addEventListener("click", function () {
      const a = document.getElementById("a").value;
      const b = document.getElementById("b").value;
      const op = document.getElementById("op").value;
    
      fetch(`http://localhost:8000/${op}?a=${a}&b=${b}`)
        .then(response => response.json())
        .then(data => {
          document.getElementById("result").textContent = "Result: " + data.result;
        });
    });
[/code]

  * Backtick strings (template literals) let `${op}` splice the dropdown's value straight into the URL — one function now handles all four operations.
  * `data.result` reads the exact key our FastAPI endpoints return — the same dictionary shape from Session 1.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

21

![](assets/genai-coaching-emblem.svg) GenAI Coaching · Quick Check — fetch() & CORS

## Quick Check — Talking to the Server

Slide 3.2 introduces `fetch()` as the browser equivalent of which Python library from Session 1?

requests uvicorn fastapi pydantic

Slide 3.4 shows the CORS error when fetching from port 5500 to 8000. What header was missing?

Access-Control-Allow-Origin Content-Type Authorization Accept-Encoding

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GENAI COACHING | by AI Accelerator Hub

Quiz

Part 3 · Talking to the Server · 3.7

## Watch It Happen: the Network Tab

DevTools has a tab that shows every request your page makes, in real time.

  1. **Open the Network tab.** DevTools → "Network" (next to "Console").
  2. **Fill in the form.** Enter `4` and `5`, choose "Add".
  3. **Click Calculate.** A new row appears — `add?a=4&b=5`.
  4. **Click that row.** See the request URL, method (`GET`), and status (`200`).
  5. **Open the "Response" tab.** See the exact JSON body: `{"result": 9}`.

This is Part 3.4's anatomy of a request/response, from Session 1 — no longer a diagram, but a real exchange you triggered yourself.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

22

Part 3 · Talking to the Server · 3.8

## Handling Errors from the Server

Try dividing by 0 right now — the page probably shows `Result: undefined`, silently. `fetch()` has a gotcha.

**Unlike Python's`requests`**, `fetch()` only rejects on a _network_ failure — a `400` or `404` still counts as "successful," so you must check `response.ok` yourself.

index.html (inside <script>, replacing 3.6)Copy
[code] 
    fetch(`http://localhost:8000/${op}?a=${a}&b=${b}`)
      .then(response => {
        if (!response.ok) {
          return response.json().then(err => { throw new Error(err.detail); });
        }
        return response.json();
      })
      .then(data => {
        document.getElementById("result").textContent = "Result: " + data.result;
      })
      .catch(error => {
        document.getElementById("result").textContent = "Error: " + error.message;
      });
[/code]

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

23

![](assets/genai-coaching-emblem.svg) GenAI Coaching · Quick Check — Error Handling

## Quick Check — Handling Server Errors

Slide 3.8 says fetch() only rejects on network failure. How must you detect a 400 or 404 response?

Check `response.ok` yourself and parse `err.detail` It throws automatically — use try/catch around fetch Check `response.status_code` Use `.catch()` alone — it catches 400s

Slide 3.5’s CORS fix adds which middleware in main.py?

CORSMiddleware with allow_origins=["*"] SessionMiddleware HTTPSRedirectMiddleware GZipMiddleware

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GENAI COACHING | by AI Accelerator Hub

Quiz

Halfway Point

# From a Working Page to a Real Deployment Shape

Your calculator already talks to the live server, in one browser tab, on one machine. The second half changes exactly one thing: the front-end and back-end run as two separate, independent processes — the shape every real app actually takes.

Next up: Part 4 — Two Ports, Two Servers

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

24

Corporate Tip — Deploy Ready Use this section as a standalone micro-module: pair the concept above with your team stand-up. Have each learner demo the step live — corporate cohorts retain 3× more when they teach back immediately. 

Part 4 · Two Ports, Two Servers · 4.1

## Two Servers, Two Ports — Why Split Them?

So far, `index.html` has been opened directly as a local file. That's fine for learning, but it's not how real apps run — and some browsers restrict `fetch()` from a `file://` page in ways that don't match production.

The real shape The **backend** (FastAPI + uvicorn) serves data and logic on `:8000`. The **front-end** (`index.html` \+ `app.js`) are just static files that need serving too — from their own, separate, lightweight server, on a different port like `:5500`. 

Two independent processes, two ports, one browser tab talking to both — exactly the CORS situation from 3.4, now for real.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

25

Part 4 · Two Ports, Two Servers · 4.2

## Keep the Backend Running

Nothing changes here — this is the same terminal, same command, from 3.1 and all of last session.

Terminal 1 — venv_fastapi active, inside calculator_api/Copy
[code] 
    python main.py
    INFO:     Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C to quit)
[/code]

Do not close this terminal. It stays open and running for the rest of the session — the front-end has nothing to call without it.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

26

Part 4 · Two Ports, Two Servers · 4.3

## Serving the Front-End on Its Own Port

Python's standard library can serve static files with one command — no new library to install.

🪟 WINDOWS — new Command Prompt

cmd — inside the folder with index.htmlCopy
[code] 
    python -m http.server 5500
[/code]

🍎 MACOS — new Terminal

zsh — inside the folder with index.htmlCopy
[code] 
    python3 -m http.server 5500
[/code]

Then open `http://localhost:5500/index.html` in the browser — the calculator now loads from its _own_ origin, port `5500`, separate from the API's `8000`.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

27

Part 4 · Two Ports, Two Servers · 4.4

## Two Terminals, Side by Side

Both processes run at once, in two separate terminal windows — neither one is ever stopped to run the other.

TERMINAL 1 — BACKEND

calculator_api/Copy
[code] 
    python main.py
    INFO:     Uvicorn running on
    http://0.0.0.0:8000
[/code]

TERMINAL 2 — FRONT-END

front-end folderCopy
[code] 
    python3 -m http.server 5500
    Serving HTTP on :: port 5500
    http://localhost:5500/
[/code]

Two processes, two ports, one machine — this is a miniature version of how a real product's frontend and backend are deployed, often on entirely different servers.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

28

Part 4 · Two Ports, Two Servers · 4.5

## Confirming Both Are Alive

Four checks, in order — if any one fails, that's exactly where to look.

  * ✓`http://localhost:8000/docs` loads Swagger — the backend (Terminal 1) is alive.
  * ✓`http://localhost:5500/index.html` loads the calculator form — the front-end (Terminal 2) is alive.
  * ✓Filling in numbers and clicking "Calculate" shows a real result — the two are talking, CORS included.
  * ✓The Network tab (3.7) shows the request going to `:8000` while the page itself loaded from `:5500`.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

29

Part 5 · Full Calculator, End to End · 5.1

## The Complete index.html

One last change: move the script out of `index.html` into its own `app.js` file — cleaner, and how real front-ends are organized.

index.htmlCopy
[code] 
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Calculator</title>
    </head>
    <body>
      <h1>Calculator</h1>
    
      <label for="a">First number</label>
      <input type="number" id="a" /><br/>
      <label for="b">Second number</label>
      <input type="number" id="b" /><br/>
      <label for="op">Operation</label>
      <select id="op">
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
      </select><br/>
      <button id="calcBtn">Calculate</button>
    
      <div id="result"></div>
    
      <script src="app.js"></script>
    </body>
    </html>
[/code]

`<script src="app.js"></script>` loads and runs the external file below — same effect as an inline `<script>`, one file per job.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

30

Part 5 · Full Calculator, End to End · 5.2

## The Complete app.js

3.6 + 3.8, saved as its own file, sitting right next to `index.html`.

app.jsCopy
[code] 
    const BASE_URL = "http://localhost:8000";
    
    document.getElementById("calcBtn").addEventListener("click", function () {
      const a = document.getElementById("a").value;
      const b = document.getElementById("b").value;
      const op = document.getElementById("op").value;
    
      fetch(`${BASE_URL}/${op}?a=${a}&b=${b}`)
        .then(response => {
          if (!response.ok) {
            return response.json().then(err => { throw new Error(err.detail); });
          }
          return response.json();
        })
        .then(data => {
          document.getElementById("result").textContent = "Result: " + data.result;
        })
        .catch(error => {
          document.getElementById("result").textContent = "Error: " + error.message;
        });
    });
[/code]

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

31

Part 5 · Full Calculator, End to End · 5.3

## Trying It End-to-End

With both terminals from Part 4 still running, reload `http://localhost:5500/index.html`.

  1. **Enter 10 and 3.** Type into the first and second number fields.
  2. **Choose Multiply.** Select it from the operation dropdown.
  3. **Click Calculate.** The page shows `Result: 30`, with no reload.
  4. **Check the Network tab.** Confirm the request went to `:8000`, status `200`.

Try all four operations. Each one reuses the exact same `app.js` code — only the `op` value changes.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

32

Part 5 · Full Calculator, End to End · 5.4

## Testing the divide-by-zero Error

Now break it on purpose — the whole reason 3.8's error handling exists.

  1. **Enter 10 and 0.** Choose "Divide" from the dropdown.
  2. **Click Calculate.** The page shows `Error: Cannot divide by zero`.
  3. **Check the Network tab.** Status `400`, response body `{"detail": "Cannot divide by zero"}`.

No crash, no frozen page, no `Result: undefined` — the server's `HTTPException` (Session 1) and the client's `response.ok` check (3.8) are working together.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

33

Part 5 · Full Calculator, End to End · 5.5

## Under the Hood: One Click, Recapped

Everything this session built, in the order it actually runs on every click.

🌐 Browser :5500

index.html + app.js

fetch() request →

← JSON response

🖥️ Server :8000

FastAPI + uvicorn

  * `addEventListener` fires → `app.js` reads the three input values → builds the URL.
  * `fetch()` crosses from port `5500` to port `8000` — allowed only because of `CORSMiddleware` (3.5).
  * FastAPI runs the matching function, returns a dictionary, which becomes the JSON body.
  * `app.js` checks `response.ok`, then writes either the result or the error into `textContent`.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

34

Recap

## Key Takeaways

1HTML describes structure — doctype, head, body, and elements with ids JavaScript can target.

2JavaScript runs in the browser, on the visitor's machine — not on your server.

3`getElementById` \+ `.value` read what a user typed; remember to convert with `Number()`.

4`addEventListener` \+ `textContent` make a page interactive without ever reloading it.

5`fetch()` is the browser's client — the same role `requests` played in Python.

6CORS blocks cross-origin requests by default; `CORSMiddleware` on the server allows them.

7`fetch()` doesn't reject on HTTP errors — always check `response.ok` and use `.catch()`.

8The Network tab shows every request/response live — method, status code, and body.

9Backend (uvicorn, :8000) and front-end (http.server, :5500) run as two separate processes, at once.

10A full click cycle — DOM event → fetch → server → JSON → DOM update — is now a system you built yourself, end to end.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

35

![](assets/genai-coaching-emblem.svg) GenAI Coaching · Elite Practice Lab

## Elite Lab — Wire the Calculator Button

From slide 3.6: the button handler must build the fetch URL with template literals. Type the exact fetch line (with backticks) that calls the selected operation.

app.js — inside click listener
[code]
    fetch(`http://localhost:8000/${op}?a=${a}&b=${b}`)
[/code]

Check

Backticks, not quotes — and `${op}`, `${a}`, `${b}` spliced into the URL exactly as in slide 3.6.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GENAI COACHING | by AI Accelerator Hub

Lab

#### Continue your elite future

Next up: App Idea Blueprint

[← Previous](<1_fastapi.html>) [Continue →](<app_idea_blueprint.html>)
