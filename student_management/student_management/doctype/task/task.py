# Copyright (c) 2026, Santhiya and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class Task(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		description: DF.SmallText | None
		task_name: DF.Data | None
		task_subject: DF.Data | None
	# end: auto-generated types

	pass

def send_message():
    frappe.get_doc({
        "doctype": "Task",
        "task_name": "Created by Cron"
    }).insert(ignore_permissions=True)

    frappe.db.commit()

    frappe.logger().info("Cron executed successfully")

