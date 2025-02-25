from django.contrib import admin

from order.models import Order
from waypoint.models import Waypoint

admin.site.register(Order)
admin.site.register(Waypoint)
