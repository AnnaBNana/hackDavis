from django.shortcuts import render

from .models import Hospital, Instance, Procedure, Prerequisite

# Create your views here.
def index(request):
    return render(request, 'spineReplacement/index.html')

def results(request, procedure):
    iset = Instance.objects.filter(procedure__name__contains=procedure)
    return render(request, 'spineReplacement/results.html', {"instances": iset})

