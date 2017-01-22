from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'spineReplacement/index.html')

def results(request, id):
    context = {"id":id}
    return render(request, 'spineReplacement/results.html', context)

def maps(request):
    return render(request, 'spineReplacement/maps.html')
