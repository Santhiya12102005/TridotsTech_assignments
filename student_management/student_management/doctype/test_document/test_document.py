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
		department: DF.Data | None
		description: DF.TextEditor | None
		first_name: DF.Data | None
		last_name: DF.Data | None
	# end: auto-generated types

	# before_save() Method
	def before_save(self):
		if not self.description:
			self.description = "Default Description"

	# before_insert()
	def before_insert(self):
		if self.age < 18:
			frappe.throw("Age must be above 18!")	

	# before_naming()
	def before_naming(self):
		self.department = "BN"
		frappe.msgprint(self.department) # it gives only BN in pop up it override your value entered in department field