# Basecamp3 FullStack Learnings

## 1. `pip` command was not available

### Mistake

The shell did not have a `pip` executable available.

### Evidence

```text
pip: command not found
```

### Discovery commands

```bash
command -v python
command -v python3
command -v pip
command -v pip3
python3 --version
python3 -m pip --version
```

### Result

```text
/usr/bin/python3
/usr/bin/pip3
Python 3.9.6
```

### Lesson

macOS was providing `python3` and `pip3`, not `python` and `pip`. More importantly, this project should use its `uv` environment instead of the system Python.

---

## 2. The system Python was too old

### Mistake

The system `pip3` used Python 3.9.6, but the project requires Python 3.11 or newer.

### Project requirement

The `pyproject.toml` file contains:

```toml
requires-python = ">=3.11"
```

### Failed command

```bash
pip3 install -e .
```

### Error

```text
ERROR: Package 'basecamp3-fullstack' requires a different Python: 3.9.6 not in '>=3.11'
```

### Lesson

Do not use the system `pip3` for this project. Use `uv`, which manages the project Python version and environment.

---

## 3. Python 3.12 was installed and selected

### Commands run

```bash
brew install python@3.12
brew list --versions python@3.12
brew info python@3.12
uv python install 3.12
```

### Result

```text
python@3.12 3.12.14
Installed Python 3.12.14
```

Homebrew's Python executable was not reliably available through the expected path, so the project used the `uv`-managed Python 3.12 runtime instead.

---

## 4. The project environment was initially created with Python 3.11

### Command run

```bash
uv sync
```

### Result

The first environment used Python 3.11.15, which met the project requirement but was not the requested Python 3.12 version.

### Correction

```bash
uv venv --python 3.12 --clear
uv sync
uv run python --version
```

### Result

```text
Python 3.12.14
```

### Lesson

Use `uv venv --python 3.12 --clear` when an existing environment must be recreated with a specific Python version.

---

## 5. FastAPI CLI dependencies were missing

### Mistake

The project declared only the base FastAPI package:

```toml
dependencies = [
    "fastapi>=0.141.1",
]
```

### Failed command

```bash
uv run python -m fastapi --help
```

### Error

```text
To use the fastapi command, please install "fastapi[standard]"
```

### Correction

The dependency was changed to:

```toml
dependencies = [
    "fastapi[standard]>=0.141.1",
]
```

Then dependencies were installed again:

```bash
uv sync
uv run python -m fastapi --help
```

### Result

The FastAPI CLI displayed its help and became available.

---

## 6. `pip3 install -e .` used the wrong environment

### Mistake

The shell prompt showed an environment name, but `pip3` still resolved to the system installation:

```text
/usr/bin/pip3
pip ... (python 3.9)
```

The shell prompt alone is not proof that the correct Python interpreter is active.

### Correct command

```bash
uv pip install -e .
```

### Verification

```bash
uv run python -c "import basecamp3_fullstack; print('editable install ok')"
```

### Result

```text
editable install ok
```

### Lesson

Use `uv pip` or `uv run` so commands definitely target the project's Python 3.12 environment.

---

## 7. Commands were accidentally joined together

### Mistake

Two commands were entered as one line:

```text
uv run python -m fastapi --help/usr/local/bin/python3.12 --version
```

### Correction

Run each command separately:

```bash
uv run python -m fastapi --help
/usr/local/bin/python3.12 --version
```

Use a newline or `&&` between commands.

---

## 8. Commands ran from the wrong directory

### Mistake

Some commands were run from the workspace root instead of the project directory. This caused:

```text
error: No `pyproject.toml` found in current directory or any parent directory
```

There was also a capitalization error using `BaseCamp3-FullStack` instead of the actual directory name `Basecamp3-FullStack`.

### Correct project path

```text
/Users/apple/Documents/Outskill/GenAIEngineering-Cohort7/Basecamp3-FullStack
```

### Reliable command

When the terminal may start in another directory, specify the project explicitly:

```bash
uv --project /Users/apple/Documents/Outskill/GenAIEngineering-Cohort7/Basecamp3-FullStack run python --version
```

---

## 9. Starting the FastAPI server

### App location

```text
src/basecamp3_fullstack/code/calculator_api/main.py
```

The FastAPI object is named `app`.

### Commands attempted

```bash
uv run fastapi dev src/basecamp3_fullstack/code/calculator_api/main.py --host 127.0.0.1 --port 8000
```

This failed when run from the wrong directory because the `fastapi` executable could not be found.

```bash
uv run python -m uvicorn basecamp3_fullstack.code.calculator_api.main:app --host 127.0.0.1 --port 8000
```

This also failed when run from the wrong project context because `uvicorn` was not found in that environment.

### Reliable command

```bash
uv --project /Users/apple/Documents/Outskill/GenAIEngineering-Cohort7/Basecamp3-FullStack run \
python -m uvicorn basecamp3_fullstack.code.calculator_api.main:app \
--host 127.0.0.1 --port 8000
```

### Port issue

A later start reported:

```text
ERROR: [Errno 48] error while attempting to bind on address ('127.0.0.1', 8000): address already in use
```

This was not an application failure. The API was already running on port 8000.

### Verification command

```bash
curl -i --max-time 3 http://127.0.0.1:8000/
```

### Successful response

```text
HTTP/1.1 200 OK
{"message":"Calculator API is running"}
```

### Useful URLs

```text
http://127.0.0.1:8000/
http://127.0.0.1:8000/docs
http://127.0.0.1:8000/add?a=2&b=3
http://127.0.0.1:8000/subtract?a=5&b=2
http://127.0.0.1:8000/multiply?a=4&b=3
http://127.0.0.1:8000/divide?a=10&b=2
```

---

## Recommended workflow

From any directory, use the explicit project path:

```bash
cd /Users/apple/Documents/Outskill/GenAIEngineering-Cohort7/Basecamp3-FullStack
uv sync
uv run python --version
uv pip install -e .
uv --project /Users/apple/Documents/Outskill/GenAIEngineering-Cohort7/Basecamp3-FullStack run \
python -m uvicorn basecamp3_fullstack.code.calculator_api.main:app \
--host 127.0.0.1 --port 8000
```

Use `Ctrl+C` in the terminal running the server to stop it.

If the server is running in another terminal, find the listener first:

```bash
lsof -nP -iTCP:8000 -sTCP:LISTEN
```

Then stop only the reported process using its PID:

```bash
kill <PID>
```

Verify that the port is free:

```bash
lsof -nP -iTCP:8000 -sTCP:LISTEN
```

If the command returns no output, the server has stopped. Avoid killing unrelated processes; identify the listener before using `kill`.
