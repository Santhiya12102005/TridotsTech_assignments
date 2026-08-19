// Copyright (c) 2026, Santhiya and contributors
// For license information, please see license.txt

frappe.ui.form.on("Student", {
	refresh:function(frm) {
        frm.add_custom_button("Quick age entry", function(){
            let dialog = new frappe.ui.Dialog({
                title:"Quick age entry",
                primary_action_label:"Submit",
                primary_action: function() {
                    // Get the value user entered
                    let entered_age = age_control.get_value();

                    // Set it into the Student form's age field
                    frm.set_value("age", entered_age);

                    // Optional: save the form automatically
                    // frm.save();

                    dialog.hide();
                }
            })

            let age_control = frappe.ui.form.make_control({
                parent:dialog.body,
                df:{
                    fieldtype:"Int",
                    fieldname:"age",
                    label:"Age"
                },
                render_input:true
            })
            dialog.show()
        })
	},
});

// frappe.meta.docfield_map["Student"].age.formatter = (value) =>{
//     if (value){
//         return `${value} Years Old`;
//     }
//     return value;
// }

// frappe.ui.form.on("Student",{
//     refresh(frm){
//         let route = frappe.get_route()
//         console.log("Get route")
//         console.log(route)
//     }
// })

// frappe.ui.form.on("Student", {
//     refresh(frm) {
//         console.log("Student refresh executed");

//         frm.add_custom_button("Set Route", () => {
//             frappe.set_route("List", "Student", "Report");
//         });
//     }
// });
//-----------------------------------------------------------------------
// Dialog box

// frappe.ui.form.on("Student",{
//     refresh:function(frm){
//         frm.add_custom_button("Dialog",function(){
//             let d = new frappe.ui.Dialog({
//                 title:"Dialog Box Ex",
//                 fields:[
//                     {
//                         label:"Name",
//                         fieldname:"name1",
//                         fieldtype:"Data"
//                     },
//                     {
//                         label:"Date Of Birth",
//                         fieldname:"dob",
//                         fieldtype:"Date"
//                     },
//                     {
//                         label:"Age",
//                         fieldname:"age",
//                         fieldtype:"Int"
//                     }
//                 ],
//                 size:"small",   //small/large/extra-large
//                 primary_action_label:"Submit",
//                 primary_action(values){
//                     frappe.show_alert("Form Submitted")
//                     d.hide()
//                 },
//                 secondary_action_label:"Cancel",
//                 secondary_action(values){
//                     d.hide()
//                 }
//             })
//             d.show()
//         })
//     }
// })
//-----------------------------------------------------------------------
// frappe.msgprint

// frappe.ui.form.on("Student",{
//     refresh(frm){
//         frm.add_custom_button("msgprint",function(){
//             frappe.msgprint({
//                 title:__("msgprint"),
//                 indicator:"green",
//                 message:__("msgprint button is clicked")
//             })
//         })
//     }
// })
//-------------------------------------------------------------------------
// frappe.prompt
// frappe.ui.form.on("Student",{
//     refresh(frm){
//         frm.add_custom_button("Prompt",function(){
//             frappe.prompt({
//                 label:"Date of birth",
//                 fieldname:"dob",
//                 fieldtype:"Date"
//             },(values)=>{
//                 console.log(values.dob)
//             })
//         })
//     }
// })
//--------------------------------------------------------------------------
// frappe.confirm
// frappe.ui.form.on("Student",{
//     refresh(frm){
//         frm.add_custom_button("Confirm",function(){
//             frappe.confirm("Are you sure?",()=>{
//                 frappe.msgprint("Yes Clicked")
//             },()=>{
//                 frappe.msgprint("No Clicked")
//             })
//         })
//     }
// })
//-----------------------------------------------------------------------------
// warning
// frappe.ui.form.on("Student",{
//     refresh(frm){
//         frm.add_custom_button("Confirm",function(){
//             frappe.warn('Are you sure you want to proceed?',
//                 'There are unsaved changes on this page',
//                 () => {
//                     frappe.msgprint("Continued")
//                 },
//                 'Continue',
//                 true // Sets dialog as minimizable
//             )
//         })
//     }
// })
// frappe.ui.form.on("Student",{
//     refresh(){
//         frappe.show_progress('Loading..', 70, 100, 'Please wait');
//     }
// })
// frappe.ui.form.on("Student", {
//     refresh(frm) {

//         frm.add_custom_button("New Student", function() {

//             frappe.new_doc("Student");

//         });

//     }
// });

//chart
// frappe.ui.form.on("Student", {
//     refresh(frm) {
//         frm.add_custom_button("Show Chart", () => {
//             //its is used to show the chart for 1 time
//             if (frm.$wrapper.find("#student-chart").length) {
//                 return;
//             }
//             let chart_area = $(`
//                 <div id="student-chart"
//                      style="margin: 20px 0; height: 300px;">
//                 </div>
//             `);
//             frm.$wrapper.find(".form-layout").append(chart_area);
//             let chart = new frappe.Chart("#student-chart", {
//                 title: "Student Data",
//                 data: {
//                     labels: ["A", "B", "C", "D"],
//                     datasets: [
//                         {
//                             name: "Male",
//                             values: [10, 20, 15, 25]
//                         },
//                         {
//                             name: "Female",
//                             values: [15, 25, 20, 35]
//                         }
//                     ]
//                 },
//                 type: "bar",
//                 colors: ["green", "blue"],
//                 height: 250
//             });
//             console.log("Normal chart created", chart);
//         });
//     }
// });

// frappe.ui.form.on("Student", {
//     refresh(frm) {
//         frm.add_custom_button("Show Chart", () => {
//             if (frm.$wrapper.find("#student-chart").length) {
//                 return;
//             }
//             let chart_area = $(`
//                 <div id="student-chart"
//                      style="margin: 20px 0; height: 300px;">
//                 </div>
//             `);
//             frm.$wrapper.find(".form-layout").prepend(chart_area);
//             let chart = new frappe.Chart("#student-chart", {
//                 title: "Student Data",
//                 data: {
//                     labels: ["A", "B", "C", "D"],
//                     datasets: [
//                         {
//                             name: "Students",
//                             values: [10, 20, 25, 40]
//                         }
//                     ],
//                     color:"blue"
//                 },
//                 type: "bar",
//                 height: 250,
//             });
//             console.log("Normal chart created", chart);
//         });
//     }
// });

// Scanner API
// frappe.ui.form.on("Student",{
//     refresh(frm){
//         frm.add_custom_button("Scanner",()=>{
//             new frappe.ui.Scanner({
//                 dialog:true,
//                 multiple:false,
//                 on_scan(data){
//                     console.log(data.decodedText)
//                     frm.set_value("barcode",data.decodedText)
//                     frappe.show_alert({
//                         message: "Scanned: "+data.decodedText,
//                         indicator: "green"
//                     })
//                 }
//             })
//         })
//     }
// })

//Server calls
// frappe.ui.form.on("Student", {
//     refresh(frm) {
//         frm.add_custom_button("Server Call", (btn) => {
//             //call with no parameter
//             // frappe.call('ping').then(r=>{
//             //     console.log(r)
//             // })

//             //call with single parameter
//             // frappe.call('student_management.api.get_role_profile', {
//             // role_profile: 'Test'
//             // }).then(r => {
//             // console.log(r.message)
//             // })

//             //call with all option
//             // frappe.call({
//             //     method:'student_management.api.get_role_profile',
//             //     args:{
//             //         role_profile:"Design"
//             //     },
//             //     btn: $(btn),
//             //     freeze:true,
//             //     //freeze_message: "Getting Role Profile...",
//             //     freeze_message:`
//             //         <div style="text-align:center;">
//             //             <img src="/assets/student_management/image/sand-clock.png"
//             //                 style="width:50px; height:50px;">
//             //             <div>Getting Role Profile...</div>
//             //         </div>
//             //     `,
//             //     callback: (r)=>{
//             //         console.log("Callback success")
//             //     },
//             //     error: (r)=>{
//             //         console.log("Error Printed")
//             //     }
//             // }).then(r=>{
//             //     console.log(r.message)
//             // }).catch(error => {
//             //     console.log("Promise Error:", error);
//             // });

//             //db.get_doc()
//             // frappe.db.get_doc("Student", null, { age: '0' }).then(doc => {
//             //     console.log(doc.name)
//             // })

//             //db.get_list()
//             // frappe.db.get_list("Student",{
//             //     fields:['name','age'],
//             //     filters: {age:'25'}
//             // }).then(doc=>{
//             //     console.log(doc)
//             // })

//             //db.get_value()
//             // frappe.db.get_value("Student","Diva",['name1','dob','age']).then(doc=>{
//             //     let val = doc.message
//             //     console.log(val.name1,val.dob,val.age)
//             // })

//             //logger events
//             frappe.call({
//                 method:"student_management.api.test_log_level",
//                 callback: (r)=>{
//                     console.log(r)
//                 }
//             })
//         })
//     }
// })

// frappe.ui.form.on("Student", {
//     refresh(frm) {
//         frm.add_custom_button("Select Students", () => {
//             new frappe.ui.form.MultiSelectDialog({
//                 doctype: "Student",
//                 //size: "large",
//                 target: frm,
//                 setters: {
//                     dob: null,
//                     age: null
//                 },
//                 add_filters_group: 1,
//                 get_query() {
//                     return {
//                         filters: {}
//                     };
//                 },
//                 action(selections) {
//                     console.log("Selected Students:", selections);

//                     frappe.show_alert(
//                         "Selected Students: " + selections.join(", ")
//                     );
//                 }
//             });

//         });
//     }
// });

// frappe.ui.form.on("Student", {
//     refresh(frm) {
//         frm.add_custom_button("Show Student Grid", () => {
//             let dialog = new frappe.ui.Dialog({
//                 title: "Student Details",
//                 size: "large",

//                 fields: [
//                     {
//                         fieldname: "students",
//                         fieldtype: "Table",
//                         label: "Students",
//                         in_place_edit: true,

//                         fields: [
//                             {
//                                 fieldtype: "Data",
//                                 fieldname: "name1",
//                                 label: "Student Name",
//                                 in_list_view: 1
//                             },
//                             {
//                                 fieldtype: "Int",
//                                 fieldname: "age",
//                                 label: "Age",
//                                 in_list_view: 1
//                             },
//                             {
//                                 fieldtype: "Date",
//                                 fieldname: "dob",
//                                 label: "Date of Birth",
//                                 in_list_view: 1
//                             }
//                         ]
//                     }
//                 ],

//                 primary_action_label: "Save",
//                 primary_action(values) {
//                     console.log(values.students);
//                     frappe.msgprint(
//                         "Rows: " + values.students.length
//                     );
//                     dialog.hide();
//                 },
//                 secondary_action_label: "Cancel",
//                 secondary_action(){
//                     dialog.hide()
//                 }
//             });

//             dialog.show();
//         });

//     }
// });

// frappe.ui.form.on("Student",{
//     refresh(){
//         let dialog = new frappe.ui.Dialog({
//             title:"Create Contact",
//             fields:[{
//                 label:"First Name",
//                 fieldname:"first_name",
//                 fieldtype:"Data",
//                 reqd:1
//             }],
//             primary_action_label:"Create",
//             primary_action(values){
//                 let first_name = values.first_name
//                 dialog.hide()
//                 frappe.route_options = {
//                     first_name : first_name
//                 }
//                 frappe.new_doc("Contact")
//             }
//         })
//         dialog.show()
//     }
// })


//realtime API
// frappe.ui.form.on("Student", {
//     refresh() {
//         console.log("realtime event....")

//         frappe.realtime.on("student_message", function(data) {
//             console.log(data)
//         })
//         frappe.call({method:'student_management.api.realtime_progress'}).then((r)=>{
//             frappe.show_alert(r.message)
//         })
//     }
// })