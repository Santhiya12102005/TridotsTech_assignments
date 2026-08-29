import frappe

def execute(filters=None):
    columns = get_columns()
    data = get_data(filters)

    return columns, data

def get_columns():
    return [
        {
            "label": "Name",
            "fieldname": "name1",
            "fieldtype": "Data",
            "width": 100
        },
        {
            "label": "Value",
            "fieldname": "value",
            "fieldtype": "Data",
            "width": 100
        },
        {
            "label": "Email",
            "fieldname": "email",
            "fieldtype": "Data",
            "width": 100
        }
    ]


def get_data(filters=None):
    return frappe.get_all(
        "Dummy",
        filters={
            "value": 100
        },
        fields=[
            "name1",
            "value",
            "email"
        ]
    )

    return data