import frappe
import time

def sample_job():
    print("=== BACKGROUND JOB STARTED ===")

    for i in range(1, 6):
        print(f"Processing step {i}")
        time.sleep(1)

    print("=== BACKGROUND JOB COMPLETED ===")