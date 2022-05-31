from django.shortcuts import render
from django.http.response import Http404,HttpResponse,HttpResponseNotFound


# Create your views here.
def simple_view(request):
    return render(request,'my_site_app/example.html') #.html