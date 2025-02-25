from django.db import models

class Order(models.Model):
    customer_name = models.CharField(max_length=50)
    order_number = models.IntegerField(unique=True)
    date = models.DateTimeField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('-date',)
