from django.shortcuts import render
from django.http import JsonResponse

from .models import Hospital, Instance, Procedure, Prerequisite

# Create your views here.
def index(request):
    return render(request, 'spineReplacement/index.html')

def results(request, procedure):
    return render(request, 'spineReplacement/results.html')

def instances(request):
    procedure = request.GET['procedure']
    print(request.GET['procedure'])
    idict = {"instances": [obj.asJson() for obj in Instance.objects.filter(procedure__name__contains=procedure)]}
    return JsonResponse(idict)
