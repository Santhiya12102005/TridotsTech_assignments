import frappe
from frappe.query_builder import DocType
from frappe.utils import cint, flt, cstr, fmt_money, today, now
from frappe.utils import pretty_date, add_to_date, date_diff
import time
from frappe.utils.logger import set_log_level
from datetime import datetime
from pypika import functions as fn


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

# @frappe.whitelist()
# def get_rec_doc():
#     todo_rec = frappe.get_list("ToDo",fields=["name","description"],limit=5)
#     todos = frappe.get_list("ToDo",fields=["name","description","owner"],limit=5)
#     result = []

#     for todo in todos:
#         email = frappe.db.get_value("User",todo.owner,"email")
#         result.append({"name": todo.name,"owner": todo.owner,"email": email})

#     current_time = now()

#     return {
#         "Server Time":current_time,
#         "Secure Fetching":todo_rec,
#         "Optimization":result
#     }

# @frappe.whitelist()
# def get_role_profile(role_profile):
#     time.sleep(5)
#     return f"Role Profile received: {role_profile}"

# @frappe.whitelist()
# def test_log_level():
#     set_log_level("ERROR")
#     frappe.logger().debug("This is debug message")
#     frappe.logger().info("This is info message")
#     frappe.logger().warning("This is warning message")
#     frappe.logger().error("This is error message")

#     return "Log level changed to DEBUG"

# @frappe.whitelist()
# def create_task(task_subject):
#     task = frappe.new_doc("Task")
#     task.task_subject = task_subject
#     task.save()
#     return task.name
# ------------------------------------------------------------------------------

# socket io testing

# @frappe.whitelist()
# def realtime_message():
#     frappe.publish_realtime(
#         "student_message",
#         {
#             "message": "Hello Welcome!",
#             "name":"sandy"
#         }
#     )
#     print("Hello")
#     return "Message Sent"

# @frappe.whitelist()
# def realtime_progress():
#     frappe.publish_progress(
#     60,
#     title="Importing Students",
#     description="60 of 100 students processed"
#     )
#     return "done"


# @frappe.whitelist()
# def socketio_testing():
#     frappe.publish_realtime(
#         "registration",
#         {
#             "message":"This is from Registration event",
#             "name":"Registration"
#         }
#     )

#     frappe.publish_progress(
#         28,
#         title="Progress",
#         description="Progress Loading"
#     )
#     return "Done"
    
# @frappe.whitelist()
# def test_utils():
#     td = today()
#     cur_now = now()
#     after_10_days = add_to_date(datetime.now(), days=10, as_string=True)

#     return {
#         "today":td,
#         "now":cur_now,
#         "add_date":after_10_days,
#         "date_diff":date_diff("2005-10-12",td),
#         "mask_string":mask_string("12345678",mask_char="*",show_first=2,show_last=2)
#     }

# @frappe.whitelist()
# def testapi():
#     # frappe.msgprint("Hello!")
#     # return "Success"
#     frappe.throw("This is from Python API","Error")
#     return Success

# @frappe.whitelist()
# def test_query():
#     Dummy = DocType("Dummy")

#     query = (frappe.qb.from_(Dummy).select(Dummy.name,Dummy.value,Dummy.email).where(Dummy.value=="100"))

#     sql = query.walk()
#     res = query.run(as_dict=True)

#     return {
#         "sql":sql,
#         "res":res
#     }

# Database API
# @frappe.whitelist()
# def test_dbquery():
#     db_get_list = frappe.db.get_list("Dummy",filters={"value":["=","100"]},fields=["name","name1","value","email"])
#     db_get_all = frappe.db.get_all("Dummy",filters={"value":["=","100"]},fields=["name","name1","value","email"])
#     name,value,email = frappe.db.get_value("Dummy","DUM-001",["name1","value","email"])
#     timezone = frappe.db.get_single_value('System Settings', 'time_zone')
#     exist = bool(frappe.db.exists("Dummy","DUM-001"))
#     count = str(frappe.db.count("Dummy"))+" Records"
#     des = frappe.db.describe("Dummy")
#     query = frappe.qb.get_query("User",fields=["name", "creation"],filters=[["creation", ">", "2023-01-01 00:00:00"]])
#     result = query.run(as_dict=True)
#     alias = frappe.qb.get_query("Dummy",fields=["Name1 as `User Name`","value as `User Value`","email as `User Mail Id`"])
#     answer = alias.run(as_dict=True)
#     user = frappe.qb.DocType("User")
#     que = (
#     frappe.qb.from_(user)
#     .select(user.user_type, fn.Count(user.name).as_("total_users"))
#     .groupby(user.user_type)
#     )
#     res = que.run(as_dict=True)
#     print(res)
#     return {
#         "db_get_list":db_get_list,
#         "db_get_all":db_get_all,
#         "Name":name,
#         "Value":value,
#         "Email":email,
#         "Single Value":timezone,
#         "Document Exist":exist,
#         "Count": count,
#         "Describe": des,
#         "Query list":result,
#         "Alias": answer,
#         "Count":res
#     }

# Background jobs
# @frappe.whitelist()
# def test_background():
#     frappe.enqueue("student_management.api.short_queue",queue = "short")
#     return "Queue Success"

# def short_queue():
#     for i in range(10):
#         print("Done process",i)
#         time.sleep(3)
#     return "Done"

# multi queue
# @frappe.whitelist()
# def test_multi_queue():
#     frappe.enqueue("student_management.api.short_job", queue="short")
#     frappe.enqueue("student_management.api.default_job", queue="default")
#     frappe.enqueue("student_management.api.long_job", queue="long")
#     return "All jobs queued"

# def short_job():
#     for i in range(5):
#         print("Short job:", i)
#         time.sleep(1)

# def default_job():
#     for i in range(10):
#         print("Default job:", i)
#         time.sleep(3)

# def long_job():
#     for i in range(20):
#         print("Long job:", i)
#         time.sleep(5)
