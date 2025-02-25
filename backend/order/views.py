import django_filters

from rest_framework.generics import CreateAPIView, RetrieveAPIView, ListAPIView
from django_filters import rest_framework as filters

from order.models import Order
from order.serializers import OrderSerializer, OrderListSerializer


class OrderFilter(django_filters.FilterSet):
    customerName = filters.CharFilter(field_name='customer_name', lookup_expr='icontains')
    date = filters.DateTimeFilter(field_name='date')

    class Meta:
        model = Order
        fields = [
            'customerName',
            'date'
        ]


class OrderListView(ListAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderListSerializer
    filter_backends = [filters.DjangoFilterBackend]
    filterset_class = OrderFilter

class OrderView(CreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class OrderDetailView(RetrieveAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    lookup_field = 'id'
