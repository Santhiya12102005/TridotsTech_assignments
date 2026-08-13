// Copyright (c) 2026, Santhiya and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Registration", {
// 	refresh(frm) {

// 	},
// });

// frappe.ui.form.on("Registration",{
//     refresh:function(frm){
//         frm.add_custom_button("Enter Age",function(){
//             let dialog = new frappe.ui.Dialog({
//                 title:"Enter Age",
//                 primary_action_label:"Save",
//                 primary_action:function(){
//                     let entered_age = add_age.get_value()
//                     frm.set_value("age",entered_age)
//                     frm.save()
//                     dialog.hide()
//                 },
//                 secondary_action_label:"Cancel",
//                 secondary_action:function(){
//                     dialog.hide()
//                 }
//             })

//             let add_age = frappe.ui.form.make_control({
//                 parent:dialog.body,
//                 df:{
//                     fieldtype:"Int",
//                     fieldname:"age",
//                     label:"Age"
//                 },
//                 render_input:true
//             })
//             dialog.show()  
//         })
//     }
// })

// frappe.ui.form.on("Registration", {
//     refresh: function(frm) {
//         frm.add_custom_button("Enter Age (Full Demo)", function() {

//             // 1. Create the dialog
//             let dialog = new frappe.ui.Dialog({
//                 title: "Enter Age",
//                 primary_action_label: "Submit",
//                 primary_action: function() {
//                     let entered_age = add_age.get_value();
//                     frm.set_value("age", entered_age);
//                     frm.save();
//                     dialog.hide();
//                 },
//                 secondary_action_label: "Cancel",
//                 secondary_action: function() {
//                     dialog.hide();
//                 }
//             });

//             // 2. HEADER — modify title dynamically, style it
//             dialog.header.css("background-color", "#6ed6f9");
//             //console.log("Header element:", dialog.header);

//             // 3. BODY — render the actual input field here
//             let add_age = frappe.ui.form.make_control({
//                 parent: dialog.body,
//                 df: {
//                     fieldtype: "Int",
//                     fieldname: "age",
//                     label: "Age"
//                 },
//                 render_input: true
//             });

//             // Add a helper note under the field, directly into body
//             dialog.body.append(`Enter age in completed years`);

//             // 4. FOOTER — add an extra custom button alongside Submit/Cancel
//             dialog.footer.append(`
//                 <button class="btn btn-default btn-sm" id="reset-age-btn">
//                     Reset
//                 </button>
//             `);
//             dialog.footer.find("#reset-age-btn").on("click", function() {
//                 add_age.set_value("");
//             });

//             // 5. $wrapper — the whole dialog DOM, useful for custom CSS/classes
//             dialog.$wrapper.addClass("age-entry-dialog");

//             // 6. modal — the raw Bootstrap modal instance, for low-level control
//             console.log("Bootstrap modal instance:", dialog.modal);
//             // Example: manually listen to Bootstrap's own show/hide events
//             dialog.$wrapper.on("shown.bs.modal", function() {
//                 console.log("Dialog fully shown (Bootstrap event fired)");
//             });

//             dialog.show();
//         });
//     }
// });

// frappe.meta.docfield_map["Registration"].age.formatter = (value) =>{
//     if (value){
//         return `${value} Years Old`;
//     }
//     return value;
//}

