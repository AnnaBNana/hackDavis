from django.shortcuts import render
from django.http import JsonResponse
from django.db.models import Avg

from .models import Hospital, Instance, Procedure, Prerequisite

# Create your views here.
def index(request):
    return render(request, 'spineReplacement/index.html')

def maps(request):
    return render(request, 'spineReplacement/maps.html')

def results(request, procedure):
    iset = Instance.objects.filter(procedure__name__contains=procedure)
    return render(request, 'spineReplacement/results.html', {"instances": iset})

def mymap(request):
    return render(request, 'spineReplacement/mymap.html')

def new(request):
    hospitals = Hospital.objects.all()
    procedures = Procedure.objects.all()
    return render(request, 'spineReplacement/new.html', {'hospitals': hospitals, 'procedures': procedures})

def add(request):
    if request.method == "POST":
        hospital = Hospital.objects.filter(name=request.POST['hospital'])[0]
        procedure = Procedure.objects.filter(name=request.POST['procedure'])[0]
        i = Instance(cost=request.POST['cost'], date=request.POST['date'], hospital=hospital, procedure=procedure)
        i.save()
        return JsonResponse({'status': 'success'})

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
        if hospital_to_add['instances']:
            hospitals.append(hospital_to_add)
    return JsonResponse({'hospitals': hospitals})
