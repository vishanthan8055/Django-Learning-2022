from ast import arg
from curses.ascii import HT
from pydoc_data.topics import topics
from unittest import result
from django.http import Http404, HttpResponseNotAllowed, HttpResponseNotFound, HttpResponseRedirect
from django.shortcuts import render
from django.http.response import HttpResponse
from django.urls import reverse

# Create your views here.

articles = {
    'sports':'sports page',
    'finance':'finance page',
    'politics':'politics page'
}

def news_view(request,topic):
    try:
        result = articles[topic]
        return HttpResponse(articles[topic])
    except:
        raise Http404("404 GENERIC ERROR") #404.html
# def finance_view(request):
#     return HttpResponse(articles['finance']) #TEMPLATE HTML (JINJA) in future
def add_view(request,num1,num2):
    # domain.com/first_app/num1/num2 --> num1+num2
    add_result = num1 + num2
    result = f'{num1} and {num2} = {add_result}'
    return HttpResponse(str(result))


# domain.com/first_app/0 ---> domain.com/first_app/sports
def num_page_view(request,num_page):
    topics_list = list(articles.keys()) #['sports','finance','plitics']
    topic = topics_list[num_page]
    webpage = reverse('topic-page',args=[topic])
    return HttpResponseRedirect(webpage)
