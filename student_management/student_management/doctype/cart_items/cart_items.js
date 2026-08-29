// Copyright (c) 2026, Santhiya and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Cart Items", {
// 	refresh(frm) {

// 	},
// });

// frappe.ui.form.on("Cart Items", {
//     refresh(frm) {
//         frm.set_query("customer_id", function() {
//             return {
//                 query: "student_management.api.customer_query"
//             };
//         });
//     }
// });


// frappe.ui.form.on("Cart Items", {
//     refresh: function(frm) {
//         // Show button only after document is submitted
//         if (frm.doc.docstatus === 1) {

//             frm.add_custom_button("Make Payment", function() {

//                 // Create a new Make Payment document
//                 frappe.new_doc("Make Payment", {
//                     customer_id: frm.doc.customer_id,
//                     customer_name: frm.doc.customer_name,
//                     mobile_number: frm.doc.customer_mobile_number,
//                     total_amount: frm.doc.total_amount
//                 });

//                 // The child table will be populated after the
//                 // Make Payment form is created
//                 setTimeout(function() {

//                     let payment_frm = cur_frm;

//                     // your actual child table fieldname
//                     if (frm.doc.product) {

//                         frm.doc.product.forEach(function(row) {

//                             let child = payment_frm.add_child("products");

//                             child.product_id = row.product_id;
//                             child.product_name = row.product_name;
//                             child.product_price = row.product_price;
//                             child.quantity = row.quantity;
//                             child.total = row.total;

//                         });

//                         payment_frm.refresh_field("products");
//                     }

//                     // First payment → balance = total amount
//                     // payment_frm.set_value(
//                     //     "balance_amount",
//                     //     frm.doc.total_amount || 0
//                     // );

//                 }, 500);

//             });

//         }
//     }
// });

frappe.ui.form.on("Cart Items", {
    refresh(frm) {

        if (frm.doc.docstatus === 1) {

            frm.add_custom_button("Make Payment", () => {

                frappe.new_doc("Make Payment", {

                    // IMPORTANT
                    cart: frm.doc.name,

                    customer_id: frm.doc.customer_id,
                    customer_name: frm.doc.customer_name,
                    mobile_number: frm.doc.customer_mobile_number,
                    total_amount: frm.doc.with_discount,

                    // Existing Cart balance
                    balance_amount: frm.doc.balance_amount
                });

                setTimeout(function () {

                    let p_frm = cur_frm;

                    if (frm.doc.product) {

                        frm.doc.product.forEach(function (row) {

                            let child = p_frm.add_child("products");

                            child.product_id = row.product_id;
                            child.product_name = row.product_name;
                            child.product_price = row.product_price;
                            child.quantity = row.quantity;
                            child.total = row.total;
                        });

                        p_frm.refresh_field("products");
                    }

                }, 500);
            });
        }
    }
});


frappe.ui.form.on("Cart Items", {

    refresh(frm) {
        set_workflow_indicator(frm);
    },

    workflow_state(frm) {
        set_workflow_indicator(frm);
    }

});

function set_workflow_indicator(frm) {

    let status = frm.doc.workflow_state;

    if (!status) {
        return;
    }

    if (status === "Not Paid") {
        frm.page.set_indicator(
            "Not Paid",
            "red"
        );
    }
    else if (status === "Partially Paid") {
        frm.page.set_indicator(
            "Partially Paid",
            "orange"
        );
    }
    else if (status === "Fully Paid") {
        frm.page.set_indicator(
            "Fully Paid",
            "green"
        );
    }
}

frappe.ui.form.on("Cart Items",{
    refresh(frm){
        if(frm.doc.workflow_state=="Fully Paid"){
            frm.remove_custom_button("Make Payment")
        }
    }
})


frappe.ui.form.on("Cart Items",{
    customer_mobile_number(frm){
        let mobile = frm.doc.customer_mobile_number;

        if(!mobile){
            frm.set_value("customer_name","");
            return;
        }

        if(mobile.length<10 || mobile.length>10){
            frappe.throw("Number must have 10 digits!");            
        }

        frappe.db.get_value("Customer",{
            customer_mobile_number:mobile
        },
        [
            "name","customer_name"
        ]).then(r=>{
            if(r.message && r.message.name){
                frm.set_value("customer_name",r.message.customer_name);
            }
            else{
                frm.set_value("customer_name","");
                frm.toggle_display("create_customer",true);
            }
        })
    },
    create_customer(frm){
        let dialog = new frappe.ui.Dialog({
            title:"Create Customer",
            fields:[
                {
                    fieldname:"customer_name",
                    label:"Customer Name",
                    fieldtype:"Data",
                    reqd:1
                },
                {
                    fieldname:"customer_mobile_number",
                    label:"Customer Mobile Number",
                    fieldtype:"Data",
                    default: frm.doc.customer_mobile_number,
                    read_only:1
                }
            ],
            primary_action_label:"Create",
            primary_action(values){
                frappe.call({
                    method:"frappe.client.insert",
                    args:{
                        doc:{
                            doctype:"Customer",
                            customer_name:values.customer_name,
                            customer_mobile_number:values.customer_mobile_number
                        }
                    },
                    callback(r){
                        if(r.message){
                            frm.set_value("customer_name",values.customer_name);
                            frm.toggle_display("create_customer",false);
                            frappe.show_alert({
                                message: `Customer created with ${values.customer_mobile_number}`,
                                indicator:"cyan"
                            });                            
                            dialog.hide();
                        }
                    }
                })
            }
        });
        dialog.show();
    }
})

frappe.ui.form.on("Cart Items", {
    refresh(frm) {

        frm.fields_dict.product.grid.wrapper
            .find(".grid-add-row")
            .hide();

        if (frm.is_new()) {
            frm.add_custom_button("Add Products", () => {
                open_product_dialog(frm);
            });
        }
    }
});


function open_product_dialog(frm) {

    frappe.db.get_list("Products", {
        fields: [
            "name",
            "product_name",
            "product_price",
            "product_stock"
        ],
        limit_page_length: 0
    }).then(products => {

        let dialog = new frappe.ui.Dialog({

            title: "Select Products",

            fields: [
                {
                    fieldname: "products",
                    fieldtype: "Table",
                    label: "Products",
                    cannot_add_rows: true,
                    cannot_delete_rows: true,
                    in_place_edit: true,

                    fields: [
                        {
                            fieldname: "product_id",
                            fieldtype: "Data",
                            label: "Product ID",
                            in_list_view: 1,
                            read_only: 1
                        },
                        {
                            fieldname: "product_name",
                            fieldtype: "Data",
                            label: "Product Name",
                            in_list_view: 1,
                            read_only: 1
                        },
                        {
                            fieldname: "product_price",
                            fieldtype: "Currency",
                            label: "Price",
                            in_list_view: 1,
                            read_only: 1
                        },
                        {
                            fieldname: "stock",
                            fieldtype: "Int",
                            label: "Stock",
                            in_list_view: 1,
                            read_only: 1
                        },
                        {
                            fieldname: "quantity",
                            fieldtype: "Int",
                            label: "Quantity",
                            in_list_view: 1
                        }
                    ]
                }
            ],

            primary_action_label: "Add Products",

            async primary_action(values) {

                let selected_products =
                    (values.products || []).filter(row =>
                        flt(row.quantity) > 0
                    );

                if (!selected_products.length) {
                    frappe.msgprint(
                        "Please enter quantity for at least one product"
                    );
                    return;
                }

                // Stock validation
                for (let row of selected_products) {

                    let existing_row =
                        (frm.doc.product || []).find(
                            item => item.product_id === row.product_id
                        );

                    let existing_qty = existing_row
                        ? flt(existing_row.quantity)
                        : 0;

                    let final_qty =
                        existing_qty + flt(row.quantity);

                    if (final_qty > flt(row.stock)) {
                        frappe.throw(
                            `${row.product_name} has only ${row.stock} stock`
                        );
                    }
                }

                // Add / update products
                selected_products.forEach(row => {

                    let qty = flt(row.quantity);
                    let price = flt(row.product_price);

                    let existing_row =
                        (frm.doc.product || []).find(
                            item => item.product_id === row.product_id
                        );

                    if (existing_row) {

                        existing_row.quantity =
                            flt(existing_row.quantity) + qty;

                        existing_row.total =
                            flt(existing_row.quantity) *
                            flt(existing_row.product_price);

                    } else {

                        let child =
                            frm.add_child("product");

                        child.product_id =
                            row.product_id;

                        child.product_name =
                            row.product_name;

                        child.product_price =
                            price;

                        child.quantity =
                            qty;

                        child.total =
                            price * qty;
                    }
                });

                frm.refresh_field("product");


                // ----------------------------
                // Calculate TOTAL directly
                // ----------------------------

                let total_amount = 0;

                (frm.doc.product || []).forEach(row => {
                    total_amount += flt(row.total);
                });

                await frm.set_value(
                    "total_amount",
                    total_amount
                );


                // ----------------------------
                // Coupon calculation
                // ----------------------------

                if (frm.doc.coupon_code) {

                    await ccoupon_code(frm);

                } else {

                    await frm.set_value(
                        "with_discount",
                        total_amount
                    );

                    await frm.set_value(
                        "balance_amount",
                        total_amount
                    );
                }


                // Refresh amount fields
                frm.refresh_field("total_amount");
                frm.refresh_field("with_discount");
                frm.refresh_field("balance_amount");


                // Success alert
                frappe.show_alert({
                    message: "Products added successfully",
                    indicator: "green"
                });


                // Finally close dialog
                dialog.hide();
            }
        });


        let table_data = products.map(product => ({
            product_id: product.name,
            product_name: product.product_name,
            product_price: flt(product.product_price),
            stock: flt(product.product_stock),
            quantity: 0
        }));


        dialog.fields_dict.products.df.data =
            table_data;

        dialog.fields_dict.products.grid.refresh();

        dialog.show();
    });
}