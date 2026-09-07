import frappe
from frappe.tests.utils import FrappeTestCase

# Guide 3rd Assignment
class TestArticle(FrappeTestCase):

    def test_article_creation(self):
        article = frappe.get_doc({
            "doctype": "Articles",
            "title": "My First Test",
            "status": "Published"
        })
        article.insert()
        self.assertEqual(article.title, "My First Test")
        self.assertTrue(frappe.db.exists("Articles", article.name))