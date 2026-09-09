import frappe

def execute():
    samples = frappe.db.get_all("Sample",fields=["name","s_name"])

    for s in samples:
        if s.s_name:
            frappe.db.set_value("Sample",s.name,"update_name",s.s_name)
