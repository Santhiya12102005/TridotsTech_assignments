# Copyright (c) 2026, Santhiya and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Suppliers(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		category: DF.Link | None
		status: DF.Literal["Pending", "Active", "Verified"]
		supplier_name: DF.Data | None
	# end: auto-generated types

	pass
