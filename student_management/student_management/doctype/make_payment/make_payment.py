# Copyright (c) 2026, Santhiya and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class MakePayment(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF
		from student_management.student_management.doctype.product_items.product_items import ProductItems

		balance_amount: DF.Currency
		cart: DF.Link | None
		customer_id: DF.Link | None
		customer_name: DF.Data | None
		enter_amount_to_pay: DF.Currency
		mobile_number: DF.Data | None
		pay_via: DF.Literal["Cash On Delivery", "UPI", "Credit Card"]
		products: DF.Table[ProductItems]
		total_amount: DF.Currency
	# end: auto-generated types

	pass

	