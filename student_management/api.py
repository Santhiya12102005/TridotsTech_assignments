import frappe
from frappe.query_builder import DocType
from frappe.utils import cint, flt, cstr, fmt_money, today, now
from frappe.utils import pretty_date, add_to_date, now


def custom_logic(doc, method):
    frappe.msgprint("Hook executed!")


# @frappe.whitelist()
# def update_employee_roles():
#     Employee = DocType("Employee")
#     WorkingRole = DocType("Working Role")

#     # Query Builder Join Employee and Working Role doctypes
#     employees = (
#         frappe.qb.from_(Employee)
#         .join(WorkingRole)
#         .on(Employee.working_role == WorkingRole.name)
#         .select(
#             Employee.name,
#             Employee.employee_name,
#             Employee.email,
#             Employee.working_role,
#             WorkingRole.role_name
#         )
#         .limit(5)
#         .run(as_dict=True)
#     )

#     # Document API for updation
#     if employees:
#         emp = frappe.get_doc("Employee", employees[0]["name"])
#         emp.employee_name = "Updated Employee"
#         emp.email = "updated@example.com"
#         emp.save()       

#     # Database API bulk update
#     for emp in employees:
#         frappe.db.set_value(
#             "Employee",
#             emp.name,
#             "email",
#             emp.email
#         )
#         frappe.db.commit()
#     return employees

# @frappe.whitelist()
# def test_utils():
#     p_date = add_to_date(now(),hours=-2)

#     return {
#         "int": cint("10"),
#         "float": flt("12.5"),
#         "string": cstr(123),
#         "money": fmt_money(1500, currency="INR"),
#         "today": today(),
#         "now": now(),
#         "User Exists": frappe.db.exists("User","Administrator"),
#         "User count": frappe.db.count("User"),
#         "User List": frappe.get_list("User"),
#         "Pretty Date": pretty_date(p_date),
#         "Pretty Now": pretty_date(now())
#     }

@frappe.whitelist()
def get_rec_doc():
    todo_rec = frappe.get_list("ToDo",fields=["name","description"],limit=5)
    todos = frappe.get_list("ToDo",fields=["name","description","owner"],limit=5)
    result = []

    for todo in todos:
        email = frappe.db.get_value("User",todo.owner,"email")
        result.append({"name": todo.name,"owner": todo.owner,"email": email})

    current_time = now()

    return {
        "Server Time":current_time,
        "Secure Fetching":todo_rec,
        "Optimization":result
    }