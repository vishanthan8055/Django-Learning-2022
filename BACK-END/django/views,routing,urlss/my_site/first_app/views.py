from curses.ascii import HT
from unittest import result
from django.shortcuts import render
from django.http.response import HttpResponse

# Create your views here.

articles = {
    'sports':'sports page',
    'finance':'finance page',
    'politics':'politics page'
}

def news_view(request,topic):
    return HttpResponse(articles[topic]) #dynnamic approach

# def finance_view(request):
#     return HttpResponse(articles['finance']) #TEMPLATE HTML (JINJA) in future
def add_view(request,num1,num2):
    # domain.com/first_app/num1/num2 --> num1+num2
    add_result = num1 + num2
    result = f'{num1} and {num2} = {add_result}'
    return HttpResponse(str(result))