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


def main() -> None:
    uvicorn.run(
        "main:app",       # "module_name:app_variable"; must match this file's name
        host="0.0.0.0",
        port=8000,
        reload=True,      # auto-reload on code changes (dev only)
    )


if __name__ == "__main__":
    main()
