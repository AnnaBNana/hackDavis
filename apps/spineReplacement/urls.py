from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name="index"),
    url(r'^new$', views.new, name="new"),
    url(r'^maps', views.maps, name="maps"),
    url(r'^mymap$', views.mymap, name="mymap"),
    url(r'^instance_details$', views.instance_details, name="instance_details"),
    url(r'^hospital_details$', views.hospital_details, name="hospital_details"),
    url(r'^add$', views.add, name="add"),
]
