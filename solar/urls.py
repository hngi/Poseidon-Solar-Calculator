from django.urls import path
from .views import ApplianceList, SubscriptionList, api_root

urlpatterns = [
    path('', api_root),
    path('appliance/', ApplianceList.as_view(), name=ApplianceList.name),
    path('subscribe/', SubscriptionList.as_view(), name=SubscriptionList.name)
]
