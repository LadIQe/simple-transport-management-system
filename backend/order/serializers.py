import inflection
from rest_framework import serializers

from utils.mixins import CamelCaseMixin
from waypoint.models import Waypoint
from waypoint.serializers import WaypointSerializer
from .models import Order


class OrderListSerializer(CamelCaseMixin, serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['id', 'customer_name', 'order_number', 'date']


class OrderSerializer(CamelCaseMixin, serializers.ModelSerializer):
    waypoints = WaypointSerializer(many=True)

    class Meta:
        model = Order
        fields = '__all__'

    def create(self, validated_data):
        waypoints_data = validated_data.pop('waypoints', [])
        order = Order.objects.create(**validated_data)

        for waypoint_data in waypoints_data:
            Waypoint.objects.create(order=order, **waypoint_data)

        return order
