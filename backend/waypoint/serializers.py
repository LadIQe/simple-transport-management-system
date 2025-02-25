from rest_framework import serializers

from waypoint.models import Waypoint


class WaypointSerializer(serializers.ModelSerializer):
    class Meta:
        model = Waypoint
        fields = [
            'street_name',
            'street_number',
            'city',
            'country',
            'zip_code',
            'type',
            'created_at',
            'updated_at',
        ]
