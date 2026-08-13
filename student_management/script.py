def get_web_pages_with_dynamic_routes():
    return [
        {
            "doctype": "Student",
            "route": "/student/<name>",
            "name": "student_profile"
        }
    ]