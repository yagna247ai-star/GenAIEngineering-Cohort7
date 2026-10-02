<div align="center">

<img src="assets/genai-coaching-logo.svg" width="360" alt="GenAI Coaching — AI Accelerator Hub" />

# Session 2 — Installing VS Code

> **GenAI Coaching × AI Accelerator Hub** — *White / Black / Gold Veranda* ` #0A0A0A ` ` #C9A86A ` ` #FFFFFF `  
> *Enterprise Corporate Training — Production-Grade • Weekend Quality 10-13 / 15-18 • Weekday 08:00-10:00*

</div>

---

> **GenAI Journey** · [← Prev](1_Python.md) · [Next →](3_api_keys.md)
>

## 📑 Contents
- [One editor, one workflow](#one-editor-one-workflow)
- [Download VS Code](#download-vs-code)
- [Meet the Explorer](#meet-the-explorer)
- [Open a Terminal Inside VS Code](#open-a-terminal-inside-vs-code)
- [Install the Python & Jupyter Extensions](#install-the-python-jupyter-extensions)
- [Choose a Color Theme](#choose-a-color-theme)
- [Create test.py and test.ipynb](#create-test-py-and-test-ipynb)
- [Confirm the Right Python Is Selected](#confirm-the-right-python-is-selected)
- [Choosing the Right Python When Several Are Installed](#choosing-the-right-python-when-several-are-installed)
- [Install ipykernel](#install-ipykernel)
- [Extra Extensions Worth Installing](#extra-extensions-worth-installing)
- [VS Code Setup — Final Check](#vs-code-setup-final-check)
  - [Build & Verify — VS Code — Confirm Editor & Interpreter](#build-verify-vs-code-confirm-editor-interpreter)

---


> Your code editor for the entire fellowship. This session installs VS Code, sets up an in-editor terminal, adds the essential extensions, and has you write your very first Python file and notebook.

---


> [!TIP]
> **Corporate Tip — Deploy Ready**  
> Use this module as a standalone micro-module in your team stand-up. Have each learner demo the step live — corporate cohorts retain **3× more** when they teach back immediately. Pair with *ThinkPad TrackPoint* (hands on home row) + *Arc Weekend Space* (isolate work tabs).


Base Camp 1 · Week 1 · Session 2

# Environment Setup: Installing VS Code

Your code editor for the entire fellowship. This session installs VS Code, sets up an in-editor terminal, adds the essential extensions, and has you write your very first Python file and notebook.

💻 Editor: Visual Studio Code Builds on Session 1's Python 3.11.9

Why this matters

## One editor, one workflow

Python (Session 1) is the language; VS Code is where you'll actually write, run, and debug it every day of this fellowship. Beyond text editing, VS Code gives you a built-in terminal, a file browser, and — critically — a way to see and switch _which_ Python installation is running your code. That last part matters a lot once multiple Python versions or virtual environments enter the picture (Base Camp 2 covers this in depth).

Corporate Tip — Deploy Ready Use this section as a standalone micro-module: pair the concept above with your team stand-up. Have each learner demo the step live — corporate cohorts retain 3× more when they teach back immediately. 

Quick Check · One editor, one workflow +25 XP

Q1: Why is VS Code the fellowship editor?

It gives a built-in terminal, file browser, and Python interpreter switcher — the page says that matters when multiple versions exist Because it's the only editor that runs Python Because Python ships inside VS Code Because it's required for GitHub

Q2: What does VS Code show about Python?

Which Python installation is running your code Only the file name Only the OS version The AWS region

Step 1 — Download

## Download VS Code

The site automatically detects your operating system — just click the big button.

urlCopy
[code] 
    https://code.visualstudio.com/download
[/code]

Mac users Choose **Apple Silicon** if your Mac has an M1/M2/M3/M4 chip, or **Intel chip** for older Macs. Not sure? **Universal** works on both. 

Quick Check · Download VS Code +25 XP

Q1: Where to download VS Code from?

code.visualstudio.com python.org github.com only Microsoft Store exclusively

Q2: Which VS Code build is recommended?

Stable build for your OS (Windows/macOS) Insiders only Web only Legacy 2019 build

Step 2 — First Look

## Meet the Explorer

The Explorer is your file browser inside VS Code — every file and folder for the course lives here. Open it with the file icon in the leftmost activity bar, then **File → Open Folder…** to point VS Code at your working directory.

Tip Create one folder for the whole fellowship — e.g. `ai-fellowship` — and keep every week's files inside it. Opening that single folder in VS Code gives you one Explorer view for everything. 

Quick Check · Meet the Explorer +25 XP

Q1: What is the Explorer in VS Code?

The file browser / sidebar that shows folders and files A browser extension The terminal The Python debugger

Q2: Explorer lets you:

Create, rename, and delete files and folders Only view images Compile Python to C Set AWS budgets

Step 3 — Terminal

## Open a Terminal Inside VS Code

Menu bar → Terminal → New Terminal, or the keyboard shortcut below.

shortcutCopy
[code] 
    Ctrl+`   (Windows)
    Cmd+`    (macOS)
[/code]

🪟 WINDOWS

Terminal dropdown should show **cmd**.

Select "cmd" (Command Prompt) — **not PowerShell**.

🍎 MACOS

Terminal dropdown should show **zsh**.

The default "zsh" terminal is exactly what you need — no change needed.

Quick Check · Open a Terminal Inside VS Code +25 XP

Q1: How to open a terminal inside VS Code?

Terminal → New Terminal or Ctrl+` File → New File View → Explorer Run → Start Debugging

Q2: Where does the integrated terminal open?

Inside VS Code at the bottom panel As a separate OS window only Inside the browser URL bar Inside GitHub

Step 4 — Extensions

## Install the Python & Jupyter Extensions

Open the Extensions panel, search, then install both — make sure the publisher says **Microsoft** for each.

shortcutCopy
[code] 
    Cmd+Shift+X   (macOS)
    Ctrl+Shift+X  (Windows)
[/code]

Extension| Publisher| What it gives you  
---|---|---  
Python| Microsoft| IntelliSense, linting, debugging & more  
Jupyter| Microsoft| Notebook support for VS Code  
  
Watch out Check the publisher name under each search result — it should say "Microsoft." Several look-alike extensions exist from other publishers. 

Quick Check · Install the Python & Jupyter Extensions +25 XP

Q1: Which two extensions are essential?

Python (Microsoft) and Jupyter (Microsoft) Prettier and ESLint GitLens and Docker Live Server only

Q2: How to install an extension?

Click Extensions sidebar → search → Install Drag a zip file onto the dock pip install brew install

Step 5 — Make It Yours

## Choose a Color Theme

Open the Command Palette, type "Color Theme," pick one, and use the arrow keys to preview each option live before committing.

shortcutCopy
[code] 
    Ctrl+Shift+P  (Windows)   →  "Color Theme"
    Cmd+Shift+P   (macOS)     →  "Color Theme"
[/code]

Options include Dark Modern (default), Light Modern, Monokai, Solarized Dark, Solarized Light, and High Contrast.

There's no "right" theme — pick whatever's easiest on your eyes. If you want your screen to match the instructor's screenshots exactly, stick with **Dark Modern** (the default). 

Quick Check · Choose a Color Theme +25 XP

Q1: Choosing a theme affects:

Editor colors / readability only — not functionality Python version API keys Git history

Q2: How to change theme?

Preferences: Color Theme via Command Palette Reinstall VS Code Edit settings.json only Change OS wallpaper

Step 6 — Your First Files

## Create test.py and test.ipynb

In the Explorer, click the "New File" icon (or right-click your folder → New File).

test.pyCopy
[code] 
    print("Hello, AI Accelerator Hub!")
[/code]

Naming tip Use `.py` for plain Python scripts and `.ipynb` for Jupyter notebooks — VS Code recognizes both instantly and adjusts its UI accordingly (e.g. notebooks get "cells," scripts get a Run button). 

Quick Check · Create test.py and test.ipynb +25 XP

Q1: Which two test files do you create?

test.py and test.ipynb app.py and index.html .env and README.md main.go and main.rs

Q2: test.py should contain:

print("Hello, fellowship!") or similar print test import aws secrets HTML page SQL query

Step 7 — Verify

## Confirm the Right Python Is Selected

VS Code always shows which Python interpreter is active: **bottom-right** of the window for a `.py` file, **top-right** for a Jupyter notebook.

File type| Where the indicator lives| How to change it  
---|---|---  
`test.py`| Bottom status bar — e.g. "🐍 Python 3.11.9"| Command Palette → "Python: Select Interpreter" → choose the one showing 3.11.9  
`test.ipynb`| Top-right kernel picker| Click "Select Kernel" → Python Environments → pick 3.11.9  
  
Quick Check · Confirm the Right Python Is Selected +25 XP

Q1: Where to confirm Python interpreter in VS Code?

Bottom-right status bar / Command Palette → Python: Select Interpreter Top menu → Help → About Explorer → Outline Git tab

Q2: Correct interpreter to select is:

Python 3.11.9 installed in Session 1 Any Python 2.7 System Python without version Node.js

Multiple Versions?

## Choosing the Right Python When Several Are Installed

Clicking the version indicator (bottom-right for .py, kernel picker top-right for .ipynb) opens a list of every Python VS Code can find on your machine — something like this:

Select InterpreterCopy
[code] 
    Python 3.11.9  ('.venv': venv)  — ./.venv/bin/python        ← this one
    Python 3.9.6                    — /usr/bin/python3  (macOS system Python)
    Python 3.12.1                   — /usr/local/bin/python3.12
    Python 2.7.18                   — /usr/bin/python  (legacy, deprecated)
[/code]

Rule of thumb Always match the exact version number — **3.11.9** — and prefer an entry inside a project's `.venv` folder over a system-wide install. (You'll create your first `.venv` in Base Camp 2.) 

Quick Check · Choosing the Right Python When Several Are Installed +25 XP

Q1: With multiple Pythons, how to lock to 3.11.9 in VS Code?

Select 3.11.9 in the interpreter picker Uninstall all others Use py -0 inside VS Code only Edit the HTML

Q2: Which detail is also in the "Choosing the Right Python When Several Are Installed" section?

Multiple section says pick 3.11.9 in interpreter picker. Unrelated distractor A Unrelated distractor B Unrelated distractor C

Step 8 — One More Package

## Install ipykernel

If the kernel picker couldn't find a Jupyter kernel for your Python, run this once in the terminal.

Why this step? `ipykernel` is the bridge that lets Jupyter notebooks run code using a specific Python installation. Without it, the kernel picker in `test.ipynb` won't show your Python 3.11.9 as an option. 

🪟 WINDOWS

cmdCopy
[code] 
    python -m pip install ipykernel
[/code]

🍎 MACOS

zshCopy
[code] 
    python3 -m pip install ipykernel
[/code]

Using `python -m pip` (not just `pip`) guarantees the package installs into the exact Python you're targeting — even with multiple versions installed, because `python -m` forces that specific interpreter to do the installing. 

Quick Check · Install ipykernel +25 XP

Q1: What is ipykernel for?

Lets VS Code run Jupyter notebooks with the selected Python A theme A Git extension An AWS SDK

Q2: Which detail is also in the "Install ipykernel" section?

ipykernel section: enables notebooks with the selected kerne Unrelated distractor A Unrelated distractor B Unrelated distractor C

Step 9 — A Few More Extensions

## Extra Extensions Worth Installing

Same process every time: Extensions icon → search the name → check the publisher → Install.

Extension| Publisher| What it's for  
---|---|---  
Draw.io Integration| Henning Dieterichs| Create & edit diagrams (.drawio) without leaving VS Code  
Markdown Preview Enhanced| Yiyi Wang| Richer Markdown preview — math, diagrams, tables, export to PDF  
Mermaid| Mermaid Chart| Author Mermaid diagrams (flowcharts, sequence, ER) with editor support  
Mermaid Preview| Mermaid OSS| Live-render Mermaid diagrams side-by-side as you write them  
  
Quick Check · Extra Extensions Worth Installing +25 XP

Q1: Which extra extension is suggested?

Pylance, autoDocstring, etc. Photoshop extension AWS Toolkit only No extras suggested

Q2: Which detail is also in the "Extra Extensions Worth Installing" section?

MoreExt lists Pylance and helpful extras. Unrelated distractor A Unrelated distractor B Unrelated distractor C

You're done when...

## VS Code Setup — Final Check

  * ✓ VS Code is installed and opens correctly
  * ✓ A terminal opens inside VS Code (cmd on Windows — not PowerShell — or zsh on Mac)
  * ✓ Python and Jupyter extensions installed, both published by Microsoft
  * ✓ A color theme is chosen and comfortable to read
  * ✓ `test.py` and `test.ipynb` both exist and run
  * ✓ Both files show Python 3.11.9 as the selected interpreter / kernel
  * ✓ `ipykernel` is installed
  * ✓ Draw.io Integration, Markdown Preview Enhanced, Mermaid, and Mermaid Preview are installed

Quick Check · VS Code Setup — Final Check +25 XP

Q1: Final check requires:

VS Code opens test.py and runs Hello with Python 3.11.9 VS Code uninstalls Python AWS account created GitHub username chosen

Q2: Which detail is also in the "VS Code Setup — Final Check" section?

Checklist confirms test.py runs correctly. Unrelated distractor A Unrelated distractor B Unrelated distractor C

ELITE PRACTICE LAB

### Build & Verify — VS Code — Confirm Editor & Interpreter

Type the command that proves VS Code sees Python 3.11.9. The page uses the status bar / interpreter picker, but in a terminal you'd check the editor and Python.

Your answer:

Check Hint

Hint: Try code --version to prove VS Code installed, or python --version to prove the interpreter

✓ Verified — Elite Completed

Confetti! You nailed the hands-on check for this page.

Elite Completed — GenAI Coaching

All Quick Checks + Lab verified. Your certificate is ready — XP saved on this device.

---

<div align="center">

<img src="assets/ai-accelerator-hub-logo.svg" width="180" alt="AI Accelerator Hub" />

*GenAI Learning · Powered by AI Accelerator Hub* — *Corporate Training • Production-Grade*

> *Source:* `BaseCamp1-EnvironmentSetup/2_VS_Code.html` → `BaseCamp1-EnvironmentSetup/2_VS_Code.md` | *Original HTML preserved* | *Gold `#C9A86A` Black `#0A0A0A` White `#FFFFFF`*


> **Continue your elite future** — Next up: *3 Api Keys*  
> [← Previous](1_Python.md) · [Continue →](3_api_keys.md)

</div>
