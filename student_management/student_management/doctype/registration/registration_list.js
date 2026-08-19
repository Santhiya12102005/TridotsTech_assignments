// frappe.listview_settings["Registration"] = {
//     formatters: {
//         is_checked(value) {
//             return cint(value) ? "Yes" : "No";
//         },
//         age(value) {
//             return value ? `${value} Years old` : value;
//         }
//     }
// };


// console.log("REGISTRATION LIST JS LOADED");
// frappe.listview_settings["Registration"] = {
//     button: {
//         show(doc) {
//             return true;
//         },

//         get_label() {
//             return "TEST";
//         },

//         get_description(doc) {
//             return "Test button for " + doc.name;
//         },

//         action(doc) {
//             frappe.msgprint("TEST clicked: " + doc.name);
//         }
//     }
// };


// frappe.listview_settings["Registration"] = {

//     button: {
//         show(doc) {
//             return true;
//         },

//         get_label() {
//             return "TEST";
//         },

//         action(doc) {
//             frappe.msgprint("TEST clicked: " + doc.name);
//         }
//     },

//     dropdown_button: {
//         get_label: __("Actions"),

//         buttons: [
//             {
//                 get_label: __("Button 1"),

//                 show(doc) {
//                     return true;
//                 },

//                 action(doc) {
//                     frappe.msgprint("Button 1 clicked");
//                 }
//             },

//             {
//                 get_label: __("Button 2"),

//                 show(doc) {
//                     return true;
//                 },

//                 action(doc) {
//                     frappe.msgprint("Button 2 clicked");
//                 }
//             }
//         ]
//     }
// };

// frappe.listview_settings["Registration"] = {
//     onload(listview) {

//         listview.page.add_inner_button("Select", () => {
//             frappe.show_alert({
//                 message: "Selected...",
//                 indicator: "green"
//             });
//         });

//         listview.page.set_primary_action("Primary Select", () => {
//             frappe.show_alert({
//                 message: "Primary action...",
//                 indicator: "blue"
//             });
//         });

//     }
// };