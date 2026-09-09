# Copyright (c) 2026, Santhiya and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class Practice(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		age: DF.Int
		department: DF.Literal["", "CSE", "IT", "AIML", "AIDS", "ECE", "MECH"]
		name1: DF.Data | None
		roll_no: DF.Data | None
	# end: auto-generated types

	pass

	def before_insert(self):		
		if not self.roll_no or len(self.roll_no) < 7 or not self.roll_no.startswith("STU-"):
			frappe.throw("Roll Number Must be STU-###.")
		if self.age < 18:
			frappe.throw("Sorry! You're not eligible.")
		if self.department == "":
			frappe.throw("Please Select the department",indicator="blue")

	# def after_insert(self):
	# 	frappe.msgprint(
	# 		f"Name: {self.name1}<br>Roll Number: {self.roll_no}<br>Department: {self.department}",
	# 		title="Student Added Successfully!",
	# 		indicator="green"
	# 	)

	def after_insert(self):
		print("AFTER INSERT CALLED")

		frappe.publish_realtime(
			event="student_realtime",
			message={
				"name": self.name1,
				"roll_no": self.roll_no,
				"age": self.age,
				"department": self.department
			},
			after_commit=True
		)