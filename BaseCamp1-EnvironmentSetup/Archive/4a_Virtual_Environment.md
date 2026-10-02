# Virtual Environments — A Step-by-Step Model

> **Source:** `BaseCamp1-EnvironmentSetup/Archive/4a_Virtual_Environment.html` → `BaseCamp1-EnvironmentSetup/Archive/4a_Virtual_Environment.md`  
> **Brand:** GenAI Coaching × AI Accelerator Hub | White / Black / Gold Veranda `#0A0A0A` `#C9A86A` `#FFFFFF`  
> **Deployment:** Corporate training — production-grade Markdown (converted from HTML, content verbatim)  
> **Original HTML preserved alongside Markdown**

---

![GenAI Coaching](assets/genai-coaching-emblem.svg)GEN AI  
COACHING

Unlock Your Elite Future · Powered by AI Accelerator Hub

#### Archive · Reference

  * Overview

![](assets/genai-coaching-emblem.svg) GenAI Journey [← Prev](<../../Week1-CodeAssistants/2_full_stack.html>) [Next →](<5_Git_Concept.html>)

![GenAI Coaching](assets/genai-coaching-emblem.svg) GEN AI COACHING Unlock Your Elite Future · Powered by AI Accelerator Hub XP **0**

python // isolation model

# Virtual Environments

One Python installation, many projects. Step through what isolation actually buys you — then see what happens without it.

With venv (step run) Without venv

Step 1 of 10

### Start: one global Python

A single interpreter and its base package shelf. Nothing project-specific lives here yet.

← Prev Next → ▶ Play all ↻ Restart

Global Python 3.11

site-packages — base install only

not created yet

venv-a · classic-ml

python 3.11 (linked to global)

site-packages

— empty —

scikit-learn 1.3 pandas 1.5 numpy 1.23 matplotlib 3.7

app_a.py—

not created yet

venv-b · deep-learning

python 3.11 (linked to global)

site-packages

— empty —

torch 2.1 transformers 4.35 numpy 1.26 tokenizers 0.15

app_b.py—

![](assets/genai-coaching-emblem.svg) Quick Check · Isolation — Why venv? +25 XP

What does creating a venv give you?

A private site-packages per project — numpy 1.23 and 1.26 can coexist A faster Python interpreter A new Python version install A cloud backup of your code

→

Reproducibility

## Freeze it, replay it anywhere

A `requirements.txt` is a snapshot of venv-a's shelf — exact package + version pairs. Handed to an empty environment anywhere else, it rebuilds an identical shelf.

venv-a · classic-ml

scikit-learn==1.3  
pandas==1.5  
numpy==1.23  
matplotlib==3.7 

pip freeze > requirements.txt — written ✓

→

empty environment  
(new machine / new folder)

![](assets/genai-coaching-emblem.svg) Quick Check · Reproducibility — requirements.txt +25 XP

What does pip freeze > requirements.txt capture?

Exact package==version pins to rebuild the same shelf elsewhere Only package names without versions Your Python installer executable Git commit history

No isolation

## One shared shelf for every project

Both projects install straight into the same global site-packages. The second install doesn't add a version — it overwrites the first one.

Global Python 3.11

site-packages — shared by everyone

site-packages

scikit-learn 1.3 pandas 1.5 numpy 1.26 matplotlib 3.7 torch 2.1 transformers 4.35 tokenizers 0.15

pip install numpy==1.26 → overwrote numpy 1.23. There is no second slot for it.

app_a.py (needs numpy 1.23)

✗ ImportError — incompatible numpy

app_b.py (needs numpy 1.26)

● running

![](assets/genai-coaching-emblem.svg) Quick Check · Without venv — the cost +25 XP

What happens if you pip install numpy==1.26 globally without isolation?

It overwrites numpy 1.23 — app_a breaks with ImportError Both versions are kept side by side automatically It creates a new venv for you Nothing changes until you reboot

ELITE PRACTICE LAB

### Activation Challenge — Power Up Your venv

Type the exact command to activate a venv named `venv-a` on macOS/Linux (or Windows). Success means your shell prompt shows the env. Hint: source & Scripts differ by OS.

Your answer: Check Hint

Hint: macOS/Linux → source venv-a/bin/activate · Windows PowerShell → venv-a\Scripts\Activate.ps1 · Windows CMD → venv-a\Scripts\activate

Lab complete +50 XP · You can now activate & isolate like an elite!

Certificate unlocked — Virtual Environments Mastery

All quizzes + lab complete. XP saved per file.

#### Continue your elite future

Next up: 5 Git Concept

[← Previous](<../../Week1-CodeAssistants/2_full_stack.html>) [Continue →](<5_Git_Concept.html>)

![GenAI Coaching](assets/genai-coaching-logo.svg) | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg)

site-packages shelves are illustrative — not a literal directory listing · GenAI Coaching · AI Accelerator Hub
