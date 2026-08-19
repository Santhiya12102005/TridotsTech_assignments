// Copyright (c) 2026, Santhiya and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Dummy", {
// 	refresh:function(frm) {
// 		let num1=10;
// 		let num2=20;
// 		let total = num1 * num2
//         frappe.msgprint(`the value of ${num1} X ${num2} is ${total}.`)
// 	}
// });

// frappe.ui.form.on("Dummy",{
// 	onload_post_render(frm){
// 		frappe.show_alert(frm.doc.name+" is loaded and rendered.")
// 	}
// })


// frappe.ui.form.on("Dummy", {
//     before_discard(frm) {
//         return new Promise((resolve, reject) => {
//             frappe.confirm(
//                 "Are you sure you want to discard this? Unsaved changes to '" + (frm.doc.name1 || "this record") + "' will be lost.",
//                 () => resolve(), 
//                 () => reject()     
//             );
//         });
//     }
// });

// frappe.ui.form.on("Dummy", {
//     onload_post_render(frm) {
//         console.log("Dummy form script loaded");
//     },

//     before_discard(frm) {
//         console.log("before_discard FIRED", frm.doc);
//     },

//     on_discard(frm) {
//         console.log("on_discard FIRED", frm.doc);
//     },

//     // testing the name you originally tried too, just in case
//     after_discard(frm) {
//         console.log("after_discard FIRED (may not be a real event)", frm.doc);
//     }
// });

// frappe.ui.form.on("Dummy", {
// 	get_email_recipients(frm, field) {
// 		if (field === "recipients" && frm.doc.email) {
// 			return [frm.doc.email];
// 		}
// 	}
// });

// frappe.ui.form.on("Dummy", {
// 	get_email_recipient_filters(frm, field) {
// 		if (field === "recipients") {
// 			return [
// 				["Contact", "status", "=", "Replied"]
// 			];
// 		}
// 	}
// });

// frappe.ui.form.on("Dummy",{
// 	setup(frm){
// 		frm.set_value("name1","Updated")
// 	}
// })


// frappe.ui.form.on("Dummy", {
// 	refresh(frm) {
// 		frm.add_custom_button("Save Dummy", () => {
// 			frm.set_value("value", 100).then(() => {
// 				frm.save();
// 			});
// 		});
// 	}
// });

// frappe.ui.form.on("Dummy", {
// 	refresh(frm) {
// 		if (frm.doc.docstatus === 1) {
// 			frm.add_custom_button("Update", () => {
// 				frm.set_value("email","updated@gmail.com")
// 				frm.save("Update");
// 			});
// 		}
// 	}
// });


// frappe.ui.form.on("Dummy", {
// 	refresh(frm) {
// 		if (frappe.user_roles.includes("Student Manager")) {  //Custom Role
// 			frm.enable_save();
// 		} else {
// 			frm.disable_save();
// 		}
// 	}
// });

// frappe.ui.form.on("Dummy",{
// 	refresh(frm){
// 		frm.add_custom_button("Email",()=>{
// 			frm.email_doc(`Hello ${frm.doc.name1}!
// 				Your value is ${frm.doc.value}.				
// 				Regards`)
// 		})
// 	}
// })

// frappe.ui.form.on("Dummy",{
// 	refresh(frm){
// 		frm.add_custom_button("is_dirty",()=>{
// 			if(frm.is_dirty()){
// 				frappe.show_alert("values updated but not saved!")
// 			}
// 			else{
// 				frappe.show_alert("updates are saved!")
// 			}
// 		})
// 	}
// })

// frappe.ui.form.on("Dummy",{
// 	refresh(frm){
// 		if(!frm.doc.email){
// 			frm.set_intro('Please set the value of Email', 'blue');
// 		}
// 	}
// })

// frappe.ui.form.on("Dummy", {
// 	refresh(frm) {

// 		frm.add_custom_button("Button1", () => {
// 			frappe.msgprint("Button 1 clicked");
// 		});

// 		frm.change_custom_button_type("Button1", null, "success");
// 	}
// });

// frappe.ui.form.on("Student", {
// 	refresh(frm) {
// 		console.log("Docstatus:", frm.doc.docstatus);

// 		if (frm.doc.docstatus === 1) {
// 			frm.add_custom_button("Update", () => {
// 				frappe.show_alert("Update clicked");
// 			});
// 		}
// 	}
// });

// frappe.ui.form.on("Dummy",{
// 	refresh(frm){
// 		frappe.call({
// 			method:"student_management.api.testapi",
// 			callback(r){
// 				console.log(r.message)
// 			}
// 		})
// 	}
// })

//background jobs
// frappe.ui.form.on("Dummy",{
// 	refresh(frm){
// 		frm.add_custom_button("JOB",()=>{
// 			frappe.call({
// 				method:"student_management.api.test_background",
// 				callback(r){
// 					console.log(r.message)
// 				}
// 			})
// 		})
// 	}
// })

// multi queue
frappe.ui.form.on("Dummy",{
	refresh(frm){
		frm.add_custom_button("JOB",()=>{
			frappe.call({
				method:"student_management.api.test_multi_queue",
				callback(r){
					console.log(r.message)
				}
			})
		})
	}
})