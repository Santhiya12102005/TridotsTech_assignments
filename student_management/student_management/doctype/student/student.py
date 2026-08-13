# Copyright (c) 2026, Santhiya and contributors
# For license information, please see license.txt

# import frappe
from frappe.website.website_generator import WebsiteGenerator


class Student(WebsiteGenerator):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF
		from student_management.student_management.doctype.course.course import Course

		age: DF.Int
		amended_from: DF.Link | None
		barcode: DF.Data | None
		course: DF.Table[Course]
		dob: DF.Date | None
		ispublished: DF.Check
		name1: DF.Data | None
		route: DF.Data | None
		title: DF.Data | None
	# end: auto-generated types

	pass
