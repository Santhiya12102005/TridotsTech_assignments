# Copyright (c) 2026, Santhiya and contributors
# For license information, please see license.txt

import frappe
from frappe import _


def execute(filters: dict | None = None):
	"""Return columns and data for the report.

	This is the main entry point for the report. It accepts the filters as a
	dictionary and should return columns and data. It is called by the framework
	every time the report is refreshed or a filter is updated.
	"""
	columns = get_columns()
	data = get_data()

	return columns, data

def get_columns():
	"""Return columns for the report.

	One field definition per column, just like a DocType field definition.
	"""
	return [
		{
			"label": _("Stud Name"),
			"fieldname": "stud_name",
			"fieldtype": "Data",
			"width": 150,
		},
		{
			"label": _("Dept"),
			"fieldname": "dept",
			"fieldtype": "Link",
			"options": "Test Dept",
			"width":150,
		},
		{
			"label": _("Course"),
			"fieldname": "course",
			"fieldtype": "Link",
			"options": "Test Crs",
			"width": 150,
		},
		{
			"label": _("Age"),
			"fieldname": "age",
			"fieldtype": "Int",
			"width": 150,
		},
		{
			"label": _("Student Count"),
			"fieldname": "stud_count",
			"fieldtype": "Int",
			"width": 150,
		}
	]
	


def get_data():
	return frappe.db.sql("""
	select s.stud_name,c.crs_name as course, d.dept_name as dept, count(s.name)as stud_count from `tabTest Stud` s left join `tabTest Dept` d on s.dept=d.name left join `tabTest Crs` c on s.course = c.name group by d.dept_name,c.crs_name
	""",as_dict=True)
