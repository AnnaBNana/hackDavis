from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Procedure(models.Model):
    name = models.CharField(max_length=255)

class Hospital(models.Model):
    name = models.CharField(max_length=255)

class Instance(models.Model):
    procedure = models.ForeignKey(Procedure)
    hospital = models.ForeignKey(Hospital)
    cost = models.DecimalField(max_digits=20, decimal_places=2)

class Prerequisite(models.Model):
    name = models.CharField(max_length=255)
    procedure = models.ManyToManyField(Procedure, related_name="procedure")
