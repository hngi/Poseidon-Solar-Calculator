from django.contrib import admin
from django.urls import path, include

from hngInternship import settings
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('solar.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
]
