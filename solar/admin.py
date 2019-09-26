from django.contrib import admin
from .models import Appliances, Subscription


# Displayed in our admin interface which only authorized people have access to
class ApplianceAdmin(admin.ModelAdmin):
    list_display = ['id', 'appliance', 'watt_per_hour', 'quantity_of_appliance', 
                'hours_used_per_day', 'date']
    list_filter = ['appliance', 'date', 'quantity_of_appliance']
    search_fields = ('appliance',)
    date_hierarchy = 'date'
    ordering = ['appliance', 'date']



class SubscriptionAdmin(admin.ModelAdmin):
    list_display = ['your_email']



admin.site.register(Subscription, SubscriptionAdmin)
admin.site.register(Appliances, ApplianceAdmin)

