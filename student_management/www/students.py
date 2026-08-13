# student_management/www/students.py

import frappe

def get_context(context):
    # context.favicon = "/assets/student_management/image/usd-circle.png"
    context.students = frappe.get_list(
        "Student",
        fields=["name1", "dob", "age"]
    )
    context.total = len(context.students)
    return context

