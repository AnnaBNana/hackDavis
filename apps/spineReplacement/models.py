from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Procedure(models.Model):
    name = models.CharField(max_length=255)
    def __str__(self):
        return self.name.encode("utf8")

class Hospital(models.Model):
    name = models.CharField(max_length=255)
    lat = models.DecimalField(max_digits=20, decimal_places=4)
    long = models.DecimalField(max_digits=20, decimal_places=4)
    def __str__(self):
        return self.name.encode("utf8")

class Instance(models.Model):
    procedure = models.ForeignKey(Procedure)
    hospital = models.ForeignKey(Hospital)
    cost = models.DecimalField(max_digits=20, decimal_places=2)
    def __str__(self):
        return self.procedure.__str__() + " " + str(self.cost) + " " + self.hospital.__str__()
    def asJson(self):
        return {
            "procedure_name": self.procedure.name,
            "hospital_name": self.hospital.name.encode("utf8"),
            "hospital_lat": self.hospital.lat,
            "hospital_long": self.hospital.long,
            "instance_cost": self.cost
        }


class Prerequisite(models.Model):
    name = models.CharField(max_length=255)
    procedure = models.ManyToManyField(Procedure, related_name="procedure")
