from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.reverse import reverse
from .models import Appliances, Subscription
from .serializers import AppliancesSerializer, SubscriptionSerializer
from rest_framework.decorators import api_view


# Exposed endpoints
@api_view(["GET"])
def api_root(request, format=None):
    return Response({
        'appliances': reverse('appliance-list', request=request, format=format),
        'subscription': reverse('subscription-list', request=request, format=format),
    })

# this will list all the incomes availables but perculiar to the current user
class ApplianceList(generics.ListCreateAPIView):
    serializer_class = AppliancesSerializer
    name = "appliance-list"
    queryset = Appliances.objects.all()

class SubscriptionList(generics.ListCreateAPIView):
    serializer_class = SubscriptionSerializer
    name = "subscription-list"
    queryset = Subscription.objects.all()
