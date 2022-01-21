from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static

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
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)