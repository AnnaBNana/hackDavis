import csv
import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "hackDavis.settings")
import django
django.setup()

from apps.spineReplacement.models import Hospital

def seedHospitals():
    hospitals = open('data/Hospitals.csv', 'rb')
    reader = csv.reader(hospitals, delimiter=',')
    for entry in reader:
        hospital = Hospital(name=entry[0], lat=float(entry[1]), long=float(entry[2]))
        hospital.save()

seedHospitals()

# for row in reader:
#    print ', '.join(row)
