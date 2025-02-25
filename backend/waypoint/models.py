from django.db import models

from order.models import Order


# Create your models here.
class Waypoint(models.Model):
    WAYPOINT_TYPES = [
        ('PICKUP', 'PICKUP'),
        ('DELIVERY', 'DELIVERY'),
    ]

    street_name = models.CharField(max_length=50)
    street_number = models.CharField(max_length=20)
    zip_code = models.CharField(max_length=5)
    city = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    type = models.CharField(max_length=50, choices=WAYPOINT_TYPES)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='waypoints')
