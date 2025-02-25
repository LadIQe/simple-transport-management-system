from django.urls import path

from order.views import OrderView, OrderDetailView, OrderListView

urlpatterns = [
    path('orders', OrderListView.as_view()),
    path('orders/create', OrderView.as_view()),
    path('orders/<int:id>', OrderDetailView.as_view()),
]
