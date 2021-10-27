from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from urllib.request import urlopen
import requests
import json
import pandas as pd
from sqlalchemy import create_engine
import glob
from .rank import *

from bhelpbob.models import *
# Create your views here.


def index(request):
    response = json.dumps([{'Hi': "It's working."}])
    return HttpResponse(response, content_type='text/json')


@csrf_exempt
def api_test(request):
    if request.method == 'GET':
        try:


            response = A.objects.all()  # Pull from DB
            print(response)

        except:
            # print(Amzn.objects.get())
            response = A.objects.all()  # Pull from DB
            print(response)
            print('hi')
            response = json.dumps([{'Error': 'No test with that name'}])
    else:
        response = request
        # print(request.body)

    return HttpResponse(response, content_type='text/json')


@csrf_exempt
def create_user(request):
    # e = '2020'
    # if e in Aal.objects.order_by('id').values_list('date',flat=True).last():
    #     # print(A.objects.values_list().last())
    #     # print(A.objects.values_list().latest('date'))
    #     # print(A.objects.values_list().earliest('date'))

    #     value_to_print = Aal.objects.order_by('id').values_list('date',flat=True).last()
    #     print(f'Yes, it does contain {e}, here: {value_to_print}')
    # else:
    #     # print(A.objects.values_list().latest('date'))
    #     # hey = A.objects.all().order_by('-id')[:1].values_list('date')
    #     # hey2 = A.objects.order_by('id').values_list('date',
    #     #                                        flat=True).last()
    #     # print(str(hey))
    #     # print(hey2)
    #     print('No Matching Value')
    # # aye = A.objects.filter.icontains(date__icontains = '2000')
    # # print(aye)
    # aye = 'Check the terminal!'

    if request.method == 'POST':
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        print(body)
        if Users.objects.filter(email=body['email']).exists():
            print('user found, not saving it')
        else:
            new_user = Users(email=body['email'])
            new_user.save()
            print('iwashere')
            response = new_user
    else: 
        response = 'Hi, you hit /creating-user'
        print(response)
        
    return HttpResponse(response, content_type='text/json')
   
@csrf_exempt
def log_results(request):
    if request.method == 'POST':
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        print(body)
        new_results = Results()
        check_request(body)
        # if Users.objects.filter(email=body['email']).exists():
        #     print('user found, not saving it')
        # else:
        #     new_user = Users(email=body['email'])
        #     new_user.save()
        #     print('iwashere')
        #     response = new_user
        
        response = json.dumps([{'Error': 'No test with that name from post'}])
        return HttpResponse(response, content_type='text/json')

    elif request.method == 'GET': 
        response = json.dumps([{'Companies_Long_Term': 'AMZN,GOOG,GOOGL,MELI,BKNG'}])
        print(response)
        
    return HttpResponse(response, content_type='text/json')
 
def log_results_get(request):
    
    response = json.dumps([{'Companies_Short_Term': 'NURO,ARCT,AHPI,SGOC,EVK'}])
    
    return HttpResponse(response, content_type='text/json')
    