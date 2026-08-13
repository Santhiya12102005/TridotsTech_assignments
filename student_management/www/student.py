# student_management/www/student.py
import frappe

def get_context(context):
    student_id = frappe.form_dict.name
    context.student = frappe.get_doc("Student", student_id)
    return context