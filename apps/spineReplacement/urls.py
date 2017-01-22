from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name="index"),
    url(r'^results/(?P<procedure>[a-zA-Z]+)$', views.results, name="results"),
    url(r'^instances$', views.instances, name="instances"),
]
