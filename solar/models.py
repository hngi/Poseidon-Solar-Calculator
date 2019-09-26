from django.db import models
from django.contrib.auth.models import User

# Applicance is a table that is created in our database that holds different field that will be used for our calculation
class Appliances(models.Model):
    appliance = models.CharField(max_length=400, blank=False, null=False)
    watt_per_hour = models.DecimalField(max_digits=12,default=0.00,decimal_places=0, blank=True, null=True)
    quantity_of_appliance = models.PositiveIntegerField(default=0, blank=True, null=True)
    hours_used_per_day = models.PositiveIntegerField(default=0, blank=True, null=True)
    date = models.DateField(auto_now_add=True)

    class Meta:
        ordering = ("appliance",)

    def __str__(self):
        return self.appliance

# users can subscribe to our newlestter and their email will be stored in our database
class Subscription(models.Model):
    your_email = models.EmailField(blank=False)
