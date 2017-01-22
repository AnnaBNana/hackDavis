from django.shortcuts import render
from django.http import JsonResponse
from django.db.models import Avg

from .models import Hospital, Instance, Procedure, Prerequisite

# Create your views here.
def index(request):
    return render(request, 'spineReplacement/index.html')

def results(request, procedure):
    return render(request, 'spineReplacement/results.html')

def instance_details(request):
    procedure = request.GET['procedure']
    idict = {"instances": [obj.asJson() for obj in Instance.objects.filter(procedure__name=procedure)]}
    return JsonResponse(idict)

def hospital_details(request):
    procedure = request.GET['procedure']
    hospitals = []
    for hospital in Hospital.objects.all():
        hospital_to_add = hospital.asJson()
        hospital_to_add['instances'] = [inst.asJson() for inst in hospital.instance_set.filter(procedure__name=procedure)]
        hospital_to_add['avg_cost'] = hospital.instance_set.filter(procedure__name=procedure).aggregate(Avg('cost'))['cost__avg']
        hospitals.append(hospital_to_add)
    return JsonResponse(hospitals)
