from frappe.desk.doctype.todo.todo import ToDo
import frappe

class CustomToDo(ToDo):
    def validate(self):
        print("This is custom validate from override")