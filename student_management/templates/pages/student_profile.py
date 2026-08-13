import frappe

def get_context(context):
    # Get the student name from the URL
    student_name = frappe.form_dict.name

    # Fetch the Student document
    student = frappe.get_doc("Student", student_name)

    # Pass values to HTML
    context.student = student