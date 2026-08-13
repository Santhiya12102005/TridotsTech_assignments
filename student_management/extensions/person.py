import frappe

class PersonMixin:

    def person_message(self):
        print("This is only for Person")