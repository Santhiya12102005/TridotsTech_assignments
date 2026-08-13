# student_management/overrides/pages.py
import frappe

def context_404(context):
    context.suggested_links = [
        {"title": "Student Portal", "url": "/students"},
        {"title": "Home", "url": "/"},
    ]