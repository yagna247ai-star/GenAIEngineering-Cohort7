<div align="center">

<img src="assets/genai-coaching-emblem.svg" width="52" alt="GenAI Coaching" style="vertical-align:middle;margin-right:12px" />
<img src="assets/ai-accelerator-hub-logo.svg" width="240" alt="AI Accelerator Hub" style="vertical-align:middle" />

# Session 1 — Installing Python

> **GenAI Coaching × AI Accelerator Hub** — *White / Black / Gold Veranda* ` #0A0A0A ` ` #C9A86A ` ` #FFFFFF `  
> *Enterprise Corporate Training — Production-Grade • Weekend Quality 10-13 / 15-18 • Weekday 08:00-10:00*

[![Enterprise](https://img.shields.io/badge/Enterprise-Corporate%20Training-0A0A0A?style=for-the-badge)](.) [![Gold Veranda](https://img.shields.io/badge/Gold_Veranda-C9A86A?style=for-the-badge&logo=star)](.) [![Deploy Ready](https://img.shields.io/badge/Deploy-Ready-C9A86A?style=flat-square)](.)

</div>

---

> **GenAI Journey** · `← Prev` · [Next →](2_VS_Code.md)
>

## 📑 Contents
- [One version, everywhere](#one-version-everywhere)
- [Download Python 3.11.9](#download-python-3-11-9)
- [Installing on Windows](#installing-on-windows)
- [Installing on macOS](#installing-on-macos)
- [Confirm Python Is Installed Correctly](#confirm-python-is-installed-correctly)
- ["python", "python3", or "py" — Which One Do I Type?](#python-python3-or-py-which-one-do-i-type)
- [Got Multiple Python Versions Installed?](#got-multiple-python-versions-installed)
- [Environment Check — Before You Move On](#environment-check-before-you-move-on)
  - [Build & Verify — Python 3.11.9 — Verify Your Install](#build-verify-python-3-11-9-verify-your-install)

---


> By the end of this session, every laptop in the room — Windows or Mac — runs the exact same Python version, verified and ready. That consistency is the whole point: when everyone's code behaves the same way, debugging a shared exercise means debugging the exercise, not someone's environment.

---


> [!TIP]
> **Corporate Tip — Deploy Ready**  
> Use this module as a standalone micro-module in your team stand-up. Have each learner demo the step live — corporate cohorts retain **3× more** when they teach back immediately. Pair with *ThinkPad TrackPoint* (hands on home row) + *Arc Weekend Space* (isolate work tabs).


![](assets/genai-coaching-emblem.svg) Base Camp 1 · Week 1 · Session 1

# Environment Setup: Installing Python

By the end of this session, every laptop in the room — Windows or Mac — runs the exact same Python version, verified and ready. That consistency is the whole point: when everyone's code behaves the same way, debugging a shared exercise means debugging the exercise, not someone's environment.

🐍 Target version: Python 3.11.9 Windows + macOS covered

Why this matters

## One version, everywhere

Python is updated constantly, and "just install the latest one" is a trap in a classroom setting: minor version differences change how certain libraries behave (you'll see a live example of this in Base Camp 2, Session 2, with NumPy). To keep every exercise reproducible across the whole cohort, this fellowship standardizes on `Python 3.11.9` specifically — not 3.12, not 3.13, not whatever ships by default on a fresh laptop.

Before you start If you already have some version of Python installed, that's fine — install 3.11.9 alongside it. Session 1's troubleshooting section below shows you how to run the exact version you need even when several are present. 

![](assets/genai-coaching-emblem.svg) Quick Check · One version, everywhere +25 XP

Q1: Why does the fellowship standardize on Python 3.11.9 specifically?

To keep every exercise reproducible across the cohort (the page says minor version differences change how libraries behave) Because 3.11.9 is the newest Python Because 3.11.9 is faster than any other version Because the OS requires 3.11.9

Q2: If you already have a different Python installed, what does the page advise?

Install 3.11.9 alongside it and use version-specific commands Uninstall all other Pythons first Ignore it and use whatever is installed Install 3.11.9 only inside a VM

Step 1 — Download

## Download Python 3.11.9

Use exactly this version — not the latest one on the site. Everyone landing on 3.11.9 means everyone's code behaves identically.

🪟 WINDOWS

Go to the official release page and scroll to **Files** :

`python.org/downloads/release/python-3119/`

Click **Windows installer (64-bit)**.

direct linkCopy
[code] 
    https://www.python.org/ftp/python/3.11.9/python-3.11.9-amd64.exe
[/code]

🍎 MACOS

Same release page, scroll to **Files** :

`python.org/downloads/release/python-3119/`

Click **macOS 64-bit universal2 installer**.

direct linkCopy
[code] 
    https://www.python.org/ftp/python/3.11.9/python-3.11.9-macos11.pkg
[/code]

![](assets/genai-coaching-emblem.svg) Quick Check · Download Python 3.11.9 +25 XP

Q1: Where does the page tell you to download Python 3.11.9?

From python.org → Downloads → View the full list of downloads From the Microsoft Store only From VS Code extensions From GitHub releases

Q2: Which installer file is correct for Windows 64-bit?

Windows installer (64-bit) for Python 3.11.9 Windows installer (32-bit) for 3.13 Source tarball macOS pkg

Step 2 — Windows

## Installing on Windows

  1. **Run the installer** Double-click the downloaded `.exe` file to launch the setup wizard.
  2. **Check "Add python.exe to PATH"** This checkbox sits at the _bottom_ of the first screen and is easy to miss. Without it, typing `python` in a terminal won't work anywhere on the system — the OS has no idea where to find it.
  3. **Click "Install Now"** Use the default install location. Approve the Windows permission prompt if one appears.
  4. **Click "Close" when done** The optional "Disable path length limit" screen is safe to click too — it prevents rare errors with long file paths later in the program.

![](assets/genai-coaching-emblem.svg) Quick Check · Installing on Windows +25 XP

Q1: Which checkbox MUST be ticked during Windows install?

Add python.exe to PATH Install launcher for all users (recommended) → actually “Add Python 3.11 to PATH” Disable pip Install without Tcl/Tk

Q2: What does “Install Now” do on Windows?

Installs Python 3.11.9 with default options into default location Only downloads without installing Installs VS Code Creates a virtual environment

Step 2 — macOS

## Installing on macOS

  1. **Open the .pkg file** Double-click the downloaded `python-3.11.9-macos11.pkg` file.
  2. **Click through the installer** Continue → Continue (license) → Agree → Install. macOS has no "Add to PATH" checkbox — the installer handles this automatically.
  3. **Enter your Mac password** This is your normal login password, required to install system software.
  4. **Run "Install Certificates.command"** A Finder window opens automatically in `/Applications/Python 3.11/` after install. Double-click this file once — it lets Python make secure internet connections.

![](assets/genai-coaching-emblem.svg) Quick Check · Installing on macOS +25 XP

Q1: Which file do macOS users download for Python 3.11.9?

macOS 64-bit universal2 installer for Python 3.11.9 Windows .exe Linux tar.xz Homebrew formula only

Q2: After install, which command checks the version on macOS?

python3 --version or python3.11 --version py -0 winget list code --version

Step 3 — Verify

## Confirm Python Is Installed Correctly

Open a terminal and check both the version _and_ where it lives on disk — a version string alone doesn't tell you which install is actually being run.

🪟 Command Prompt — Windows

cmdCopy
[code] 
    python --version
    > Python 3.11.9
    
    where python
    > C:\Users\...\Python311\python.exe
    
    REM if "python" is not recognized, try:
    py --version
    > Python 3.11.9
[/code]

🍎 Terminal — macOS

zshCopy
[code] 
    python3 --version
    > Python 3.11.9
    
    which python3
    > /Library/Frameworks/Python.framework/Versions/3.11/bin/python3
    
    # plain "python" usually doesn't exist on Mac — always use python3
[/code]

![](assets/genai-coaching-emblem.svg) Quick Check · Confirm Python Is Installed Correctly +25 XP

Q1: What exact output proves success?

Python 3.11.9 Python 3.13.0 Python 2.7 No output

Q2: Which command lists the install path?

which python3 / where python / py -0 (Windows) git status code . pip list

Common Confusion

## "python", "python3", or "py" — Which One Do I Type?

Different laptops resolve these commands differently, depending on OS and what else is installed. Here's what each one actually means.

Command| Where| What it does  
---|---|---  
`python`| Windows (after checking the PATH box)| Works if the installer added Python to PATH and no other "python" already claims that name.  
`python3`| macOS / Linux| The standard command on Mac and Linux, since those systems no longer ship Python 2.  
`py`| Windows — recommended default| The Windows Python Launcher, installed automatically alongside Python. Finds the right version even if multiple are installed.  
`py -3.11`| Windows, multiple versions| Tells the Windows launcher to use exactly version 3.11, ignoring any other installed version.  
`python3.11`| macOS / Linux, multiple versions| Runs a specific version directly when more than one Python 3.x is installed.  
  
![](assets/genai-coaching-emblem.svg) Quick Check · "python", "python3", or "py" — Which One Do I Type? +25 XP

Q1: On Windows the recommended default launcher is:

py python3 python3.11 only python2

Q2: On macOS/Linux with multiple versions, how to pin 3.11?

python3.11 --version py -0 python.exe uv run

Troubleshooting

## Got Multiple Python Versions Installed?

Some laptops already have an older Python from another course or tool. Here's how to find every version on disk and lock in 3.11.9 for this fellowship.

🪟 WINDOWS

cmdCopy
[code] 
    # 1. List every installed version
    py -0
    
    # 2. Run the exact version you need
    py -3.11 --version
[/code]

🍎 MACOS

zshCopy
[code] 
    # 1. List every installed version
    which -a python3
    
    # 2. Run the exact version you need
    python3.11 --version
[/code]

Rule of thumb Always run programs with `py -3.11` (Windows) or `python3.11` (Mac) for this course — even if plain `python` / `python3` already points somewhere else on your machine. 

![](assets/genai-coaching-emblem.svg) Quick Check · Got Multiple Python Versions Installed? +25 XP

Q1: Windows: how to list every installed version?

py -0 python --version code --list pip freeze

Q2: macOS: how to list every installed version?

which -a python3 py -0 where.exe python ls -a

You're done when...

## Environment Check — Before You Move On

  * ✓ Running the version command prints exactly `Python 3.11.9`
  * ✓ You know the exact command your laptop needs (`python` / `python3` / `py` / `py -3.11`)
  * ✓ You know the file path where Python is installed
  * ✓ If multiple versions exist, you can run the 3.11.9 one on demand

Stuck? Flag your instructor before the next step — everyone needs a working Python before we install the code editor. 

![](assets/genai-coaching-emblem.svg) Quick Check · Environment Check — Before You Move On +25 XP

Q1: Which checklist item is required before next step?

Running version command prints exactly Python 3.11.9 Having deleted old Pythons Installing Node Creating GitHub repo

Q2: What to do if stuck?

Flag your instructor before the next step Reinstall OS Skip to VS Code anyway Ignore the version

ELITE PRACTICE LAB

### Build & Verify — Python 3.11.9 — Verify Your Install

Type the exact version-check command for your OS. The page says success is printing Python 3.11.9. Try the Windows launcher or macOS command.

Your answer:

Check Hint

Hint: Windows → py -3.11 --version or py --version · macOS → python3 --version or python3.11 --version

✓ Verified — Elite Completed

Confetti! You nailed the hands-on check for this page.

Elite Completed — GenAI Coaching

All Quick Checks + Lab verified. Your certificate is ready — XP saved on this device.

---

<div align="center">

<img src="assets/genai-coaching-emblem.svg" width="28" alt="GenAI Coaching" style="vertical-align:middle" /> **GEN AI COACHING** &nbsp;|&nbsp; <img src="assets/ai-accelerator-hub-logo.svg" width="140" alt="AI Accelerator Hub" style="vertical-align:middle" />

*GenAI Learning · Powered by AI Accelerator Hub* — *Corporate Training • Production-Grade*

> *Source:* `BaseCamp1-EnvironmentSetup/1_Python.html` → `BaseCamp1-EnvironmentSetup/1_Python.md` | *Original HTML preserved* | *Gold `#C9A86A` Black `#0A0A0A` White `#FFFFFF`*


> **Continue your elite future** — Next up: *2 Vs Code*  
> `← Previous` · [Continue →](2_VS_Code.md)

</div>
