// Copyright (c) 2026, Santhiya and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Ex_parent", {
// 	refresh(frm) {

// 	},
// });

// frappe.ui.form.on("Ex_parent", {
// 	validate(frm) {
// 		if (frm.doc.age < 18) {
// 			frappe.throw("Age must be greater than 18!");
// 		}
// 	},
// 	before_save(frm) {
// 		return new Promise((resolve, reject) => {
// 			frappe.confirm(
// 				"Are you sure you want to save this form?",
// 				() => resolve(),
// 				() => reject()
// 			);
// 		});
// 	},
// 	after_save(frm) {
// 		frappe.msgprint(frm.doc.name + " Saved successfully!");
// 	}
// });

// frappe.ui.form.on("Ex_child", {
// 	validate(frm, cdt, cdn) {
// 		let row = locals[cdt][cdn];

// 		console.log("CHILD VALIDATE FIRED");
// 		console.log("name1 =", row.name1);
// 		console.log("length =", row.name1 ? row.name1.length : 0);

// 		if (row.name1 && row.name1.length < 3) {
// 			frappe.throw(row.name1 + " is not valid!");
// 		}
// 	}
// });

frappe.ui.form.on("Ex_parent", {
	child_on_form_rendered(frm, cdt, cdn) {
		frappe.show_alert("Child form rendered!");

		let row = locals[cdt][cdn];

		console.log("Child row:", row);
		console.log("name1:", row.name1);
	}
});