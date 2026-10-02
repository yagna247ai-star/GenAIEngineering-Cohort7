<div align="center">

<img src="assets/genai-coaching-logo.svg" width="360" alt="GenAI Coaching — AI Accelerator Hub" />

# Environments, Libraries & Data Tools — Slides

> **GenAI Coaching × AI Accelerator Hub** — *White / Black / Gold Veranda* ` #0A0A0A ` ` #C9A86A ` ` #FFFFFF `  
> *Enterprise Corporate Training — Production-Grade • Weekend Quality 10-13 / 15-18 • Weekday 08:00-10:00*

</div>

---

> **GenAI Journey** · [← Prev](2_python_refresher.md) · [Next →](2_python_slides.md)
>

## 📑 Contents
- [How This Extended Session Breaks Down](#how-this-extended-session-breaks-down)
- [By the End of This Session, You Will Be Able To…](#by-the-end-of-this-session-you-will-be-able-to)
- [The Problem: Version Conflicts](#the-problem-version-conflicts)
- [What Is a Virtual Environment?](#what-is-a-virtual-environment)
- [Creating a Virtual Environment](#creating-a-virtual-environment)
- [Quick Check](#quick-check)
- [Activating a Virtual Environment](#activating-a-virtual-environment)
- [Deactivating a Virtual Environment](#deactivating-a-virtual-environment)
- [The Problem Libraries Solve](#the-problem-libraries-solve)
- [Installing a Library with pip](#installing-a-library-with-pip)
- [Import and Use a Library](#import-and-use-a-library)
- [Set Up venv_numpy_126](#set-up-venv-numpy-126)
- [Quick Check](#quick-check)
- [Set Up venv_numpy_232](#set-up-venv-numpy-232)
- [Validate: Is the venv Actually Active?](#validate-is-the-venv-actually-active)

---


> Virtual environments · installing libraries with pip · NumPy · Pandas · files, functions & error handling · command-line scripts. This session combines two full modules — set up isolated environments, install and use real libraries, and finish with a script you run from the terminal, not just a notebook cell.

---


> [!TIP]
> **Corporate Tip — Deploy Ready**  
> Use this module as a standalone micro-module in your team stand-up. Have each learner demo the step live — corporate cohorts retain **3× more** when they teach back immediately. Pair with *ThinkPad TrackPoint* (hands on home row) + *Arc Weekend Space* (isolate work tabs).


Slide 1 / 38 · use ← → or the sidebar

‹ Prev Next ›

Base Camp 2 · Week 1 · Session 2 · Extended

# Environments, Libraries & Data Tools

Virtual environments · installing libraries with pip · NumPy · Pandas · files, functions & error handling · command-line scripts. This session combines two full modules — set up isolated environments, install and use real libraries, and finish with a script you run from the terminal, not just a notebook cell.

⏱ Extended, hands-on 📄 Dataset: employees.csv (provided)

GenAI Coaching | Powered by AI Accelerator Hub 

01

Corporate Tip — Deploy Ready Use this section as a standalone micro-module: pair the concept above with your team stand-up. Have each learner demo the step live — corporate cohorts retain 3× more when they teach back immediately. 

Session Agenda

## How This Extended Session Breaks Down

0:00–0:10Welcome & Recap

0:10–0:40Part 1 — Virtual Environments

0:40–1:10Part 2 — Libraries

1:10–1:20Break

1:20–2:40Part 3 — Hands-On: Two venvs, Two NumPy Versions

2:40–2:55requirements.txt & Mid-Session Recap

2:55–3:10Break

3:10–3:35Part 4 — NumPy Capabilities

3:35–4:15Part 5 — Introducing Pandas

4:15–4:25Break

4:25–5:10Part 6 — Functions, Files & Error Handling

5:10–5:50Part 7 — Running Python Like a Real Program

5:50–6:00Final Recap & Wrap-up

GenAI Coaching | Powered by AI Accelerator Hub 

02

Corporate Tip — Deploy Ready Use this section as a standalone micro-module: pair the concept above with your team stand-up. Have each learner demo the step live — corporate cohorts retain 3× more when they teach back immediately. 

Learning Objectives

## By the End of This Session, You Will Be Able To…

By the end of this session, you will be able to:

1Explain why virtual environments exist, and create / activate / deactivate one on Windows and Mac.

2Explain why libraries exist and install one with pip.

3Set up two separate venvs with two different NumPy versions on the same laptop.

4Validate a virtual environment, and check which libraries and versions are installed.

5Use requirements.txt to record and recreate an environment's dependencies.

6Use NumPy for array creation, math, aggregation, and reshaping.

7Use pandas to read, explore, filter, group, and write tabular data (CSV files).

8Write functions that take file paths as arguments, process data, and write a new file.

9Handle errors gracefully with try/except instead of letting a program crash.

10Structure a script with `if __name__ == "__main__"` and run it from the terminal with arguments.

GenAI Coaching | Powered by AI Accelerator Hub 

03

Part 1 · Virtual Environments · 1.1

## The Problem: Version Conflicts

By default, there's only one Python and one set of installed libraries on your laptop.

The NumPy example `np.strings` was added in NumPy 2.0. Code written for NumPy 2.3.2 that uses `np.strings.str_len()` will crash with an `AttributeError` on NumPy 1.26 — same code, same laptop, different result. We'll reproduce this exact error ourselves in Part 3. 

Project A might need NumPy 1.26. Project B — built a year later — needs NumPy 2.3.2 for a feature that didn't exist before. Installing one version globally can silently break the other project.

GenAI Coaching | Powered by AI Accelerator Hub 

04

Part 1 · Virtual Environments · 1.2

## What Is a Virtual Environment?

A virtual environment (venv) is an isolated, self-contained copy of Python and its installed libraries.

Mental model Think of each venv as its own sealed toolbox. You can have `venv_numpy_126` → NumPy 1.26 and `venv_numpy_232` → NumPy 2.3.2, both on the same laptop, both using the same base Python install, completely independent of each other. 

Each project gets its own venv folder — installing or upgrading a library in one venv never touches another. And `venv` comes built into Python — no separate installation required.

GenAI Coaching | Powered by AI Accelerator Hub 

05

Part 1 · Virtual Environments · 1.3

## Creating a Virtual Environment

Run this once, inside your project folder, to create a new venv folder on disk.

🪟 WINDOWS — Command Prompt

cmdCopy
[code] 
    python -m venv venv_numpy_126
              REM creates a new folder: .\venv_numpy_126\
[/code]

🍎 MACOS — Terminal

zshCopy
[code] 
    python3 -m venv venv_numpy_126
              # creates a new folder: ./venv_numpy_126/
[/code]

`venv_numpy_126` is just a name we're choosing — call it anything, but a name that describes the project or setup helps future-you.

GenAI Coaching | Powered by AI Accelerator Hub 

06



## Activating a Virtual Environment

Activation switches your terminal to use that venv's Python and libraries until you deactivate.

🪟 WINDOWS — Command Prompt

cmdCopy
[code] 
    venv_numpy_126\Scripts\activate
              REM prompt becomes: (venv_numpy_126) C:\project>
[/code]

🍎 MACOS — Terminal

zshCopy
[code] 
    source venv_numpy_126/bin/activate
              # prompt becomes: (venv_numpy_126) yourname@MacBook project %
[/code]

That `(venv_numpy_126)` prefix appearing in your prompt is the signal it worked — see 3.3 below for how to confirm it fully.

GenAI Coaching | Powered by AI Accelerator Hub 

07

Part 1 · Virtual Environments · 1.5

## Deactivating a Virtual Environment

One single command — identical on Windows and Mac — returns you to your regular system Python.

Command Prompt / Terminal — both OSCopy
[code] 
    deactivate
              # prompt prefix is gone — you're back to the system Python
[/code]

Deactivate before switching to a different venv — running two active venvs at once in one terminal isn't a thing; each terminal window is either in one venv, or in none.

GenAI Coaching | Powered by AI Accelerator Hub 

08

Part 2 · Libraries · 2.1

## The Problem Libraries Solve

Every program needs common building blocks — math, dates, file handling, working with grids of numbers. Writing all of that from scratch, correctly and fast, would take years before you write your first real feature.

Example: NumPy NumPy is the standard library for working with arrays and numerical data in Python. Operations that would take dozens of lines of your own loops become a single, fast, well-tested function call — which is why almost every data science and AI codebase starts with: 

pythonCopy
[code] 
    import numpy as np
[/code]

A library is code someone else already wrote, tested, and optimized — you just plug it in.

GenAI Coaching | Powered by AI Accelerator Hub 

09

Part 2 · Libraries · 2.2

## Installing a Library with pip

pip is Python's built-in package installer — it ships with Python, no extra setup needed.

Terminal — Windows or MacCopy
[code] 
    # install the latest version of a library
              pip install numpy
              > Successfully installed numpy-2.3.2
    
              # check what version got installed
              pip show numpy
              > Name: numpy
              > Version: 2.3.2
[/code]

The exact same two commands — `pip install` and `pip show` — work identically on Windows and Mac.

GenAI Coaching | Powered by AI Accelerator Hub 

10

Part 2 · Libraries · 2.3

## Import and Use a Library

notebook cellCopy
[code] 
    import numpy as np
              print(f"Numpy version: {np.__version__}")
    
              string_arr = np.array(['hello', 'world', 'numpy'])
              np.strings.str_len(string_arr)
[/code]

  * `import numpy as np` loads the whole library under the short name `np`.
  * `np.__version__` tells you exactly which version is installed.
  * `np.strings.str_len()` is a real NumPy 2.x function — keep this example in mind for Part 3.

GenAI Coaching | Powered by AI Accelerator Hub 

11

Part 3 · Hands-On · 3.1

## Set Up venv_numpy_126

Create it, activate it, then install the older NumPy — pin the exact version with `==`.

🪟 WINDOWS

cmdCopy
[code] 
    python -m venv venv_numpy_126
              venv_numpy_126\Scripts\activate
              pip install numpy==1.26.4
              > Successfully installed numpy-1.26.4
[/code]

🍎 MACOS

zshCopy
[code] 
    python3 -m venv venv_numpy_126
              source venv_numpy_126/bin/activate
              pip install numpy==1.26.4
              > Successfully installed numpy-1.26.4
[/code]

GenAI Coaching | Powered by AI Accelerator Hub 

12



## Set Up venv_numpy_232

Same steps, new venv name, and the newer NumPy this time.

🪟 WINDOWS

cmdCopy
[code] 
    python -m venv venv_numpy_232
              venv_numpy_232\Scripts\activate
              pip install numpy==2.3.2
              > Successfully installed numpy-2.3.2
[/code]

🍎 MACOS

zshCopy
[code] 
    python3 -m venv venv_numpy_232
              source venv_numpy_232/bin/activate
              pip install numpy==2.3.2
              > Successfully installed numpy-2.3.2
[/code]

You now have two folders on disk — `venv_numpy_126` and `venv_numpy_232` — each with its own private copy of NumPy.

GenAI Coaching | Powered by AI Accelerator Hub 

13

Part 3 · Hands-On · 3.3

## Validate: Is the venv Actually Active?

Three quick checks — the prompt prefix, the Python location, and the Python version.

🪟 WINDOWS

cmdCopy
[code] 
    (venv_numpy_232) where python
              > ...\venv_numpy_232\Scripts\python.exe
    
              (venv_numpy_232) python --version
              > Python 3.11.9
[/code]

🍎 MACOS

zshCopy
[code] 
    (venv_numpy_232) which python3
              > .../venv_numpy_232/bin/python3
    
              (venv_numpy_232) python3 --version
              > Python 3.11.9
[/code]

**Important:** the Python version (3.11.9) stays the same in every venv — venvs isolate installed _libraries_ , not the Python version itself.

GenAI Coaching | Powered by AI Accelerator Hub 

14

Part 3 · Hands-On · 3.4

## Check Installed Libraries & Versions

Run these inside each activated venv to see exactly what's installed there.

Terminal — inside venv_numpy_126Copy
[code] 
    (venv_numpy_126) pip list
              Package    Version
              ---------- -------
              numpy      1.26.4
              pip        24.0
    
              (venv_numpy_126) pip show numpy
              Name: numpy
              Version: 1.26.4
              Location: .../venv_numpy_126/lib/python3.11/site-packages
[/code]

Same two commands, run inside `venv_numpy_232`, would show `Version: 2.3.2` instead — same laptop, two truths.

GenAI Coaching | Powered by AI Accelerator Hub 

15

Part 3 · Hands-On · 3.5

## Write the Test Function (.py and .ipynb)

Save this exact code as `test_numpy.py` — and also paste it into a Jupyter cell as `test_numpy.ipynb`.

test_numpy.pyCopy
[code] 
    import numpy as np
    
              def get_string_lengths(words):
                  arr = np.array(words)
                  return np.strings.str_len(arr)
    
              print(get_string_lengths(["hello", "world", "numpy"]))
[/code]

  * `get_string_lengths()` wraps the `np.strings.str_len()` call from Part 2.3 in a reusable function.
  * This one function is what we'll run in both venvs next.

GenAI Coaching | Powered by AI Accelerator Hub 

16

Part 3 · Hands-On · 3.6

## Same File, Two Different Outcomes

Run `python test_numpy.py` in each activated venv, back to back.

venv_numpy_232

TerminalCopy
[code] 
    (venv_numpy_232) python test_numpy.py
              [5 5 5]
              # works perfectly — np.strings exists in NumPy 2.x
[/code]

venv_numpy_126

TerminalCopy
[code] 
    (venv_numpy_126) python test_numpy.py
              Traceback (most recent call last):
                File "test_numpy.py", line 5
              AttributeError: module 'numpy' has no
              attribute 'strings'. Did you mean: 'string_'?
[/code]

This is exactly why venvs exist: identical code, identical laptop — the only difference is which environment is active.

GenAI Coaching | Powered by AI Accelerator Hub 

17

Part 3 · Hands-On · 3.7

## requirements.txt — Reproducible Environments

A text file listing every installed package and its exact version — so anyone can recreate your environment.

Terminal — inside venv_numpy_232Copy
[code] 
    # 1. Save everything installed to a file
              pip freeze > requirements.txt
    
              # requirements.txt now contains:
              numpy==2.3.2
    
              # 2. Anyone (or any machine) can recreate it:
              pip install -r requirements.txt
[/code]

Share `requirements.txt` alongside your code — teammates, servers, and your future self all install the exact same versions.

GenAI Coaching | Powered by AI Accelerator Hub 

18



## Creating Arrays

notebook cellCopy
[code] 
    a = np.array([1, 2, 3, 4, 5])
              zeros = np.zeros(4)
              ones = np.ones((2, 3))
              seq = np.arange(0, 10, 2)
              lin = np.linspace(0, 1, 5)
    
              print(a)
              print(zeros)
              print(ones)
              print(seq)
              print(lin)
[/code]

  * `np.array()` turns a Python list into a fast NumPy array.
  * `np.zeros()` / `np.ones()` create pre-filled arrays of any shape.
  * `np.arange(start, stop, step)` and `np.linspace(start, stop, count)` both generate number sequences.

GenAI Coaching | Powered by AI Accelerator Hub 

20

Part 4 · NumPy · 4.2

## Array Math & Broadcasting

notebook cellCopy
[code] 
    prices = np.array([100, 200, 300])
              print(prices * 1.1)
              print(prices + 10)
    
              a1 = np.array([1, 2, 3])
              b1 = np.array([10, 20, 30])
              print(a1 + b1)
[/code]

  * Math operators apply to every element at once — no loop needed.
  * A single number (like 1.1) automatically "broadcasts" across the whole array.
  * Two same-shaped arrays combine element-by-element: `a1[0]+b1[0]`, `a1[1]+b1[1]`...

GenAI Coaching | Powered by AI Accelerator Hub 

21

Part 4 · NumPy · 4.3

## Aggregations, Indexing & Reshaping

notebook cellCopy
[code] 
    grades = np.array([88, 92, 79, 95, 66])
              print(grades.sum())
              print(grades.mean())
              print(grades.max())
              print(grades.std())
    
              grid = np.arange(1, 13).reshape(3, 4)
              print(grid)
              print(grid[1, 2])
              print(grid[:, 1])
[/code]

  * `.sum()`, `.mean()`, `.max()`, `.std()` summarize a whole array in one call.
  * `.reshape(rows, cols)` turns a flat array into a grid — same data, new shape.
  * `grid[1, 2]` gets one cell; `grid[:, 1]` gets an entire column.

GenAI Coaching | Powered by AI Accelerator Hub 

22

Part 5 · Pandas · 5.1

## Why Pandas?

NumPy arrays are great for numbers, but real data has named columns, mixed types, and missing values. pandas adds the **DataFrame** — a table, like a spreadsheet, that you can filter, group, and reshape with code.

The two building blocks **Series** — a single labeled column of data, like one column in a spreadsheet.  
**DataFrame** — a full table made of many Series, sharing one row index. 

pythonCopy
[code] 
    import pandas as pd
[/code]

That one line is how almost every pandas file starts. Almost every real dataset you'll touch in this fellowship starts as a CSV file loaded into a DataFrame.

GenAI Coaching | Powered by AI Accelerator Hub 

23

Part 5 · Pandas · 5.2

## Our Mock Dataset: employees.csv

A small, realistic CSV we'll use for every pandas example this session — 12 employees across 4 departments.

employee_id| name| department| salary| join_date  
---|---|---|---|---  
101| Ravi Kumar| Engineering| 85000| 2021-03-15  
102| Meera Nair| Engineering| 92000| 2020-07-01  
103| Zara Khan| Marketing| 67000| 2022-01-10  
104| Kabir Singh| Sales| 58000| 2019-11-20  
105| Ana Silva| Engineering| 78000| 2023-05-05  
… 7 more rows …  
  
employees.csvCopy
[code] 
    employee_id,name,department,salary,join_date
              101,Ravi Kumar,Engineering,85000,2021-03-15
              102,Meera Nair,Engineering,92000,2020-07-01
              103,Zara Khan,Marketing,67000,2022-01-10
              104,Kabir Singh,Sales,58000,2019-11-20
              105,Ana Silva,Engineering,78000,2023-05-05
              106,John Lee,Sales,61000,2021-09-12
              107,Priya Rao,HR,54000,2020-02-28
              108,Tom Becker,Marketing,71000,2022-08-19
              109,Fatima Ali,Engineering,99000,2018-06-30
              110,Chen Wei,Sales,63000,2023-02-14
              111,Grace Osei,HR,57000,2021-12-01
              112,Diego Ruiz,Marketing,69000,2020-10-08
[/code]

This exact file is provided alongside the slides — save it as `employees.csv` in your project folder before continuing.

GenAI Coaching | Powered by AI Accelerator Hub 

24



## Reading a CSV & Exploring It

notebook cellCopy
[code] 
    import pandas as pd
    
              df = pd.read_csv("employees.csv")
              print(df.head())
              print(df.shape)
              print(df.columns.tolist())
[/code]

  * `pd.read_csv()` loads a CSV file straight into a DataFrame.
  * `.head()` previews the first 5 rows — always check this first.
  * `.shape` gives `(rows, columns)`; `.columns` lists every column name.

GenAI Coaching | Powered by AI Accelerator Hub 

25

Part 5 · Pandas · 5.4

## Selecting & Filtering Rows

notebook cellCopy
[code] 
    print(df["salary"])
              print(df[["name", "department"]])
    
              engineering = df[df["department"] == "Engineering"]
              print(engineering)
    
              high_earners = df[df["salary"] > 70000]
              print(high_earners[["name", "salary"]])
[/code]

  * `df["col"]` selects one column; `df[["a","b"]]` selects several.
  * `df[condition]` keeps only the rows where the condition is `True`.
  * Conditions can combine any column — this is the pandas version of Part 4's loop + if filtering from Session 1.

GenAI Coaching | Powered by AI Accelerator Hub 

26

Part 5 · Pandas · 5.5

## Adding Columns & Grouping

notebook cellCopy
[code] 
    df["bonus"] = df["salary"] * 0.10
              print(df.head(3))
    
              avg_salary = df.groupby("department")["salary"].mean()
              print(avg_salary)
    
              dept_counts = df["department"].value_counts()
              print(dept_counts)
[/code]

  * Assigning to a new column name creates it, computed for every row at once.
  * `.groupby(col)` splits rows into groups, ready to summarize.
  * `.value_counts()` is a fast way to count how many rows fall into each category.

GenAI Coaching | Powered by AI Accelerator Hub 

27

Part 5 · Pandas · 5.6

## Writing Output with to_csv()

notebook cellCopy
[code] 
    df.to_csv("employees_with_bonus.csv", index=False)
              print("Saved!")
[/code]

  * `to_csv()` writes a DataFrame back out to a real file on disk.
  * `index=False` skips writing pandas' internal row numbers into the file.
  * This is the exact pattern we'll wrap inside a function next.

GenAI Coaching | Powered by AI Accelerator Hub 

28

Part 6 · Files & Errors · 6.1

## A Function With File Arguments

notebook cellCopy
[code] 
    import pandas as pd
    
              def process_employee_data(input_path, output_path):
                  df = pd.read_csv(input_path)
                  df["bonus"] = df["salary"] * 0.10
                  df.to_csv(output_path, index=False)
                  print(f"Saved {len(df)} rows to {output_path}")
    
              process_employee_data("employees.csv", "employees_with_bonus.csv")
[/code]

  * `input_path` and `output_path` are just parameters — the function doesn't care what files you pass.
  * Everything from Part 5.3–5.6 is now packaged into one reusable call.
  * This works perfectly... as long as the input is exactly what we expect.

GenAI Coaching | Powered by AI Accelerator Hub 

29

Part 6 · Files & Errors · 6.2

## When Functions Error Out

Real files go missing, and real columns get renamed. Here's what happens with no protection at all.

Wrong filename

TerminalCopy
[code] 
    >>> process_employee_data(
                      "employees_typo.csv", "out.csv")
    
              Traceback (most recent call last):
                ...
              FileNotFoundError: [Errno 2] No such
              file or directory: 'employees_typo.csv'
[/code]

Missing column

TerminalCopy
[code] 
    >>> process_employee_data(
                      "employees_v2.csv", "out.csv")
    
              Traceback (most recent call last):
                ...
              KeyError: 'salary'
              # the file exists, but has no
              # 'salary' column
[/code]

Both crash the entire program — even if 11 other rows or files were perfectly fine.

GenAI Coaching | Powered by AI Accelerator Hub 

30



## Handling Errors with try / except

notebook cellCopy
[code] 
    def process_employee_data(input_path, output_path):
                  try:
                      df = pd.read_csv(input_path)
                  except FileNotFoundError:
                      print(f"Error: could not find file '{input_path}'")
                      return
    
                  try:
                      df["bonus"] = df["salary"] * 0.10
                  except KeyError:
                      print("Error: expected a 'salary' column")
                      return
    
                  df.to_csv(output_path, index=False)
                  print(f"Saved {len(df)} rows to {output_path}")
[/code]

  * `try:` wraps risky code; `except ErrorType:` catches only that specific failure.
  * Naming the exact exception (`FileNotFoundError`, `KeyError`) keeps you from hiding unrelated bugs.
  * `return` inside `except` stops that function call cleanly, without crashing the whole program.

GenAI Coaching | Powered by AI Accelerator Hub 

31

Part 6 · Files & Errors · 6.4

## Common Exception Types

Recognizing the exception name tells you exactly what to `except:` — before you even fix the bug.

Exception| Happens when...| Example  
---|---|---  
`FileNotFoundError`| A file path doesn't exist| `pd.read_csv("missing.csv")`  
`KeyError`| A dictionary key / column doesn't exist| `df["typo_column"]`  
`ValueError`| A value has the right type, wrong content| `int("abc")`  
`ZeroDivisionError`| Dividing by zero| `10 / 0`  
`TypeError`| An operation on the wrong type| `"5" + 5`  
  
GenAI Coaching | Powered by AI Accelerator Hub 

32

Part 7 · Real Scripts · 7.1

## The if __name__ == "__main__" Pattern

notebook cellCopy
[code] 
    def main():
                  print("Running as a script!")
    
              if __name__ == "__main__":
                  main()
[/code]

  * Every `.py` file has a hidden variable `__name__`.
  * It equals `"__main__"` only when the file is run directly — not when it's imported elsewhere.
  * This lets a file work both as a standalone script _and_ as a library other files can import safely.

GenAI Coaching | Powered by AI Accelerator Hub 

33

Part 7 · Real Scripts · 7.2

## Command-Line Arguments with argparse

notebook cellCopy
[code] 
    import argparse
    
              parser = argparse.ArgumentParser(
                  description="Add a bonus column to employee data"
              )
              parser.add_argument("input_file", help="Path to input CSV")
              parser.add_argument("output_file", help="Path to output CSV")
              args = parser.parse_args()
    
              print(args.input_file)
              print(args.output_file)
[/code]

  * `argparse` reads whatever the user typed after the filename in the terminal.
  * Each `add_argument()` becomes an attribute on `args` — `args.input_file`, `args.output_file`.

`argparse` reads real terminal arguments — run this from a `.py` file, not a Jupyter cell.

GenAI Coaching | Powered by AI Accelerator Hub 

34

Part 7 · Real Scripts · 7.3

## process_employees.py — The Function

process_employees.pyCopy
[code] 
    import argparse
              import pandas as pd
    
              def process_employee_data(input_path, output_path):
                  try:
                      df = pd.read_csv(input_path)
                  except FileNotFoundError:
                      print(f"Error: could not find '{input_path}'")
                      return
                  try:
                      df["bonus"] = df["salary"] * 0.10
                  except KeyError:
                      print("Error: expected a 'salary' column")
                      return
                  df.to_csv(output_path, index=False)
                  print(f"Saved {len(df)} rows to {output_path}")
[/code]

This is the exact function from Part 6.3 — pandas, file args, and try/except, all together. It's just a function so far — nothing runs yet without something calling it. That's what the `__main__` block below is for.

GenAI Coaching | Powered by AI Accelerator Hub 

35

Part 7 · Real Scripts · 7.4

## process_employees.py — The Main Block

process_employees.py (append below)Copy
[code] 
    if __name__ == "__main__":
                  parser = argparse.ArgumentParser()
                  parser.add_argument("input_file")
                  parser.add_argument("output_file")
                  args = parser.parse_args()
                  process_employee_data(args.input_file, args.output_file)
[/code]

Appended to the bottom of the same file, below the function from 7.3. This block only runs when the file is executed directly from the terminal. Together, the two blocks are the complete, real file — save it as `process_employees.py`.

GenAI Coaching | Powered by AI Accelerator Hub 

36



## Running It From the Terminal

No Jupyter, no copy-pasting cells — this is how the script is actually meant to be used.

TerminalCopy
[code] 
    python process_employees.py employees.csv employees_with_bonus.csv
              Saved 12 rows to employees_with_bonus.csv
    
              python process_employees.py missing.csv out.csv
              Error: could not find 'missing.csv'
    
              python process_employees.py --help
              usage: process_employees.py [-h] input_file output_file
    
              python process_employees.py employees.csv
              error: the following arguments are required: output_file
[/code]

GenAI Coaching | Powered by AI Accelerator Hub 

37

Recap

## Key Takeaways

1A venv is an isolated copy of Python's libraries — create, activate, and deactivate it per project.

2pip installs, updates, and inspects libraries — the same commands on Windows and Mac.

3The exact same code can succeed or fail depending only on which environment is active.

4requirements.txt records exact versions so any machine can recreate your environment.

5Libraries save you from reinventing well-tested code — NumPy is the standard for numerical arrays.

6pandas turns a CSV into a DataFrame you can filter, group, and transform like a spreadsheet, in code.

7Wrapping file input/output in a function makes it reusable across any file, not just one.

8try/except stops one bad file or bad column from crashing an entire program.

9if __name__ == "__main__" + argparse turns a script into a real command-line tool.

10Everything from this session — environments, libraries, data, and error handling — comes together in one real script.

GenAI Coaching | Powered by AI Accelerator Hub 

38

Corporate Tip — Deploy Ready Use this section as a standalone micro-module: pair the concept above with your team stand-up. Have each learner demo the step live — corporate cohorts retain 3× more when they teach back immediately. 

GenAI Coaching · Elite Practice Lab

## Elite Practice Lab — Fill the Output

python
[code]
    import numpy as np
    string_arr = np.array(['hello','world','numpy'])
    print(np.strings.str_len(string_arr))
[/code]

What prints in `venv_numpy_232`? Type exact array:

Check

python
[code]
    import pandas as pd
    df = pd.read_csv("employees.csv")
    df["bonus"] = df["salary"] * 0.10
    print(df.loc[0, "bonus"])
[/code]

For Ravi Kumar (salary 85000), what prints? Type exact number:

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
> **Which macOS command creates a venv namedvenv_numpy_126?**
>
> - [ ] python3 -m venv venv_numpy_126
> - [ ] pip install
> - [ ] venv create
> - [ ] source venv
>
> <details><summary>✅ Reveal Answers — Quick Check</summary>
>
> - **Which macOS command creates a venv namedvenv_numpy_126?** → *python3 -m venv venv_numpy_126* — 
>
> </details>


> [!NOTE]
> **Quick Check · +25 XP** 🎯
>
> **What error occurs runningnp.strings.str_lenon NumPy 1.26?**
>
> - [ ] AttributeError
> - [ ] FileNotFoundError
> - [ ] [5 5 5]
> - [ ] ImportError
>
> <details><summary>✅ Reveal Answers — Quick Check</summary>
>
> - **What error occurs runningnp.strings.str_lenon NumPy 1.26?** → *AttributeError* — 
>
> </details>


> [!NOTE]
> **Quick Check · +25 XP** 🎯
>
> **Which file records exact versions viapip freeze > requirements.txt?**
>
> - [ ] requirements.txt
> - [ ] employees.csv
> - [ ] test_numpy.py
> - [ ] venv folder
>
> <details><summary>✅ Reveal Answers — Quick Check</summary>
>
> - **Which file records exact versions viapip freeze > requirements.txt?** → *requirements.txt* — 
>
> </details>


> [!NOTE]
> **Quick Check · +25 XP** 🎯
>
> **Forprices=np.array([100,200,300]), what isprices*1.1?**
>
> - [ ] [110. 220. 330.]
> - [ ] [110,220,330]
> - [ ] Error
> - [ ] [100,200,300]
>
> <details><summary>✅ Reveal Answers — Quick Check</summary>
>
> - **Forprices=np.array([100,200,300]), what isprices*1.1?** → *[110. 220. 330.]* — 
>
> </details>


> [!NOTE]
> **Quick Check · +25 XP** 🎯
>
> **What doespd.read_csv("employees.csv").shapereturn?**
>
> - [ ] (12, 5)
> - [ ] (5, 12)
> - [ ] (12,)
> - [ ] Error
>
> <details><summary>✅ Reveal Answers — Quick Check</summary>
>
> - **What doespd.read_csv("employees.csv").shapereturn?** → *(12, 5)* — 
>
> </details>


> [!NOTE]
> **Quick Check · +25 XP** 🎯
>
> **What doesif __name__=="__main__":guard do?**
>
> - [ ] Runs only when executed directly
> - [ ] Always runs
> - [ ] Never runs
> - [ ] Handles errors
>
> <details><summary>✅ Reveal Answers — Quick Check</summary>
>
> - **What doesif __name__=="__main__":guard do?** → *Runs only when executed directly* — 
>
> </details>


> [!NOTE]
> **Quick Check · +25 XP** 🎯
>

<div align="center">

<img src="assets/ai-accelerator-hub-logo.svg" width="180" alt="AI Accelerator Hub" />

*GenAI Learning · Powered by AI Accelerator Hub* — *Corporate Training • Production-Grade*

> *Source:* `BaseCamp2-PythonRefresher/2_python.html` → `BaseCamp2-PythonRefresher/2_python.md` | *Original HTML preserved* | *Gold `#C9A86A` Black `#0A0A0A` White `#FFFFFF`*


> **Continue your elite future** — Next up: *2 Python Slides*  
> [← Previous](2_python_refresher.md) · [Continue →](2_python_slides.md)

</div>
