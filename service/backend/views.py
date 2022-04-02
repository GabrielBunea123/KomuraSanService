from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import *
from rest_framework.response import Response
from rest_framework import generics,status
from .models import *
from django.conf import settings
from django.core.mail import send_mail

# STORE
class GetStore(generics.ListAPIView):
    queryset = Store.objects.all()
    serializer_class = StoreSerializer

class AddProduct(APIView):
    serializer_class=AddProductSerializer
    def post(self,request,format=None):
        serializer=self.serializer_class(data=request.data)
        if serializer.is_valid():
            name=serializer.data.get('name')
            description=serializer.data.get('description')
            star_rating=serializer.data.get('star_rating')
            price=serializer.data.get('price')
            stock=serializer.data.get('stock')

            queryset = Store(name=name,description=description,star_rating=star_rating,price=price,stock=stock)
            queryset.save()

            return Response(AddProductSerializer(queryset).data,status=status.HTTP_201_CREATED)
        return Response({"Bad request":"Something went wrong"},status=status.HTTP_400_BAD_REQUEST)
        
class GetProduct(APIView):
    lookup_url_kwarg = 'id'
    def get(self,request,format=None):
        product_id = request.GET.get(self.lookup_url_kwarg)#GET CODE FROM URL
        if product_id!=None:
            queryset=Store.objects.filter(pk=product_id)
            if queryset.exists():
                return Response(StoreSerializer(queryset[0]).data,status=status.HTTP_200_OK)
            return Response({"Not found":"There is no such object"},status=status.HTTP_404_NOT_FOUND)
        return Response({"Bad request":"Something went wrong"},status=status.HTTP_400_BAD_REQUEST)  
    
#REVIEWS

class GetReviews(generics.ListAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewsSerializer

class GetOneReview(APIView):
    serializer_class = GetOneReviewSerializer
    def post(self,request,format=None):
        serializer=self.serializer_class(data=request.data)
        if serializer.is_valid():
            review_id=serializer.data.get("review_id")
            queryset=Review.objects.filter(pk=review_id)
            if queryset:
                data = ReviewsSerializer(queryset[0]).data
                return Response(data,status=status.HTTP_200_OK)
            return Response({"Not found":"There is no such object"},status=status.HTTP_404_NOT_FOUND)
        return Response({"Bad request":"Something went wrong"},status=status.HTTP_400_BAD_REQUEST)
            

class AddReview(APIView):
    serializer_class=AddReviewSerializer
    def post(self,request,*args, **kwargs):
        serializer=self.serializer_class(data=request.data)
        if serializer.is_valid():
            name=serializer.data.get('name')
            text=serializer.data.get('text')
            star_rating=serializer.data.get('star_rating')

            queryset = Review(name=name,text=text,star_rating=star_rating)
            queryset.save()

            return Response(AddReviewSerializer(queryset).data,status=status.HTTP_201_CREATED)
        return Response({"Bad request":"Something went wrong"},status=status.HTTP_400_BAD_REQUEST)

#APPOINTEMNTS

class AppointmentView(APIView):
    serializer_class=AppointmentSerializer

    def post(self,request,format=None):
        serializer=self.serializer_class(data=request.data)
        if serializer.is_valid():
            name=serializer.data.get('name')
            email=serializer.data.get('email')
            phone_number=serializer.data.get('phone_number')
            scop=serializer.data.get('scop')
            date=serializer.data.get('date')

            queryset=Appointment(name=name,email=email,phone_number=phone_number,scop=scop,date=date)
            queryset.save()

            # body=f"""     """
                        
            # send_mail(
            #     'Confirmare plata',
            #     body,
            #     settings.EMAIL_HOST_USER,
            #     [f''],
            #     fail_silently=False,
            # )
            return Response(AppointmentSerializer(queryset).data,status=status.HTTP_201_CREATED)
        return Response({"Bad request":"Something went wrong"},status=status.HTTP_400_BAD_REQUEST)

class GetAppointments(generics.ListAPIView):
    queryset = Appointment.objects.all()
    serializer_class =  AppointmentSerializer

#SERVICES

class GetServices(generics.ListAPIView):
    queryset = Services.objects.all()
    serializer_class =  ServicesSerializer

class GetSpecificService(APIView):
    serializer_class = GetServiceSerializer
    def post(self,request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            service_id = serializer.data.get('service_id')
            queryset = Services.objects.filter(id=service_id)
            if queryset.exists():
                data = ServicesSerializer(queryset[0]).data
                return Response(data,status=status.HTTP_200_OK)
            return Response({"Not found":"There is no such item"},status=status.HTTP_404_NOT_FOUND)
        return Response({"Bad request":"Something went wrong"},status=status.HTTP_400_BAD_REQUEST)
            


#OTHERS
class SendContactEmail(APIView):
    serializer_class = SendContactEmailSerializer
    def post(self,request,format=None):
        serializer=self.serializer_class(data=request.data)
        if serializer.is_valid():
            email = serializer.data.get('email')
            message=serializer.data.get('message')
            
            body=f"""   De la {email}  
            {message}"""
                        
            send_mail(
                'Contact email',
                body,
                settings.EMAIL_HOST_USER,
                [email],
                fail_silently=False,
            )
            return Response({"Email":"Sent"},status=status.HTTP_200_OK)
        return Response({"Bad request":"Something went wrong"},status=status.HTTP_400_BAD_REQUEST)

class ReserveProduct(APIView):
    serializer_class=ReserveProductSerializer
    def post(self,request,format=None):
        serializer=self.serializer_class(data=request.data)
        if serializer.is_valid():
            
            name=serializer.data.get('name')
            email=serializer.data.get('email')
            phone_number=serializer.data.get('phone')
            product_name = serializer.data.get('product_name')
            description=serializer.data.get('description')
            price=serializer.data.get('price')


            # body=f"""   De la {email}   """
                        
            # send_mail(
            #     'Rezervare piesa',
            #     body,
            #     settings.EMAIL_HOST_USER,
            #     [email],
            #     fail_silently=False,
            # )
            return Response({"Email":"Sent"},status=status.HTTP_200_OK)
        return Response({"Bad request":"Something went wrong"},status=status.HTTP_400_BAD_REQUEST)


        


