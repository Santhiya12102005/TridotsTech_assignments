// Copyright (c) 2026, Santhiya and contributors
// For license information, please see license.txt

frappe.query_reports["Dummy report"] = {
    filters: [
        {
            fieldname: "value",
            label: "Value",
            fieldtype: "Currency"
        }
    ]
};