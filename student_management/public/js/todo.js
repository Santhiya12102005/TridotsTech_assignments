frappe.ui.form.on("ToDo", {
    refresh: function(frm) {
        frm.trigger("my_custom_code");
    },
    my_custom_code: function(frm){
        console.log(frm.doc.name)
        frappe.msgprint("Override hook called........")
    }
});