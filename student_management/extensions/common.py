import frappe

class ValidationMixin:

    def common_message(self):
        print(f"Common Validation from {self.doctype}")