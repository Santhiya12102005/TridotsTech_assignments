# Copyright (c) 2026, Santhiya and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class Dummy(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		email: DF.Data | None
		name1: DF.Data | None
		value: DF.Int
	# end: auto-generated types

	# def before_discard(self):
	# 	frappe.msgprint("Before discard triggered (server-side)")

	# def on_discard(self):
	# 	frappe.msgprint("After discard triggered (server-side)")