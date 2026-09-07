import frappe

def execute(filters=None):

    columns = [
        {
            "label": "Name",
            "fieldname": "name1",
            "fieldtype": "Data",
            "width": 150
        },
        {
            "label": "Value",
            "fieldname": "value",
            "fieldtype": "Currency",
            "width": 120
        },
        {
            "label": "Email",
            "fieldname": "email",
            "fieldtype": "Data",
            "width": 200
        }
    ]

    data = [
        {
            "name1": "Santhiya",
            "value": 1000,
            "email": "santhiya@example.com"
        },
        {
            "name1": "Nisha",
            "value": 1500,
            "email": "nisha@example.com"
        },
        {
            "name1": "Priya",
            "value": 2000,
            "email": "priya@example.com"
        }
    ]

    return columns, data