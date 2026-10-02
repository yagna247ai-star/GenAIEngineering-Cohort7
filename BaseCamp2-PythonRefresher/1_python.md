# Python Fundamentals — Slides | GenAI Coaching — AI Accelerator Hub

> **Source:** `BaseCamp2-PythonRefresher/1_python.html` → `BaseCamp2-PythonRefresher/1_python.md`  
> **Brand:** GenAI Coaching × AI Accelerator Hub | White / Black / Gold Veranda `#0A0A0A` `#C9A86A` `#FFFFFF`  
> **Deployment:** Corporate training — production-grade Markdown (converted from HTML, content verbatim)  
> **Original HTML preserved alongside Markdown**

---

Skip to content

![](assets/genai-coaching-emblem.svg) GenAI Journey [← Prev](<1_python_refresher.html>) [Next →](<1_python_slides.html>)

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg)

GEN AI  
COACHING

Unlock Your Elite Future · Powered by AI Accelerator Hub

XP **0**

#### Base Camp 2 · Week 1 · Session 1

  * Title
  * Session Agenda
  * Learning Objectives
  * Part 1 · Getting Started
  * 1.1 Variables
  * 1.2 Arithmetic Operators
  * 1.3 Built-in Functions
  * Part 2 · Strings
  * 2.1 Creating and Printing Strings
  * 2.2 Indexing and Slicing
  * 2.3 Concatenation and Repetition
  * 2.4 Useful String Methods
  * 2.5 f-strings (Formatted Strings)
  * 2.6 Mini Practice — No Loops Needed Yet
  * Part 3 · Data Structures
  * 3.1 Lists
  * 3.2 Modifying Lists
  * 3.3 Tuples
  * 3.4 Dictionaries
  * 3.5 Sets
  * 3.6 Which Data Structure Do I Use?
  * 3.7 Composite Data Structures
  * Part 4 · Control Flow
  * 4.1 if / elif / else
  * 4.2 for Loops
  * 4.3 while Loops
  * 4.4 Filtering a List
  * 4.5 Counting With a Loop
  * 4.6 Looping Over a Dictionary
  * 4.7 Nested Loops
  * 4.8 List Comprehensions
  * 4.9 Dictionary Comprehensions
  * Part 5 · Functions
  * 5.1 Defining a Function
  * 5.2 Parameters and Return Values
  * 5.3 Default Parameter Values
  * 5.4 Turning Loops Into Functions
  * 5.5 Reusing Functions on New Data
  * 5.6 Before Next Session
  * Recap

![GenAI Coaching](assets/genai-coaching-emblem.svg) Slide 1 / 35 · use ← → or the sidebar

‹ Prev Next ›

![](assets/genai-coaching-emblem.svg) Base Camp 2 · Week 1 · Session 1

# Python Fundamentals

Variables & built-ins · strings · data structures · branching, looping & comprehensions · functions. Everything runs in plain Python inside Jupyter — no installs, no imports, no virtual environments. Every snippet below is copy-paste ready.

⏱ 3 hours, hands-on No installs required

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

01

Corporate Tip — Deploy Ready Use this section as a standalone micro-module: pair the concept above with your team stand-up. Have each learner demo the step live — corporate cohorts retain 3× more when they teach back immediately. 

Session Agenda

## How the Next 3 Hours Break Down

0:00–0:10Welcome & Why Fundamentals Matter

0:10–0:35Part 1 — Variables, Arithmetic & Built-in Functions

0:35–1:05Part 2 — String Manipulation

1:05–1:30Part 3 — Data Structures (incl. Composite Structures)

1:30–1:40Break

1:40–2:25Part 4 — Branching, Looping & Comprehensions

2:25–2:55Part 5 — Introduce Functions

2:55–3:00Wrap-up & Take-Home Exercise

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

02

Corporate Tip — Deploy Ready Use this section as a standalone micro-module: pair the concept above with your team stand-up. Have each learner demo the step live — corporate cohorts retain 3× more when they teach back immediately. 

Learning Objectives

## By the End of This Session, You Will Be Able To…

By the end of this session, you will be able to:

1Use variables, arithmetic operators, and Python's built-in functions.

2Manipulate strings using indexing, slicing, and built-in methods.

3Create and combine data structures — including composite structures like lists of dictionaries.

4Use branching, looping, and comprehensions to filter, count, and transform data.

5Write your own reusable functions, and refactor repeated loop logic into them.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

03

Corporate Tip — Deploy Ready Use this section as a standalone micro-module: pair the concept above with your team stand-up. Have each learner demo the step live — corporate cohorts retain 3× more when they teach back immediately. 

Part 1 · Getting Started · 1.1

## Variables

A variable is just a name that points to a value.

notebook cellCopy
[code] 
    name = "Alex"
              age = 27
              is_student = True
              print(name)
              print(age)
              print(is_student)
    
              age = 28
              print(age)
[/code]

  * `=` assigns a value; Python figures out the type automatically — no need to declare `int` or `str` up front.
  * Reassigning a variable overwrites whatever it held before — `age` is simply pointed at a new value.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

04

Part 1 · Getting Started · 1.2

## Arithmetic Operators

notebook cellCopy
[code] 
    a = 15
              b = 4
              print(a + b)
              print(a - b)
              print(a * b)
              print(a / b)
              print(a // b)
              print(a % b)
              print(a ** 2)
              print((a + b) * 2)
[/code]

Operator| Meaning  
---|---  
`+ - *`| Add, subtract, multiply  
`/`| Division — always gives a decimal (float)  
`//`| Floor division — whole-number result  
`%`| Modulo — the remainder left over after dividing  
`**`| Exponent (power)  
  
Python follows the normal order of operations — use `( )` to control it, exactly as in a calculator.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

05

Part 1 · Getting Started · 1.3

## Built-in Functions

notebook cellCopy
[code] 
    price = 499.999
              print(type(price))
              print(round(price, 2))
              print(int(price))
              print(str(price))
    
              scores = [88, 92, 79, 95, 66]
              print(min(scores))
              print(max(scores))
              print(sum(scores))
              print(len(scores))
[/code]

  * `type()` tells you what kind of value something is.
  * `round()`, `int()`, `float()`, `str()` convert or adjust values between types.
  * `min()`, `max()`, `sum()`, `len()` work directly on lists and other collections — no manual loop needed.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

06

![](assets/genai-coaching-emblem.svg) GenAI Coaching · Quick Check

## Quick Check

Given `age = 27` then `age = 28`, what does `print(age)` output?

28 27 Error 27 28

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

Quiz

Part 2 · Strings · 2.1

## Creating and Printing Strings

notebook cellCopy
[code] 
    message = "Hello, AI Accelerator Hub!"
              print(message)
              print(len(message))
[/code]

  * A string is text written inside quotes — single or double, Python treats them the same.
  * `len()` returns how many characters it contains.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

07

Part 2 · Strings · 2.2

## Indexing and Slicing

notebook cellCopy
[code] 
    course = "AI Engineering"
              first_letter = course[0]
              last_letter = course[-1]
              first_three = course[0:3]
              last_three = course[-3:]
    
              print(first_letter)
              print(last_letter)
              print(first_three)
              print(last_three)
[/code]

  * Indexing starts at `0`; `-1` means the last character.
  * A slice `[a:b]` grabs characters from `a` up to (not including) `b`.
  * Leaving out a number means "from the start" or "to the end."

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

08

Part 2 · Strings · 2.3

## Concatenation and Repetition

notebook cellCopy
[code] 
    first_name = "Ada"
              last_name = "Lovelace"
              full_name = first_name + " " + last_name
              print(full_name)
    
              cheer = "AI! " * 3
              print(cheer)
[/code]

  * `+` joins strings together — this is called concatenation.
  * `*` repeats a string that many times.
  * Both create a brand-new string; the originals stay unchanged (strings are immutable in Python).

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

09

Part 2 · Strings · 2.4

## Useful String Methods

notebook cellCopy
[code] 
    text = "   Data Science with Python   "
    
              print(text.upper())
              print(text.lower())
              print(text.strip())
              print(text.strip().replace("Python", "AI"))
    
              words = text.strip().split(" ")
              print(words)
    
              rejoined = "-".join(words)
              print(rejoined)
    
              print(text.find("Python"))
              print("Python" in text)
[/code]

  * `.strip()` removes leading/trailing spaces; `.replace()` swaps text.
  * `.split()` breaks text into a list of words; `.join()` reverses that, stitching a list back into one string.
  * `.find()` locates a substring's position; `in` just checks whether it exists at all.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

10

Part 2 · Strings · 2.5

## f-strings (Formatted Strings)

notebook cellCopy
[code] 
    student = "Maria"
              score = 92.5
    
              print(f"{student} scored {score} points in the quiz.")
              print(f"{student} scored {score:.0f} points in the quiz.")
[/code]

  * An f-string starts with `f` right before the opening quote.
  * Anything inside `{ }` is evaluated and inserted automatically — variables, expressions, even function calls.
  * `:.0f` formats a number rounded to 0 decimal places.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

11

Part 2 · Strings · 2.6

## Mini Practice — No Loops Needed Yet

notebook cellCopy
[code] 
    word = "level"
              is_palindrome = word == word[::-1]
              print(f"Is '{word}' a palindrome? {is_palindrome}")
    
              sentence = "The Quick Brown Fox"
              vowel_count = (
                  sentence.lower().count("a") +
                  sentence.lower().count("e") +
                  sentence.lower().count("i") +
                  sentence.lower().count("o") +
                  sentence.lower().count("u")
              )
              print(f"Vowel count: {vowel_count}")
[/code]

  * `word[::-1]` reverses a string using slicing — no loop required.
  * Comparing a string to its own reverse is a one-line palindrome check.
  * `.count()` tallies how many times a character appears.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

12

![](assets/genai-coaching-emblem.svg) GenAI Coaching · Quick Check

## Quick Check

With `a=15, b=4`, what is `a // b`?

3 3.75 4 3.0

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

Quiz

Part 3 · Data Structures · 3.1

## Lists

notebook cellCopy
[code] 
    fruits = ["apple", "banana", "cherry", "date"]
              print(fruits)
              print(fruits[0])
              print(fruits[-1])
              print(fruits[1:3])
              print(len(fruits))
[/code]

  * A list is an ordered, changeable collection written in `[ ]`.
  * Indexing and slicing work exactly like they do on strings.
  * A list can hold any number of items, of any type — even a mix of types.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

13

Part 3 · Data Structures · 3.2

## Modifying Lists

notebook cellCopy
[code] 
    fruits.append("elderberry")
              print(fruits)
    
              fruits.insert(1, "blueberry")
              print(fruits)
    
              fruits.remove("banana")
              print(fruits)
    
              last_fruit = fruits.pop()
              print(last_fruit, fruits)
    
              numbers = [5, 3, 9, 1]
              numbers.sort()
              print(numbers)
[/code]

  * `.append()` adds to the end; `.insert()` adds at a chosen position.
  * `.remove()` deletes by value; `.pop()` removes and returns the last item.
  * `.sort()` reorders the list in place, permanently — it doesn't return a new list.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

14

Part 3 · Data Structures · 3.3

## Tuples

notebook cellCopy
[code] 
    coordinates = (10, 20)
              print(coordinates)
              print(coordinates[0])
    
              x, y = coordinates
              print(x, y)
    
              # coordinates[0] = 99   # this would raise an error —
              # tuples don't allow item assignment once created
[/code]

  * A tuple uses `( )` and looks like a list at first glance.
  * Tuples are immutable — they can never be changed after creation.
  * You can "unpack" a tuple straight into variables: `x, y = coordinates`.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

15

Part 3 · Data Structures · 3.4

## Dictionaries

notebook cellCopy
[code] 
    student_ages = {"Ravi": 25, "Meera": 30, "Zara": 22}
              print(student_ages)
              print(student_ages["Ravi"])
    
              student_ages["Kabir"] = 28
              student_ages["Ravi"] = 26
              print(student_ages)
    
              print(list(student_ages.keys()))
              print(list(student_ages.values()))
              print(list(student_ages.items()))
[/code]

  * A dictionary stores `key: value` pairs inside `{ }`.
  * Read with `dict[key]`; add or update with `dict[key] = value` — same syntax does both.
  * `.keys()`, `.values()`, `.items()` give you each part separately.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

16

Part 3 · Data Structures · 3.5

## Sets

notebook cellCopy
[code] 
    unique_topics = {"python", "sql", "python", "statistics", "sql"}
              print(unique_topics)
    
              unique_topics.add("machine learning")
              print(unique_topics)
    
              print("sql" in unique_topics)
[/code]

  * A set uses `{ }` but automatically keeps only unique values.
  * Adding a duplicate is silently ignored — no error, no change.
  * `in` checks membership in a set extremely efficiently, faster than searching a list.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

17

Part 3 · Data Structures · 3.6

## Which Data Structure Do I Use?

Structure| Ordered?| Changeable?| Duplicates?| Use it for...  
---|---|---|---|---  
List `[ ]`| Yes| Yes| Yes| A sequence you'll add to or reorder  
Tuple `( )`| Yes| No| Yes| Fixed values that shouldn't change  
Dictionary `{k:v}`| Yes*| Yes| Keys unique| Looking things up by name / id  
Set `{ }`| No| Yes| No| Removing duplicates, membership checks  
  
* Dictionaries preserve insertion order in modern Python (3.7+).

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

18

![](assets/genai-coaching-emblem.svg) GenAI Coaching · Quick Check

## Quick Check

For `course="AI Engineering"`, what does `course[0]` return?

"A" "AI" "g" Error

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

Quiz

Part 3 · Data Structures · 3.7

## Composite Data Structures

notebook cellCopy
[code] 
    students = [
                  {"name": "Ravi", "score": 88},
                  {"name": "Meera", "score": 92},
                  {"name": "Zara", "score": 79},
              ]
              print(students[0])
              print(students[0]["name"])
              print(students[1]["score"])
    
              for student in students:
                  print(student["name"], student["score"])
    
              teams = {"red": ["Ravi", "Meera"], "blue": ["Zara", "Kabir"]}
              print(teams["red"])
              print(teams["blue"][0])
[/code]

  * A list of dictionaries is one of the most common real-world data shapes — think rows in a database or records from an API.
  * Combine indexing (`[0]`) and key lookup (`["name"]`) to reach nested values.
  * Structures nest in any combination — lists of dicts, dicts of lists, and deeper.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

19

Part 4 · Control Flow · 4.1

## if / elif / else

notebook cellCopy
[code] 
    temperature = 28
    
              if temperature > 30:
                  print("It's hot outside.")
              elif temperature > 20:
                  print("It's a pleasant day.")
              else:
                  print("It's cold outside.")
[/code]

  * Conditions are checked in order, top to bottom.
  * The first `True` branch runs; every other branch is skipped.
  * `else` is optional and catches everything not already matched.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

20

Part 4 · Control Flow · 4.2

## for Loops

notebook cellCopy
[code] 
    for fruit in fruits:
                  print(fruit)
    
              for letter in "AI":
                  print(letter)
    
              for i in range(5):
                  print(i)
[/code]

  * `for` works directly on lists, strings, or `range()` of numbers.
  * `range(5)` produces 0, 1, 2, 3, 4 — five numbers starting at 0.
  * The loop variable takes on each value in the sequence, in turn.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

21

Part 4 · Control Flow · 4.3

## while Loops

notebook cellCopy
[code] 
    count = 0
              while count < 3:
                  print(f"Count is {count}")
                  count = count + 1
[/code]

  * `while` repeats for as long as its condition stays `True`.
  * Something inside the loop must eventually make it `False`, or it never stops.
  * Useful when you don't know in advance how many repeats you need.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

22

Part 4 · Control Flow · 4.4

## Filtering a List

notebook cellCopy
[code] 
    numbers2 = [12, 7, 18, 3, 24, 9, 30]
    
              even_numbers = []
              for n in numbers2:
                  if n % 2 == 0:
                      even_numbers.append(n)
    
              print(even_numbers)
[/code]

  * Start with an empty list to collect the results.
  * Loop + if is the core "filter" pattern used everywhere in programming.
  * `n % 2 == 0` tests whether a number is even (no remainder).

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

23

Part 4 · Control Flow · 4.5

## Counting With a Loop

notebook cellCopy
[code] 
    sentence2 = "The Quick Brown Fox Jumps"
              vowels = "aeiouAEIOU"
    
              vowel_total = 0
              for ch in sentence2:
                  if ch in vowels:
                      vowel_total = vowel_total + 1
    
              print(f"Total vowels: {vowel_total}")
[/code]

  * Same result as Part 2.6 — built manually this time, with a loop instead of chained `.count()` calls.
  * A running total variable is updated once per matching character.
  * Loops let you apply more complex conditions than built-in methods can handle alone.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

24

![](assets/genai-coaching-emblem.svg) GenAI Coaching · Quick Check

## Quick Check

What does `fruits[1:3]` return?

["banana","cherry"] ["apple","banana"] ["cherry","date"] ["banana"]

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

Quiz

Part 4 · Control Flow · 4.6

## Looping Over a Dictionary

notebook cellCopy
[code] 
    for name, age in student_ages.items():
                  print(f"{name} is {age} years old")
    
              adults_only = {}
              for name, age in student_ages.items():
                  if age >= 25:
                      adults_only[name] = age
    
              print(adults_only)
[/code]

  * `.items()` gives you both the key and the value on each pass.
  * You can build a brand-new filtered dictionary the same way as a list.
  * This pattern scales to any filtering condition on structured data.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

25

Part 4 · Control Flow · 4.7

## Nested Loops

notebook cellCopy
[code] 
    for i in range(1, 4):
                  for j in range(1, 4):
                      print(f"{i} x {j} = {i*j}")
[/code]

  * A loop can contain another loop — the inner one runs fully on each step of the outer one.
  * Great for grids, tables, and comparing every pair of items.
  * 3 outer steps × 3 inner steps = 9 total print statements here.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

26

Part 4 · Control Flow · 4.8

## List Comprehensions

notebook cellCopy
[code] 
    even_numbers_lc = [n for n in numbers2 if n % 2 == 0]
              print(even_numbers_lc)
    
              doubled = [n * 2 for n in numbers2]
              print(doubled)
[/code]

  * A list comprehension packs a for-loop + optional if into one line.
  * `[expression for item in iterable if condition]` mirrors Part 4.4 exactly.
  * Great for simple transforms — for complex logic, a regular loop reads clearer.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

27

Part 4 · Control Flow · 4.9

## Dictionary Comprehensions

notebook cellCopy
[code] 
    adults_only_dc = {name: age for name, age in student_ages.items() if age >= 25}
              print(adults_only_dc)
    
              birthday = {name: age + 1 for name, age in student_ages.items()}
              print(birthday)
[/code]

  * Same `{key: value for ...}` shape as a list comprehension, with a colon added.
  * `adults_only_dc` reproduces Part 4.6's loop result in a single line.
  * Comprehensions can transform values too — not just filter them.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

28

Part 5 · Functions · 5.1

## Defining a Function

notebook cellCopy
[code] 
    def greet():
                  print("Welcome to the AI Engineering Fellowship!")
    
              greet()
[/code]

  * `def` starts a function definition, followed by a name and `()`.
  * Code inside only runs when the function is actually called.
  * Calling `greet()` by name executes everything indented beneath it.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

29

Part 5 · Functions · 5.2

## Parameters and Return Values

notebook cellCopy
[code] 
    def is_even(n):
                  return n % 2 == 0
    
              print(is_even(4))
              print(is_even(7))
[/code]

  * Parameters — like `n` — are inputs the caller provides.
  * `return` sends a value back; it doesn't print anything by itself.
  * The returned value can be stored, printed, or reused elsewhere.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

30

![](assets/genai-coaching-emblem.svg) GenAI Coaching · Quick Check

## Quick Check

What does `is_even(4)` return?

True False 4 None

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

Quiz

Part 5 · Functions · 5.3

## Default Parameter Values

notebook cellCopy
[code] 
    def greet_student(name, role="student"):
                  print(f"Hello {name}, welcome as a {role}!")
    
              greet_student("Ravi")
              greet_student("Meera", role="mentor")
[/code]

  * A default value is used only if the caller leaves that argument out.
  * `role="mentor"` overrides the default for that one specific call.
  * Defaults make a function flexible without extra required inputs.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

31

Part 5 · Functions · 5.4

## Turning Loops Into Functions

notebook cellCopy
[code] 
    def filter_even(numbers):
                  result = []
                  for n in numbers:
                      if n % 2 == 0:
                          result.append(n)
                  return result
    
              def count_vowels(word):
                  vowels_local = "aeiouAEIOU"
                  total = 0
                  for ch in word:
                      if ch in vowels_local:
                          total = total + 1
                  return total
    
              print(filter_even([1, 2, 3, 4, 5, 6, 7, 8]))
              print(count_vowels("AI Engineering Fellowship"))
[/code]

  * Same logic as Part 4.4 and 4.5, now wrapped in reusable functions.
  * `numbers` and `word` are placeholders — any list or string can be passed in.
  * Functions turn one-off code into a tool you can call again and again.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

32

Part 5 · Functions · 5.5

## Reusing Functions on New Data

notebook cellCopy
[code] 
    print(filter_even(numbers2))
              print(count_vowels("Data Structures"))
[/code]

  * No new loop was written — the same function just runs on different data.
  * This is the core benefit of functions: write the logic once, reuse it everywhere.
  * Compare this to copy-pasting the loop every time you needed it.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

33

Part 5 · Functions · 5.6

## Before Next Session

Try it yourself

Write `reverse_words(sentence)` — a function that takes a sentence and returns it with the order of the _words_ reversed (not the letters).

exampleCopy
[code] 
    reverse_words("AI is the future")  ->  "future the is AI"
[/code]

**Hint:** `.split()` turns a sentence into a list of words, slicing (`my_list[::-1]`) reverses a list, and `" ".join(list)` turns a list back into one string.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

34

Recap

## Key Takeaways

1Variables, arithmetic, and built-in functions are the basic toolkit everything else builds on.

2Strings and lists both support indexing and slicing — the same mental model works on both.

3Real-world data is often composite — lists of dictionaries, dicts of lists — and that's normal.

4Loop + if is the pattern behind filtering and counting; comprehensions write it in one line.

5Functions turn one-off logic into a reusable tool — write it once, call it anywhere.

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub 

35

Corporate Tip — Deploy Ready Use this section as a standalone micro-module: pair the concept above with your team stand-up. Have each learner demo the step live — corporate cohorts retain 3× more when they teach back immediately. 

![](assets/genai-coaching-emblem.svg) GenAI Coaching · Elite Practice Lab

## Elite Practice Lab — Fill the Output

python
[code]
    student = "Maria"
    score = 92.5
    print(f"{student} scored {score:.0f} points in the quiz.")
[/code]

What prints? Type exact output:

Check

python
[code]
    fruits = ["apple", "banana", "cherry", "date"]
    print(fruits[1:3])
[/code]

What list prints? Type exact literal:

Check

![GenAI Coaching emblem](assets/genai-coaching-emblem.svg) GenAI Coaching | ![AI Accelerator Hub](assets/ai-accelerator-hub-logo.svg) Powered by AI Accelerator Hub

Lab

#### Continue your elite future

Next up: 1 Python Slides

[← Previous](<1_python_refresher.html>) [Continue →](<1_python_slides.html>)
