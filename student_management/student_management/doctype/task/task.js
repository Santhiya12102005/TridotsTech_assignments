// Copyright (c) 2026, Santhiya and contributors
// For license information, please see license.txt

frappe.ui.form.on("Task", {
    refresh(frm) {
        frm.add_custom_button("Dialog", () => {

            let dialog = new frappe.ui.Dialog({
                title: "Create Task",

                fields: [
                    {
                        label: "Task Subject",
                        fieldname: "task_subject",
                        fieldtype: "Data",
                        reqd: 1
                    }
                ],

                primary_action_label: "Create",

                primary_action(values) {

                    frappe.call({
                        method: "student_management.api.create_task",
                        args: {
                            task_subject: values.task_subject
                        },

                        callback: function(r) {

                            dialog.hide();

                            frappe.msgprint({
                                title: "Success",
                                message: "Task Created Successfully: " + r.message,
                                indicator: "green"
                            });
                        }
                    });
                }
            });

            dialog.show();
        });
    }
});