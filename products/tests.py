# myapp/tests.py

from django.test import TestCase
from django.urls import reverse
from .models import MyModel  # Replace with your actual model

class MyModelTestCase(TestCase):
    def setUp(self):
        # Create a sample object for testing
        MyModel.objects.create(name="Sample")

    def test_model_creation(self):
        """Test if a MyModel object is created correctly."""
        sample = MyModel.objects.get(name="Sample")
        self.assertEqual(sample.name, "Sample")

    def test_model_list_view(self):
        """Test if the model list view is working correctly."""
        url = reverse("products")  # Replace with your actual URL name
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Sample")

    def test_model_detail_view(self):
        """Test if the model detail view is working correctly."""
        url = reverse("products_detail", args=[1])  # Replace with your actual URL name
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Sample")
        
        # Test if a non-existent model returns a 404
       
