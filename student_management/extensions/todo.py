import frappe
from frappe.desk.doctype.todo.todo import ToDo

class CustomToDo(ToDo):

    def greet(self):
        #frappe.msgprint("Welcome")
        print("Welcome from CustomToDo.........")