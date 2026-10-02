# Building Your First REST API with FastAPI — Slides | GenAI Coaching — AI Accelerator Hub

> **Source:** `BaseCamp3-FullStack/1_fastapi.html` → `BaseCamp3-FullStack/1_fastapi.md`  
> **Brand:** GenAI Coaching × AI Accelerator Hub | White / Black / Gold Veranda `#0A0A0A` `#C9A86A` `#FFFFFF`  
> **Deployment:** Corporate training — production-grade Markdown (converted from HTML, content verbatim)  
> **Original HTML preserved alongside Markdown**

---

Skip to content

![](assets/genai-coaching-emblem.svg) GenAI Journey [← Prev](<../BaseCamp2-PythonRefresher/2_python_slides.html>) [Next →](<2_UI.html>)

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)

GEN AI  
COACHING

Unlock Your Elite Future · Powered by AI Accelerator Hub

XP **0**

#### Base Camp 3 · Week 2 · Session 1

  * Title
  * Session Agenda
  * Learning Objectives
  * Part 1 · Calculator Functions
  * 1.1 Anatomy of a Function
  * 1.2 add, subtract, multiply
  * 1.3 The Trouble With divide(0)
  * 1.4 try / except: Handling the Crash
  * 1.5 Returning Results as a Dictionary
  * Part 2 · Client–Server Architecture
  * 2.1 One Laptop Isn't Enough
  * 2.2 The Client–Server Model
  * 2.3 Where Our Calculator Fits
  * Part 3 · REST APIs
  * 3.1 What Is an API?
  * 3.2 What Makes an API "RESTful"
  * 3.3 HTTP Methods: GET, POST, PUT, DELETE
  * 3.4 Anatomy of a Request & a Response
  * 3.5 HTTP Status Codes at a Glance
  * Part 4 · Setting Up FastAPI
  * 4.1 What Is FastAPI (and Why)
  * 4.2 Create & Activate a Fresh venv
  * 4.3 Installing fastapi and uvicorn
  * 4.4 Project Files: main.py
  * Halfway Point
  * Part 5 · From Functions to Endpoints
  * 5.1 The Smallest Possible FastAPI App
  * 5.2 add() Becomes a GET Endpoint
  * 5.3 subtract() and multiply() as Endpoints
  * 5.4 divide() — a Real Error, Not a Crash
  * 5.5 Letting main.py Start Its Own Server
  * 5.6 Running the Server: python main.py
  * Part 6 · Swagger: Explore Your API
  * 6.1 What Is Swagger / OpenAPI?
  * 6.2 Opening /docs and Trying an Endpoint
  * 6.3 Testing the divide-by-zero Error
  * 6.4 /redoc — the Read-Only Alternative
  * Part 7 · Calling the API from Python
  * 7.1 Installing requests in Your Notebook
  * 7.2 GET Requests: add, subtract, multiply
  * 7.3 Adding a POST Endpoint: calculate
  * 7.4 Calling the POST Endpoint
  * 7.5 Checking status_code First
  * Recap

![GenAI Coaching](assets/genai-coaching-emblem.svg) Slide 1 / 37 · use ← → or the sidebar

‹ Prev Next ›

![](assets/genai-coaching-emblem.svg) Base Camp 3 · Week 2 · Session 1

# Building Your First REST API with FastAPI

Function arguments & return values · error handling · client–server architecture · REST APIs at a glance · setting up FastAPI · turning calculator functions into live endpoints · Swagger · calling your own API from a notebook. Today we build the server — tomorrow, a real client connects to it.

⏱ Extended, hands-on 🖥️ Server today · client tomorrow

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

01

Corporate Tip — Deploy Ready Use this section as a standalone micro-module: pair the concept above with your team stand-up. Have each learner demo the step live — corporate cohorts retain 3× more when they teach back immediately. 

Session Agenda

## How This Extended Session Breaks Down

0:00–0:10Welcome & Recap

0:10–0:50Part 1 — Calculator Functions & Error Handling

0:50–1:20Part 2 — Client–Server Architecture

1:20–1:30Break

1:30–2:10Part 3 — REST APIs

2:10–2:50Part 4 — Setting Up FastAPI

2:50–3:00Break

3:00–3:50Part 5 — From Functions to Endpoints

3:50–4:30Part 6 — Swagger: Explore Your Own API

4:30–4:40Break

4:40–5:20Part 7 — Calling the API from Python

5:20–5:30Final Recap & Wrap-up

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

02

Corporate Tip — Deploy Ready Use this section as a standalone micro-module: pair the concept above with your team stand-up. Have each learner demo the step live — corporate cohorts retain 3× more when they teach back immediately. 

Learning Objectives

## By the End of This Session, You Will Be Able To…

By the end of this session, you will be able to:

1Explain what a function's arguments, body, and return statement each do, and write add / subtract / multiply / divide functions.

2Reproduce and explain a `ZeroDivisionError`, and handle it with try / except instead of crashing.

3Explain the client–server model and where a running API fits into it.

4Explain what an API is and what makes an API "RESTful".

5Name the four common HTTP methods (GET, POST, PUT, DELETE) and when each is used.

6Read the anatomy of an HTTP request and response, including common status codes.

7Set up a fresh venv and install `fastapi` and `uvicorn`, explaining what each library does.

8Turn the calculator functions into GET and POST endpoints using FastAPI.

9Use `HTTPException` to return a proper error response instead of letting the server crash.

10Run the server with `python main.py` (uvicorn started from code), explore it in Swagger UI, and call it from a notebook using `requests`.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

03

Part 1 · Calculator Functions · 1.1

## Anatomy of a Function

Before we build an API, let's make sure every piece of a function is solid — we'll be leaning on all of it today.

pythonCopy
[code] 
    def add(a, b):
        result = a + b
        return result
[/code]

  * `def` starts a function **definition** — it doesn't run anything yet, it just teaches Python a new command.
  * `add` is the function's name; `(a, b)` are its **parameters** — placeholders for whatever values the caller will provide.
  * The indented lines are the function's **body** — they run top to bottom, every time the function is called.
  * `return result` sends a value back to whoever called the function, and immediately ends it.

Defining vs. calling`def add(a, b):` only defines the function. Nothing happens until you _call_ it — `add(2, 3)` — passing real values called **arguments** for the parameters `a` and `b`.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

04

Part 1 · Calculator Functions · 1.2

## add, subtract, multiply

Same shape, three times — this repetition is deliberate, because it's exactly the shape we'll turn into API endpoints later.

notebook cellCopy
[code] 
    def add(a, b):
        return a + b
    
    def subtract(a, b):
        return a - b
    
    def multiply(a, b):
        return a * b
    
    print(add(4, 5))
    print(subtract(10, 3))
    print(multiply(6, 7))
[/code]

  * Each function: two parameters in, one calculation, one value out.
  * A one-line body can `return` an expression directly — no need for a separate variable.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

05

Part 1 · Calculator Functions · 1.3

## The Trouble With divide(0)

One more function, same shape — until someone passes 0 as the second argument.

notebook cellCopy
[code] 
    def divide(a, b):
        return a / b
    
    print(divide(10, 2))
    print(divide(10, 0))
[/code]

outputCopy
[code] 
    5.0
    Traceback (most recent call last):
      ...
    ZeroDivisionError: division by zero
[/code]

The _third_ line of output never printed — the error crashed the program the instant it happened, mid-function.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

06

Part 1 · Calculator Functions · 1.4

## try / except: Handling the Crash

notebook cellCopy
[code] 
    def divide(a, b):
        try:
            return a / b
        except ZeroDivisionError:
            print("Error: cannot divide by zero")
            return None
    
    print(divide(10, 2))
    print(divide(10, 0))
    print("Program kept running!")
[/code]

  * `try:` wraps the risky line; `except ZeroDivisionError:` catches only that specific failure.
  * Naming the exact exception keeps you from silently hiding unrelated bugs.
  * The program continues afterward — one bad input no longer takes down everything else.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

07

Part 1 · Calculator Functions · 1.5

## Returning Results as a Dictionary

One more small shape change — instead of returning a bare number (or `None`), wrap it in a dictionary with a descriptive key.

notebook cellCopy
[code] 
    def divide(a, b):
        try:
            return {"result": a / b}
        except ZeroDivisionError:
            return {"error": "Cannot divide by zero"}
    
    print(divide(10, 2))
    print(divide(10, 0))
[/code]

  * A dictionary can carry a label (`"result"`, `"error"`) alongside the value — the caller knows exactly what they got back.
  * This isn't just a style choice: it's exactly the shape a server sends back as **JSON**.

Keep this pattern in mind — every endpoint we write in Part 5 will return a dictionary just like this one, and FastAPI will convert it to JSON automatically.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

08

Part 2 · Client–Server Architecture · 2.1

## One Laptop Isn't Enough

Everything so far has lived inside your own notebook, on your own laptop. Only you can call `add()` or `divide()` — because only you have that Python process running.

The real questionWhat if a teammate, a phone app, or a website needs to use the _same_ calculator logic — without copy-pasting your code or having Python installed at all?

Sharing a `.py` file isn't the same as sharing a running, reachable **service**. That's the gap client–server architecture closes.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

09

Part 2 · Client–Server Architecture · 2.2

## The Client–Server Model

Split the work into two roles, running as two separate programs — possibly on two separate machines.

🖥️ Client

Browser · Notebook · curl · phone app

Request →

← Response

🗄️ Server

Always running, waiting for requests

  * The **server** holds the logic (our calculator functions) and stays running, listening at a network address.
  * A **client** is anything that sends it a request and waits for a response — it never needs to see the server's code.
  * One server can answer many different clients, at the same time, without either side knowing how the other is built.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

10

Part 2 · Client–Server Architecture · 2.3

## Where Our Calculator Fits

This fellowship splits the build across two sessions, matching the two roles exactly.

TODAY

We build the **server** — a FastAPI app hosting `add` / `subtract` / `multiply` / `divide`, always running and reachable at an address like `http://localhost:8000`.

TOMORROW

We build a **client** — a separate Python program that sends requests to that address and reads back the results. Today, Swagger UI and a notebook will play the client's role.

Once the server is running, _any_ client that speaks HTTP can use it — not just the one we happen to write tomorrow.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

11

Part 3 · REST APIs · 3.1

## What Is an API?

An **API** (Application Programming Interface) is a defined way for one piece of software to ask another to do something — and get a result back — without needing to know how it works inside.

The restaurant analogy You (the client) order from a menu (the API) by name. The kitchen (the server) does the actual work. A waiter carries your order in and your dish back out. You never enter the kitchen, and the kitchen doesn't need to know who's asking — just what was ordered. 

A **web API** is an API you talk to over the internet (or a local network) using HTTP — the same protocol your browser uses to load web pages.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

12

Part 3 · REST APIs · 3.2

## What Makes an API "RESTful"

REST (REpresentational State Transfer) isn't a piece of software — it's a set of conventions most web APIs follow.

  * Every **resource** (a thing you can act on) gets its own URL — `/add`, `/users/42`, `/orders`.
  * Actions on a resource use standard **HTTP methods** — GET to read, POST to create, and so on (next slide).
  * Data travels as **JSON** — the same dictionary shape from Part 1.5, in both directions.
  * Each request is **stateless** — it carries everything the server needs to answer it; the server doesn't have to "remember" you between requests.

FastAPI, which we set up in Part 4, is built specifically to make writing REST APIs like this fast and hard to get wrong.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

13

Part 3 · REST APIs · 3.3

## HTTP Methods: GET, POST, PUT, DELETE

The method tells the server _what kind of action_ you want, before it even looks at the URL.

Method| Used to…| Example  
---|---|---  
`GET`| Retrieve data — read-only, no side effects| `GET /add?a=2&b=3`  
`POST`| Send new data to be processed or created| `POST /calculate` with a JSON body  
`PUT`| Replace or update an existing resource| `PUT /items/5`  
`DELETE`| Remove a resource| `DELETE /items/5`  
  
Today we'll build with `GET` and `POST` — the two you'll use constantly. `PUT` and `DELETE` follow the exact same pattern once those two click.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

14

Part 3 · REST APIs · 3.4

## Anatomy of a Request & a Response

Every HTTP exchange is one request, matched with exactly one response.

REQUEST

client → serverCopy
[code] 
    GET /add?a=4&b;=5 HTTP/1.1
    Host: localhost:8000
[/code]

RESPONSE

server → clientCopy
[code] 
    HTTP/1.1 200 OK
    Content-Type: application/json
    
    {"result": 9.0}
[/code]

  * A request = **method** \+ **URL** (path, plus optional query parameters like `?a=4&b=5`) + optional headers/body.
  * A response = **status code** \+ headers + a **body** (almost always JSON, for a REST API).

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

15

Part 3 · REST APIs · 3.5

## HTTP Status Codes at a Glance

A 3-digit code at the top of every response — check this before you even look at the body.

Code| Meaning| When you'll see it today  
---|---|---  
`200`| OK| A GET or POST succeeded  
`201`| Created| A POST successfully created something  
`400`| Bad Request| Our own check fails — e.g. dividing by zero  
`404`| Not Found| Typo in the URL / endpoint doesn't exist  
`422`| Unprocessable Entity| FastAPI's own validation rejects the input type  
`500`| Internal Server Error| An unhandled exception inside the server  
  
These codes are the API version of Part 1's exceptions — `400` is what `HTTPException` will send back in Part 5.4, in place of a `ZeroDivisionError` crash.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

16

Part 4 · Setting Up FastAPI · 4.1

## What Is FastAPI (and Why)

**FastAPI** is a Python web framework built specifically for writing REST APIs — you write regular Python functions with type hints, and it handles the HTTP plumbing.

Why FastAPI, specifically It reads the type hints you're already writing (`a: float`) to automatically validate incoming data, and it generates interactive, always-up-to-date documentation — Swagger UI — for free, straight from your code. 

FastAPI defines _what_ your endpoints do. It doesn't, by itself, listen on a network port — that job belongs to **uvicorn** , installed next.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

17

Part 4 · Setting Up FastAPI · 4.2

## Create & Activate a Fresh venv

Same pattern from Base Camp 2 — a clean, isolated venv just for this project.

🪟 WINDOWS — Command Prompt

cmdCopy
[code] 
    python -m venv venv_fastapi
    venv_fastapi\Scripts\activate
    REM prompt becomes: (venv_fastapi) C:\project>
[/code]

🍎 MACOS — Terminal

zshCopy
[code] 
    python3 -m venv venv_fastapi
    source venv_fastapi/bin/activate
    # prompt becomes: (venv_fastapi) yourname@MacBook project %
[/code]

Everything for the rest of today — installing libraries, running the server — happens with this venv activated.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

18

Part 4 · Setting Up FastAPI · 4.3

## Installing fastapi and uvicorn

Two libraries, two different jobs — you need both.

Library| Why you need it  
---|---  
`fastapi`| Lets you declare endpoints (`@app.get`, `@app.post`) and automatically validates request data.  
`uvicorn`| An ASGI server — the actual program that listens on a port and hands each incoming request to your FastAPI app. FastAPI alone can't listen for network connections; we'll start uvicorn from our own code in 5.5.  
  
Terminal — venv_fastapi activeCopy
[code] 
    pip install fastapi uvicorn
    > Successfully installed fastapi-0.115.0 uvicorn-0.32.0 ...
    
    pip show fastapi
    > Name: fastapi
    > Version: 0.115.0
[/code]

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

19

Part 4 · Setting Up FastAPI · 4.4

## Project Files: main.py

Unlike Part 3's Pandas scripts, a FastAPI project doesn't need much structure to get started.

Terminal — inside your project folderCopy
[code] 
    mkdir calculator_api
    cd calculator_api
    # create an empty file named main.py here
    # (any editor works — VS Code, notepad, nano, ...)
[/code]

  * `main.py` is the name we're choosing — in Part 5.5 the file will start the server itself, referring to its own name as `"main:app"`.
  * Keep this file open in your editor — we'll build it up piece by piece for the rest of the session.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

20

Halfway Point

# From Concepts to a Running Server

You've refreshed functions and error handling, and you understand why client–server architecture and REST APIs exist. Take a longer break here — the second half is where `main.py` actually comes alive.

Next up: Part 5 — From Functions to Endpoints

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

21

Part 5 · From Functions to Endpoints · 5.1

## The Smallest Possible FastAPI App

Type this into `main.py` — four lines is a complete, runnable API.

main.pyCopy
[code] 
    from fastapi import FastAPI
    
    app = FastAPI()
    
    @app.get("/")
    def read_root():
        return {"message": "Calculator API is running"}
[/code]

  * `FastAPI()` creates the application object — everything else attaches to `app`.
  * `@app.get("/")` is a **decorator** — it wires the HTTP method (`GET`) and path (`/`) to the function written directly below it.
  * Returning a dictionary is enough — FastAPI converts it to JSON automatically, no extra step.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

22

Part 5 · From Functions to Endpoints · 5.2

## add() Becomes a GET Endpoint

Append this below the code from 5.1 — same file, growing one endpoint at a time.

main.py (append below)Copy
[code] 
    @app.get("/add")
    def add(a: float, b: float):
        return {"result": a + b}
[/code]

  * This is Part 1.2's `add()` — unchanged logic, wrapped in `@app.get("/add")`.
  * `a: float` and `b: float` aren't optional decoration — FastAPI reads them from `?a=4&b=5` in the URL and _validates_ they're really numbers before your code even runs.
  * Send text instead of a number (`?a=hello&b=5`) and FastAPI rejects it itself, with a `422` — your function is never called.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

23

Part 5 · From Functions to Endpoints · 5.3

## subtract() and multiply() as Endpoints

Same pattern, twice more — append both below `/add`.

main.py (append below)Copy
[code] 
    @app.get("/subtract")
    def subtract(a: float, b: float):
        return {"result": a - b}
    
    @app.get("/multiply")
    def multiply(a: float, b: float):
        return {"result": a * b}
[/code]

Three endpoints in, and the pattern should feel automatic: `@app.get("/path")`, typed parameters, a dictionary return. `/divide` is next — and it needs one more piece.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

24

![](assets/genai-coaching-emblem.svg) GenAI Coaching · Quick Check — GET Endpoints

## Quick Check — GET Endpoints & Validation

In Part 5.2, the `add` endpoint uses `@app.get("/add")` with `a: float, b: float`. What happens if you call `GET /add?a=hello&b=5`?

FastAPI rejects it with 422 Unprocessable Entity before your function runs It returns `{"result": "hello5"}` as a string It returns 200 with `{"result": null}` The server crashes with 500

Which HTTP method is shown for retrieving data with no side effects (read-only) in Part 3.3?

GET POST PUT DELETE

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GENAI COACHING | by AI Accelerator Hub

Quiz

Part 5 · From Functions to Endpoints · 5.4

## divide() — a Real Error, Not a Crash

A server can't `print()` an error and move on the way Part 1.4 did — it needs to send the client a proper response.

main.py (append below)Copy
[code] 
    from fastapi import FastAPI, HTTPException
    
    app = FastAPI()
    
    # ... /add, /subtract, /multiply stay as they are ...
    
    @app.get("/divide")
    def divide(a: float, b: float):
        if b == 0:
            raise HTTPException(status_code=400, detail="Cannot divide by zero")
        return {"result": a / b}
[/code]

  * Add `HTTPException` to the import at the top of the file — it's the FastAPI-side equivalent of the `except ZeroDivisionError` from Part 1.4.
  * `raise HTTPException(status_code=400, detail="...")` sends back the `400 Bad Request` from Part 3.5, with your message in the body — instead of a `500` crash.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

25

Part 5 · From Functions to Endpoints · 5.5

## Letting main.py Start Its Own Server

Instead of typing a long uvicorn command every time, let the file start the server itself — add `import uvicorn` at the top and this `main()` at the very bottom of `main.py`.

main.py (top and bottom of the file)Copy
[code] 
    import uvicorn
    from fastapi import FastAPI, HTTPException
    
    app = FastAPI()
    
    # ... all your endpoints stay as they are ...
    
    def main() -> None:
        uvicorn.run(
            "main:app",       # "module_name:app_variable"; must match this file's name
            host="0.0.0.0",
            port=8000,
            reload=True,      # auto-reload on code changes (dev only)
        )
    
    if __name__ == "__main__":
        main()
[/code]

  * `"main:app"` means "in `main.py`, run the object named `app`" — the variable from 5.1. It's a string because `reload=True` must re-import your file on every save.
  * `host="0.0.0.0"` listens on all network interfaces (dev only); you still browse to `http://localhost:8000` on your own machine. `port=8000` is the port it listens on.
  * The `if __name__ == "__main__":` guard is the pattern from Base Camp 2 — it starts the server only when you run the file directly, not when uvicorn imports it as `main:app`.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

26

Part 5 · From Functions to Endpoints · 5.6

## Running the Server: python main.py

Save `main.py`, then run it like any Python script — Windows and Mac use the identical command.

Terminal — venv_fastapi active, inside calculator_api/Copy
[code] 
    python main.py
    
    INFO:     Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C to quit)
    INFO:     Started reloader process [12345] using StatReload
    INFO:     Application startup complete.
[/code]

  * Python runs the file, hits the `__main__` guard, calls `main()`, and `uvicorn.run(...)` starts the server.
  * Because of `reload=True`, saving a change to `main.py` restarts the server automatically. Press `CTRL+C` to stop it.

Add any new endpoints **above** `def main()` from now on. Leave this terminal running — open a _new_ terminal (or use Swagger, next) to talk to it.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

27

Part 6 · Swagger: Explore Your API · 6.1

## What Is Swagger / OpenAPI?

FastAPI reads your endpoints, their parameters, and their type hints, and auto-generates a complete, interactive API reference — no extra work on your part.

Swagger UIA web page, served by your own running server, listing every endpoint you've written — where you can fill in parameters and actually call them, right from the browser, with no separate client needed.

This is one of the biggest reasons FastAPI was chosen in 4.1 — the documentation can never drift out of date, because it's generated from the same code that runs.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

28

Part 6 · Swagger: Explore Your API · 6.2

## Opening /docs and Trying an Endpoint

With the server still running from 5.6, open a browser to:

browser address barCopy
[code] 
    http://localhost:8000/docs
[/code]

  1. **Find the endpoint.** Click to expand `GET /add` in the list.
  2. **Try it out.** Click the "Try it out" button — the parameter fields become editable.
  3. **Fill in values.** Enter `4` for `a` and `5` for `b`.
  4. **Execute.** Click "Execute" — Swagger sends the real request to your running server.
  5. **Read the result.** See the response body `{"result": 9}` and status code `200`, right below.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

29

Part 6 · Swagger: Explore Your API · 6.3

## Testing the divide-by-zero Error

Same five steps as 6.2, now on `GET /divide` — this time to see the error path from Part 5.4 in action.

a=10, b=2

ResponseCopy
[code] 
    Status: 200
    {
      "result": 5.0
    }
[/code]

a=10, b=0

ResponseCopy
[code] 
    Status: 400
    {
      "detail": "Cannot divide by zero"
    }
[/code]

No traceback, no crashed server — Swagger just shows a `400` and your `detail` message. The server is still running underneath, ready for the next request.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

30

Part 6 · Swagger: Explore Your API · 6.4

## /redoc — the Read-Only Alternative

FastAPI actually ships two docs pages from the same code, for free.

browser address barCopy
[code] 
    http://localhost:8000/redoc
[/code]

  * `/docs` (Swagger UI) — interactive, lets you execute real requests. Best while you're building.
  * `/redoc` — clean, read-only reference. No "Try it out" button, but easier to skim and share with teammates who just need to read the contract.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

31

![](assets/genai-coaching-emblem.svg) GenAI Coaching · Quick Check — Swagger & Status Codes

## Quick Check — Docs & Status Codes

From Part 6: which URL serves the interactive Swagger UI where you can “Try it out” (slide 6.2)?

http://localhost:8000/docs http://localhost:8000/redoc http://localhost:8000/openapi.json http://localhost:8000/

When you call `GET /divide?a=10&b=0` via Swagger (slide 6.3), what response do you see after Part 5.4’s fix?

Status 400 with {"detail": "Cannot divide by zero"} — server stays running Status 200 with {"result": 0} Status 500 traceback and server crashes Status 422 validation error

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GENAI COACHING | by AI Accelerator Hub

Quiz

Part 7 · Calling the API from Python · 7.1

## Installing requests in Your Notebook

Swagger is great for exploring by hand — but a real client is code. Open a _separate_ notebook (or terminal) alongside the one still running uvicorn.

Terminal — notebook's venv activeCopy
[code] 
    pip install requests
    > Successfully installed requests-2.32.3
[/code]

Why requests`requests` is the standard Python library for sending HTTP requests to any server — GET, POST, and every other method. This is literally what "being a client" means in code, and it's what tomorrow's client script will be built on.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

32

Part 7 · Calling the API from Python · 7.2

## GET Requests: add, subtract, multiply

Paste this into a notebook cell — with uvicorn still running in its own terminal.

notebook cellCopy
[code] 
    import requests
    
    BASE_URL = "http://localhost:8000"
    
    response = requests.get(f"{BASE_URL}/add", params={"a": 4, "b": 5})
    print(response.status_code)
    print(response.json())
    
    response = requests.get(f"{BASE_URL}/subtract", params={"a": 10, "b": 3})
    print(response.json())
    
    response = requests.get(f"{BASE_URL}/multiply", params={"a": 6, "b": 7})
    print(response.json())
[/code]

  * `params={"a": 4, "b": 5}` is how `requests` builds the `?a=4&b=5` query string from Part 5.2 — no manual string building.
  * `response.status_code` and `response.json()` are the Python-side view of the raw HTTP response from Part 3.4.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

33

Part 7 · Calling the API from Python · 7.3

## Adding a POST Endpoint: calculate

Back in `main.py` — one more endpoint, this time using `POST` with a JSON body instead of query parameters.

main.py (add above def main())Copy
[code] 
    from pydantic import BaseModel
    
    class CalcRequest(BaseModel):
        a: float
        b: float
        op: str
    
    @app.post("/calculate")
    def calculate(payload: CalcRequest):
        if payload.op == "add":
            result = payload.a + payload.b
        elif payload.op == "subtract":
            result = payload.a - payload.b
        elif payload.op == "multiply":
            result = payload.a * payload.b
        elif payload.op == "divide":
            if payload.b == 0:
                raise HTTPException(status_code=400, detail="Cannot divide by zero")
            result = payload.a / payload.b
        else:
            raise HTTPException(status_code=400, detail=f"Unknown op: {payload.op}")
        return {"result": result}
[/code]

  * `CalcRequest` is a **Pydantic model** — a class describing the exact shape of the JSON body you expect. FastAPI parses and validates it into `payload` automatically.
  * Save the file — `reload=True` from 5.5 picks up this change without restarting the server by hand.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

34

Part 7 · Calling the API from Python · 7.4

## Calling the POST Endpoint

Back in the notebook from 7.2 — a POST sends its data as a JSON _body_ , not a query string.

notebook cellCopy
[code] 
    payload = {"a": 10, "b": 3, "op": "multiply"}
    response = requests.post(f"{BASE_URL}/calculate", json=payload)
    
    print(response.status_code)
    print(response.json())
[/code]

  * `json=payload` tells `requests` to serialize the dictionary and send it as the request body — the client-side mirror of the `CalcRequest` model in 7.3.
  * Try Swagger's `/docs` page on `POST /calculate` too — same endpoint, same result, different client.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

35

![](assets/genai-coaching-emblem.svg) GenAI Coaching · Quick Check — POST Endpoint

## Quick Check — POST & JSON Body

In Part 7.3, the `POST /calculate` endpoint uses a Pydantic `CalcRequest` with `a: float, b: float, op: str`. How does the client send data to it (slide 7.4)?

requests.post(..., json=payload) — as a JSON body requests.get(..., params=payload) — as query string ?a=&b= As form-data via headers As a URL path like /calculate/10/3/multiply

What status code does `calculate` return when `payload.op` is unknown (slide 7.3)?

400 Bad Request with detail "Unknown op: ..." 200 OK with {"result": null} 404 Not Found 500 Internal Server Error

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GENAI COACHING | by AI Accelerator Hub

Quiz

Part 7 · Calling the API from Python · 7.5

## Checking status_code First

A real client never assumes success — it checks the status code from Part 3.5 before trusting the body.

notebook cellCopy
[code] 
    response = requests.get(f"{BASE_URL}/divide", params={"a": 10, "b": 0})
    
    if response.status_code == 200:
        print("Result:", response.json()["result"])
    else:
        print("Error:", response.status_code, response.json()["detail"])
[/code]

This is the client-side twin of Part 5.4's `HTTPException` — the server sends a clean `400` and a `detail` message, and the client checks for it instead of letting a bad response crash its own code.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

36

Recap

## Key Takeaways

1A function's shape — parameters in, body runs, `return` sends a value out — is the same shape an API endpoint uses.

2try/except turns a crash (`ZeroDivisionError`) into a handled, recoverable case.

3Client–server architecture splits software into a server that holds logic and a client that calls it over a network.

4REST APIs expose resources at URLs, acted on with standard HTTP methods, exchanging JSON.

5GET reads data via query parameters; POST sends data via a JSON body — both return dictionaries FastAPI turns into JSON.

6Status codes (200, 400, 404, 422, 500) tell a client what happened before it even reads the body.

7fastapi declares and validates endpoints; uvicorn is the server that actually listens for requests.

8`HTTPException` is the API's version of try/except — a controlled error response instead of a server crash.

9Swagger UI (`/docs`) and ReDoc (`/redoc`) document and let you test every endpoint, generated straight from your code.

10The `requests` library is a real client in Python — today, it proved the server works; tomorrow, we build with it properly.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

37

![](assets/genai-coaching-emblem.svg) GenAI Coaching · Elite Practice Lab

## Elite Lab — Build Your Endpoint

Type the exact decorator and function signature for the `add` endpoint from slide 5.2. The validator checks method, path, and typed params.

main.py — your endpoint
[code]
    # Type the two lines below exactly as in slide 5.2
    @app.get("/add")
    def add(a: float, b: float):
[/code]

Check

Check

Hint: typed params are required — `a: float` not just `a` — and the path is quoted with double quotes.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GENAI COACHING | by AI Accelerator Hub

Lab

#### Continue your elite future

Next up: 2 Ui

[← Previous](<../BaseCamp2-PythonRefresher/2_python_slides.html>) [Continue →](<2_UI.html>)
