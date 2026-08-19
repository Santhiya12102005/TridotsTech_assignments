// Copyright (c) 2026, Santhiya and contributors
// For license information, please see license.txt

// frappe.treeview_settings["Tree Example"] = {
// };

frappe.treeview_settings["Tree Example"] = {
    breadcrumb: "Tree Example",
    title: "My Tree",

    // displayed above the Root node
    filters: [
		{
			fieldname: "choice",
			fieldtype: "Select",
			label: "Choice",
			options: "Select 1\nSelect 2",
			//on_change: handle_company_change(),
		},
	],
    // displaed when u click add child
    fields: [
        {
            fieldtype: "Data",
            fieldname: "tree_example_name",
            label: "Name",
            reqd: true
        },
        {
            fieldtype: "Check",
            fieldname: "is_group",
            label: "Is Group"
        }
    ],

    ignore_fields: ["parent_tree_example"],

    menu_items: [{
        label:"New Child",
        action: function(){
            frappe.show_alert("New Child button clicked")
        }
    }],
    extend_toolbar:false,   //it will append your getsum tool in existing tool bar 
    toolbar:[
        {
            label: "Get Sum",
            click: function(){
                let a = 10
                let b = 20
                let sum = a+b
                frappe.show_alert("Sum of "+a+" and "+b+" is "+sum)
            }
        }
    ]
};

function handle_company_change(){
    frappe.show_alert("Company change button clicked..")
}