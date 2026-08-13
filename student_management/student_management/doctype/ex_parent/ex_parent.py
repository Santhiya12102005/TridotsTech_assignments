# Copyright (c) 2026, Santhiya and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Ex_parent(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF
		from student_management.student_management.doctype.ex_child.ex_child import Ex_child

		age: DF.Int
		child: DF.Table[Ex_child]
		name1: DF.Data | None
	# end: auto-generated types

	pass
