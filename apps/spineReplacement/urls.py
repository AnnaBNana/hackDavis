from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name="index"),
    url(r'^results/(?P<procedure>[a-zA-Z]+)$', views.results, name="results"),
    url(r'^instance_details$', views.instance_details, name="instance_details"),
    url(r'^hospital_details$', views.hospital_details, name="hospital_details"),
]
