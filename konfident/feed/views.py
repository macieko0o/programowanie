from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_protect
from feed.models import Donos
# Create your views here.
@csrf_protect
def test(request):
    print("siema")
    xd = Donos.objects.all().order_by("-id")
    if request.method=="POST" and request.POST['your_name'] != "":
        print("co jest")
        print(request.POST)
        print(request.POST['your_name'])
        Donos.objects.create(text=request.POST['your_name'])
        return HttpResponseRedirect('/')
    else:
        print("GET")
    return render(request, "feed/test.html", context={"xd": xd}) 