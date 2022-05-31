from django.urls import path
from . import views

urlpatterns = [
    path('',views.simple_view) #domain.com/my_site_app/''
]