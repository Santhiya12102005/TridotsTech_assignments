# Copyright (c) 2026, Santhiya and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class CartItems(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF
		from student_management.student_management.doctype.product_items.product_items import ProductItems

		amended_from: DF.Link | None
		balance_amount: DF.Currency
		coupon_code: DF.Data | None
		customer_mobile_number: DF.Data | None
		customer_name: DF.Data | None
		product: DF.Table[ProductItems]
		total_amount: DF.Currency
		with_discount: DF.Currency
		workflow_state: DF.Data | None
	# end: auto-generated types

	pass
