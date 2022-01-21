from rest_framework import serializers
from .models import *

#STORE
class AddProductSerializer(serializers.Serializer):
    name = serializers.CharField()
    description = serializers.CharField()
    star_rating = serializers.IntegerField()
    price = serializers.FloatField()
    stock = serializers.IntegerField()
class GetProductSerializer(serializers.Serializer):
    product_id=serializers.Field()
class StoreSerializer(serializers.ModelSerializer):
    class Meta:
        model=Store
        fields="__all__"
        depth=1

#REVIEWS

class ReviewsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Review
        fields="__all__"
        depth=1

class GetOneReviewSerializer(serializers.Serializer):
    review_id=serializers.IntegerField()
        

class AddReviewSerializer(serializers.Serializer):
    name=serializers.CharField()
    text=serializers.CharField()
    star_rating=serializers.IntegerField()

#APPOINTEMNT
class AppointmentSerializer(serializers.Serializer):
    name=serializers.CharField()
    email=serializers.CharField()
    phone_number= serializers.CharField()
    scop= serializers.CharField()
    date = serializers.CharField()

#SERVICES

class ServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model=Services
        fields="__all__"

class GetServiceSerializer(serializers.Serializer):
    service_id=serializers.IntegerField()

#OTHERS
class SendContactEmailSerializer(serializers.Serializer):
    email = serializers.CharField()
    message = serializers.CharField()

class ReserveProductSerializer(serializers.Serializer):
    name=serializers.CharField()
    email=serializers.CharField()
    phone= serializers.CharField()
    product_name = serializers.CharField()
    description = serializers.CharField()
    price = serializers.FloatField()