from django.contrib import admin
from .models import Procedure, Hospital, Instance, Prerequisite

admin.site.register(Procedure)
admin.site.register(Instance)
admin.site.register(Prerequisite)
admin.site.register(Hospital)


# Register your models here.
