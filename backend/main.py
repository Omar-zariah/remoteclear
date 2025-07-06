from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Employee(BaseModel):
    api_key: str
    employee_hash: str

fake_db = {}

@app.post("/register-employee")
def register_employee(data: Employee):
    fake_db[data.employee_hash] = data.api_key
    return {"status": "registered"}

@app.post("/check-employee")
def check_employee(data: Employee):
    employed = data.employee_hash in fake_db
    return {"employed_elsewhere": employed}

@app.post("/end-employee")
def end_employee(data: Employee):
    if data.employee_hash in fake_db:
        del fake_db[data.employee_hash]
        return {"status": "employment ended"}
    return {"status": "not found"}