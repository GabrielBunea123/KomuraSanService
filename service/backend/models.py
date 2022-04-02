from django.db import models

# Create your models here.

class Store(models.Model):
    name = models.CharField(max_length=300)
    description = models.CharField(max_length=30000)
    star_rating = models.IntegerField()
    price = models.FloatField()
    stock = models.IntegerField()

class Appointment(models.Model):
    name=models.CharField(max_length=300)
    email=models.CharField(max_length=300)
    phone_number=models.CharField(max_length=300)
    scop = models.CharField(max_length=10000)
    date = models.DateField()

class Review(models.Model):
    name=models.CharField(max_length=300)
    text=models.CharField(max_length=10000,blank=True,null=True)
    star_rating=models.IntegerField()

class Services(models.Model):
    name=models.CharField(max_length=200)
    description=models.CharField(max_length=30000)
    icon = models.CharField(max_length=200)



