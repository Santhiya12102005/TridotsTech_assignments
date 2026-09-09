// Copyright (c) 2026, Santhiya and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Practice", {
// 	refresh(frm) {

// 	},
// });
console.log("JS LOADED");

frappe.realtime.on("student_realtime", (data) => {
    console.log("EVENT RECEIVED:", data);

    frappe.show_alert({
        message: `New Student Added: ${data.name} (${data.roll_no})`,
        indicator: "green"
    });
});