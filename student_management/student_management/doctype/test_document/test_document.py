# Copyright (c) 2026, Santhiya and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class TestDocument(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		age: DF.Int
		amended_from: DF.Link | None
		department: DF.Data | None
		description: DF.TextEditor | None
		first_name: DF.Data | None
		last_name: DF.Data | None
		password: DF.Password | None
	# end: auto-generated types

	# before_save() Method
	# def before_save(self):
	# 	if not self.description:
	# 		self.description = "Default Description"

	#before_insert()
	# def before_insert(self):
	# 	if self.age < 18:
	# 		frappe.throw("Age must be above 18!")
	# 	else:
	# 		frappe.msgprint("Successful")	

	# before_naming()
	# def before_naming(self):
	# 	self.department = "BN"
	# 	frappe.msgprint(self.department) # it gives only BN in pop up it override your value entered in department field

	#autoname()
	# def autoname(self):
	# 	self.name = f"{self.department}-.####"

	#before_validate()
	# def before_validate(self):
	# 	if not self.first_name:
	# 		self.first_name = "Default Name"
	# 		frappe.msgprint("Default name set successfully")

	#validate()
	# def validate(self):
	# 	if len(self.password) <= 7:
	# 		frappe.throw("Password is less than 7 characters!")
	# 	else:
	# 		frappe.msgprint("succvalidation")	

	#before_submit()
	# def before_submit(self):
	# 	if self.age<18:
	# 		frappe.throw("Cannot Submit you are not eligibile")
	# 	else:
	# 		frappe.msgprint("Submitted successfull")

	#before_cancle()
	# def before_cancel(self):
	# 	if self.age>=18:
	# 		frappe.throw("You're not able to cancel this record")

	#after_insert()
	# def after_insert(self):
	# 	frappe.msgprint("Record inserted successfully")

	#before_update_after_submit()
	# def before_update_after_submit(self):
	# 	frappe.msgprint("Before update after submit")

	#on_update()
	# def on_update(self):
	# 	frappe.msgprint("on_update triggered....")

	# #on_submit()
	# def on_submit(self):
	# 	frappe.msgprint("on_submit is triggered....")

	#on_update_after_submit()
	# def on_update_after_submit(self):
	# 	frappe.msgprint("on update after submit is triggred...")

	#before_rename()
	def before_rename(self,old,new,merge=False):
		frappe.msgprint("Before rename triggered.....")
	