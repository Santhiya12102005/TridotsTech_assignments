import frappe

def todo_query(user):
    return f"`tabToDo`.owner = {frappe.db.escape(user)}"

def todo_has_permissions(doc,user=None,permission_type=None):
    frappe.msgprint(f"Permission Type: {permission_type}, User: {user}, Owner: {doc.owner}")
    if doc.owner == user:
        return True

    return False