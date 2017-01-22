import csv
import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "hackDavis.settings")
import django
django.setup()

from apps.spineReplacement.models import Procedure, Hospital, Instance

def seedProcedures():
    procedures = [
        {'name': "spine replacement"}
    ]
    for procedure in procedures:
        p = Procedure(name=procedure['name'])
        p.save()

def seedHospitals():
    hospitals = open('data/Hospitals.csv', 'rb')
    reader = csv.reader(hospitals, delimiter=',')
    for entry in reader:
        hospital = Hospital(name=entry[0], lat=float(entry[1]), long=float(entry[2]), address=entry[3], city=entry[4], state=entry[5], telephone=entry[6], county=entry[7], website=entry[8])
        hospital.save()

def seedInstances():
    instances = [
        {'cost': 45000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"VIBRA HOSPITAL OF SACRAMENTO"},
        {'cost': 50000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"VIBRA HOSPITAL OF SACRAMENTO"},
        {'cost': 46000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"VIBRA HOSPITAL OF SACRAMENTO"},
        {'cost': 47000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"VIBRA HOSPITAL OF SACRAMENTO"},
        {'cost': 42000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"VIBRA HOSPITAL OF SACRAMENTO"},
        {'cost': 41000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"VIBRA HOSPITAL OF SACRAMENTO"},
        {'cost': 35000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"VIBRA HOSPITAL OF SACRAMENTO"},
        {'cost': 54000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"VIBRA HOSPITAL OF SACRAMENTO"},
        {'cost': 40000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"MERCY SAN JUAN HOSPITAL"},
        {'cost': 46000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"MERCY SAN JUAN HOSPITAL"},
        {'cost': 47000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"MERCY SAN JUAN HOSPITAL"},
        {'cost': 42000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"MERCY SAN JUAN HOSPITAL"},
        {'cost': 41000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"MERCY SAN JUAN HOSPITAL"},
        {'cost': 45500, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"MERCY SAN JUAN HOSPITAL"},
        {'cost': 43000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"MERCY SAN JUAN HOSPITAL"},
        {'cost': 52000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"MERCY SAN JUAN HOSPITAL"},
        {'cost': 38000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"MERCY SAN JUAN HOSPITAL"},
        {'cost': 39000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"MERCY SAN JUAN HOSPITAL"},
        {'cost': 40000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"MERCY SAN JUAN HOSPITAL"},
        {'cost': 42000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"MERCY SAN JUAN HOSPITAL"},
        {'cost': 43000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"MERCY SAN JUAN HOSPITAL"},
        {'cost': 45000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"MERCY SAN JUAN HOSPITAL"},
        {'cost': 40000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"MERCY SAN JUAN HOSPITAL"},
        {'cost': 63000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"KAISER FND HOSP - SOUTH SACRAMENTO"},
        {'cost': 60000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"KAISER FND HOSP - SOUTH SACRAMENTO"},
        {'cost': 54000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"KAISER FND HOSP - SOUTH SACRAMENTO"},
        {'cost': 58000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"KAISER FND HOSP - SOUTH SACRAMENTO"},
        {'cost': 57000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"KAISER FND HOSP - SOUTH SACRAMENTO"},
        {'cost': 56000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"KAISER FND HOSP - SOUTH SACRAMENTO"},
        {'cost': 48000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"KAISER FND HOSP - SOUTH SACRAMENTO"},
        {'cost': 49000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"KAISER FND HOSP - SOUTH SACRAMENTO"},
        {'cost': 34000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"MERCY HOSPITAL - FOLSOM"},
        {'cost': 33000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"MERCY HOSPITAL - FOLSOM"},
        {'cost': 36000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"MERCY HOSPITAL - FOLSOM"},
        {'cost': 41000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"METHODIST HOSPITAL OF SACRAMENTO"},
        {'cost': 42000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"METHODIST HOSPITAL OF SACRAMENTO"},
        {'cost': 43000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"METHODIST HOSPITAL OF SACRAMENTO"},
        {'cost': 42000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"METHODIST HOSPITAL OF SACRAMENTO"},
        {'cost': 41000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"SUTTER MEMORIAL HOSPITAL"},
        {'cost': 35000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"UNIVERSITY OF CALIFORNIA DAVIS MEDICAL CENTER"},
        {'cost': 40000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"UNIVERSITY OF CALIFORNIA DAVIS MEDICAL CENTER"},
        {'cost': 41000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"UNIVERSITY OF CALIFORNIA DAVIS MEDICAL CENTER"},
        {'cost': 42000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"UNIVERSITY OF CALIFORNIA DAVIS MEDICAL CENTER"},
        {'cost': 43000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"UNIVERSITY OF CALIFORNIA DAVIS MEDICAL CENTER"},
        {'cost': 41000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"UNIVERSITY OF CALIFORNIA DAVIS MEDICAL CENTER"},
        {'cost': 41000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"UNIVERSITY OF CALIFORNIA DAVIS MEDICAL CENTER"},
        {'cost': 36000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"UNIVERSITY OF CALIFORNIA DAVIS MEDICAL CENTER"},
        {'cost': 37000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"UNIVERSITY OF CALIFORNIA DAVIS MEDICAL CENTER"},
        {'cost': 38000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"UNIVERSITY OF CALIFORNIA DAVIS MEDICAL CENTER"},
        {'cost': 39000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"UNIVERSITY OF CALIFORNIA DAVIS MEDICAL CENTER"},
        {'cost': 50000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"MERCY GENERAL HOSPITAL"},
        {'cost': 56000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"SACRAMENTO COUNTY MENTAL HEALTH TREATMENT CENTER"},
        {'cost': 34000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"CRESTWOOD PSYCHIATRIC HEALTH FACILITY-CARMICHAEL"},
        {'cost': 62000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"KAISER FND HOSP - SACRAMENTO"},
    ]
    for instance in instances:
        hospital = Hospital.objects.filter(name=instance['hospital'])[0]
        procedure = Procedure.objects.filter(name=instance['procedure'])[0]
        i = Instance(cost=instance['cost'], date=instance['date'], hospital=hospital, procedure=procedure)
        i.save()

seedProcedures()
seedHospitals()
seedInstances()

# for row in reader:
#    print ', '.join(row)
