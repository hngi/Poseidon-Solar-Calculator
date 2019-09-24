from django.contrib import admin
from .models import Appliances, Subscription


# Displayed in our admin interface which only authorized people have access to
class ApplianceAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'power', 'quantity_of_appliance', 
                'hours_used_per_day', 'amp_rating', 'volt_rating', 'date']
    list_filter = ['name', 'date', 'quantity_of_appliance']
    search_fields = ('name',)
    date_hierarchy = 'date'
    ordering = ['name', 'date']



class SubscriptionAdmin(admin.ModelAdmin):
    list_display = ['your_email']



admin.site.register(Subscription, SubscriptionAdmin)
admin.site.register(Appliances, ApplianceAdmin)

