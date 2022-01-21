from django.urls import path
from .views import *
urlpatterns = [
    path('',index,name="home"),
    path("contact",index),
    # path("dotari",index),
    path("magazin",index),
    path("preturi",index),
    path("programari",index),
    path("reviews",index),
    path("servicii",index),
    path("product-details/<int:id>",index),
    path("rezerva/<int:id>",index),
    path("rezervare-succes",index),
    path("servicii-details/<int:id>",index),


]