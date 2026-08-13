// Copyright (c) 2026, Santhiya and contributors
// For license information, please see license.txt

// frappe.ui.form.on("ApplicationForm", {
// 	refresh(frm) {

// 	},
// });

frappe.meta.docfield_map["ApplicationForm"].fieldtype.formatter=(value)=>{
    if(value === "Section Break") return "🔵 Section Break";
    else return value;
}