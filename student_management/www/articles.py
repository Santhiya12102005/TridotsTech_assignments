import frappe

def get_context(context):
    context.articles = frappe.get_all(
        "Articles",
        filters={"status": "Published"},
        fields=["title", "name"]
    )