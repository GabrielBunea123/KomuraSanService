from django.urls import path
from .views import *
urlpatterns = [
    # store
    path("add-product",AddProduct.as_view()),
    path("get-product",GetProduct.as_view()),
    path("get-store",GetStore.as_view()),
    # reviews
    path("get-reviews",GetReviews.as_view()),
    path("get-one-review",GetOneReview.as_view()),
    path("add-review",AddReview.as_view()),
    # appointment
    path("appointment",AppointmentView.as_view()),
    path("get-appointments",GetAppointments.as_view()),
    # services
    path("get-services",GetServices.as_view()),
    path('get-specific-service',GetSpecificService.as_view()),
    #others
    path("send-contact-email",SendContactEmail.as_view()),
    path("reserve-product",ReserveProduct.as_view())

]