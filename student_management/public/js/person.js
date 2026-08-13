frappe.ui.form.on("Person", {
    refresh : function(frm){
        frm.trigger("custom_js_person");
    },
    custom_js_person : function(frm){
        console.log(frm.doc.name)
        frappe.msgprint("custom js for person")
    }
});