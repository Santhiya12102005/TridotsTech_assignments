# Copyright (c) 2026, Santhiya and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class ProductItems(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		parent: DF.Data
		parentfield: DF.Data
		parenttype: DF.Data
		product_id: DF.Link | None
		product_name: DF.Data | None
		product_price: DF.Currency
		quantity: DF.Int
		total: DF.Currency
	# end: auto-generated types

	pass
