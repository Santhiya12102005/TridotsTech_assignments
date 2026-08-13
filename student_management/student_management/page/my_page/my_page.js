frappe.pages['my-page'].on_page_load = function(wrapper) {

    let page = frappe.ui.make_app_page({
        title: 'My Page',
        parent: wrapper,
        single_column: true
    });
	page.set_title("My Page")
	page.set_title_sub('Subtitle')
	page.set_indicator('Pending', 'blue')
	let $btn = page.set_primary_action('New', () => create_new(), 'octicon octicon-plus')
	//let $btn = page.set_secondary_action('Refresh', () => refresh(), 'octicon octicon-sync')
	page.add_menu_item('Send Email', () => open_email_dialog())
	//page.add_menu_item('Send Email', () => open_email_dialog(), true
	page.add_action_item('Delete', () => delete_items())
	page.add_inner_button('Update Posts', () => update_posts())
	page.add_inner_button('New Post', () => new_post(), 'Make')
	// change type of ungrouped button
	page.change_inner_button_type('Update Posts', null, 'primary');

	// change type of a button in a group
	page.change_inner_button_type('Delete Posts', 'Actions', 'danger');
	let field = page.add_field({
		label: 'Status',
		fieldtype: 'Select',
		fieldname: 'status',
		options: [
			'Open',
			'Closed',
			'Cancelled'
		],
		change() {
			console.log(field.get_value());
		}
	});



};

function create_new(){
	frappe.show_alert("Add New clicked")
}

function open_email_dialog(){
	frappe.show_alert("open email dialog clicked..")
}

function delete_items(){
	frappe.show_alert("delete button clicked..")
}

function update_posts(){
	frappe.show_alert("Update post button clicked..")
}

function new_post(){
	frappe.show_alert("New post button clicked..")
}