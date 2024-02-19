from django.urls import path
from webport import views

urlpatterns = [
    path('',views.index, name = 'index' ),
]