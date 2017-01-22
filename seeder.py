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
    hospitals = open('data/SFHospitals.csv', 'rb')
    reader = csv.reader(hospitals, delimiter=',')
    for entry in reader:
        hospital = Hospital(name=entry[0], lat=float(entry[1]), long=float(entry[2]), address=entry[3], city=entry[4], state=entry[5], telephone=entry[6], county=entry[7], website=entry[8])
        hospital.save()

def seedInstances():
    instances = [
        {'cost': 45000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"ST. MARY'S MEDICAL CENTER SAN FRANCISCO"},
        {'cost': 46000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"ST. MARY'S MEDICAL CENTER SAN FRANCISCO"},
        {'cost': 47000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"ST. MARY'S MEDICAL CENTER SAN FRANCISCO"},
        {'cost': 45500, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"ST. MARY'S MEDICAL CENTER SAN FRANCISCO"},
        {'cost': 50000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"KAISER FND HOSP - SAN FRANCISCO"},
        {'cost': 52000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"KAISER FND HOSP - SAN FRANCISCO"},
        {'cost': 51000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"KAISER FND HOSP - SAN FRANCISCO"},
        {'cost': 51500, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"KAISER FND HOSP - SAN FRANCISCO"},
        {'cost': 50500, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"KAISER FND HOSP - SAN FRANCISCO"},
        {'cost': 49000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"KAISER FND HOSP - SAN FRANCISCO"},
        {'cost': 48500, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"KAISER FND HOSP - SAN FRANCISCO"},
        {'cost': 51000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"KAISER FND HOSP - SAN FRANCISCO"},
        {'cost': 51750, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"KAISER FND HOSP - SAN FRANCISCO"},
        {'cost': 52000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"KAISER FND HOSP - SAN FRANCISCO"},
        {'cost': 50000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"LAGUNA HONDA HOSPITAL AND REHABILITATION CENTER"},
        {'cost': 44000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"CALIFORNIA PACIFIC MED CTR-DAVIES CAMPUS"},
        {'cost': 45000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"CALIFORNIA PACIFIC MED CTR-DAVIES CAMPUS"},
        {'cost': 45500, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"CALIFORNIA PACIFIC MED CTR-DAVIES CAMPUS"},
        {'cost': 46500, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"CALIFORNIA PACIFIC MED CTR-DAVIES CAMPUS"},
        {'cost': 47000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"CALIFORNIA PACIFIC MED CTR-DAVIES CAMPUS"},
        {'cost': 43500, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"CALIFORNIA PACIFIC MED CTR-DAVIES CAMPUS"},
        {'cost': 44000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"CALIFORNIA PACIFIC MED CTR-PACIFIC CAMPUS"},
        {'cost': 46000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"SAN FRANCISCO GENERAL HOSPITAL"},
        {'cost': 46500, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"SAN FRANCISCO GENERAL HOSPITAL"},
        {'cost': 47500, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"SAN FRANCISCO GENERAL HOSPITAL"},
        {'cost': 45000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"SAN FRANCISCO GENERAL HOSPITAL"},
        {'cost': 44000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"SAN FRANCISCO GENERAL HOSPITAL"},
        {'cost': 45000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"SAN FRANCISCO GENERAL HOSPITAL"},
        {'cost': 44000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"SAN FRANCISCO GENERAL HOSPITAL"},
        {'cost': 64000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"UCSF MEDICAL CENTER"},
        {'cost': 62000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"UCSF MEDICAL CENTER"},
        {'cost': 63000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"UCSF MEDICAL CENTER"},
        {'cost': 62500, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"UCSF MEDICAL CENTER"},
        {'cost': 61500, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"UCSF MEDICAL CENTER"},
        {'cost': 60000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"UCSF MEDICAL CENTER"},
        {'cost': 59500, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"UCSF MEDICAL CENTER"},
        {'cost': 58000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"UCSF MEDICAL CENTER"},
        {'cost': 64000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"UCSF MEDICAL CENTER"},
        {'cost': 63000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"UCSF MEDICAL CENTER"},
        {'cost': 66000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"UCSF MEDICAL CENTER"},
        {'cost': 62000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"UCSF MEDICAL CENTER"},
        {'cost': 68000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"UCSF MEDICAL CENTER"},
        {'cost': 60000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"UCSF MEDICAL CENTER"},
        {'cost': 61500, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"UCSF MEDICAL CENTER"},

        {'cost': 49000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"CALIFORNIA PACIFIC MED CTR-CALIFORNIA EAST"},
        {'cost': 54000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"CHINESE HOSPITAL"},
        {'cost': 41000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"ST. FRANCIS MEMORIAL HOSPITAL"},
        {'cost': 38000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"ST. FRANCIS MEMORIAL HOSPITAL"},
        {'cost': 34000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"ST. FRANCIS MEMORIAL HOSPITAL"},
        {'cost': 36000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"ST. FRANCIS MEMORIAL HOSPITAL"},
        {'cost': 37000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"CALIFORNIA PACIFIC MED CTR-CALIFORNIA WEST"},
        {'cost': 33000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"SAN FRANCISCO VA HEALTH CARE SYSTEM"},
        {'cost': 34000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"SAN FRANCISCO VA HEALTH CARE SYSTEM"},
        {'cost': 33500, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"SAN FRANCISCO VA HEALTH CARE SYSTEM"},
        {'cost': 32500, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"SAN FRANCISCO VA HEALTH CARE SYSTEM"},
        {'cost': 31500, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"SAN FRANCISCO VA HEALTH CARE SYSTEM"},
        {'cost': 34000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"SAN FRANCISCO VA HEALTH CARE SYSTEM"},
        {'cost': 48000, 'date':"2016-5-16", 'procedure':"spine replacement", 'hospital':"CALIFORNIA PACIFIC MEDICAL CENTER - ST. LUKE'S CAMPUS"},
    ]
    for instance in instances:
        print instance
        hospital = Hospital.objects.filter(name=instance['hospital'])[0]
        print hospital
        procedure = Procedure.objects.filter(name=instance['procedure'])[0]
        i = Instance(cost=instance['cost'], date=instance['date'], hospital=hospital, procedure=procedure)
        i.save()

seedProcedures()
seedHospitals()
seedInstances()

# for row in reader:
#    print ', '.join(row)
