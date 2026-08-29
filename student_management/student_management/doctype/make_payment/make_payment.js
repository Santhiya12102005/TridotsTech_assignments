// Copyright (c) 2026, Santhiya and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Make Payment", {
// 	refresh(frm) {

// 	},
// });



frappe.ui.form.on("Make Payment", {

    refresh(frm) {
        if (frm.is_new()) {
            if (!frm.doc.balance_amount) {
                frm.set_value("balance_amount",frm.doc.with_discount || 0);
            }
        }
    },

    before_save(frm) {

        let entered_amount = frm.doc.enter_amount_to_pay || 0;
        let current_balance = frm.doc.balance_amount || 0;

        // Payment greater than balance
        if (entered_amount > current_balance) {
            frappe.throw("Current Balance is " + current_balance);
        }
        let new_balance = current_balance - entered_amount;
        frm.set_value(
            "balance_amount",
            new_balance
        );       
    },

    after_save(frm) {

        // Cart field empty-ah irukka koodathu
        if (!frm.doc.cart) {
            return;
        }
        // Cart Items-la balance update pannum
        frappe.db.set_value(
            "Cart Items",
            frm.doc.cart,
            "balance_amount",
            frm.doc.balance_amount
        )
    }

});