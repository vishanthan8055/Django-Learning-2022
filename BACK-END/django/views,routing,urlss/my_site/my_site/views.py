from django.http import HttpRequest, HttpResponse

def home_view(request):
    return HttpResponse("HOME VIEW")