from django import forms
from django.forms import extras, ModelChoiceField, ModelForm
from django.forms.fields import DateField
from .models import Hospital, Instance, Procedure
from django.contrib.admin import widgets

import datetime

class InstanceForm(forms.Form):
    date = forms.DateField(widget = extras.SelectDateWidget(years=range(1985, datetime.date.today().year+10), empty_label="Nothing", attrs={'class': 'ui fluid dropdown'}))


