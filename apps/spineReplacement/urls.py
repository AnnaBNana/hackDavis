from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name="index"),
    url(r'^maps', views.maps, name="maps"),
    url(r'^results/(?P<procedure>[a-zA-Z]+)$', views.results, name="results"),
<<<<<<< HEAD
    url(r'^mymap$', views.mymap, name="mymap")
    # url(r'^results/(?P<id>\d+)$', views.results, name="results"),
=======
    url(r'^instance_details$', views.instance_details, name="instance_details"),
    url(r'^hospital_details$', views.hospital_details, name="hospital_details"),
>>>>>>> c672df7e5762cc212dbc81a1c822c4b0f913e04e
]
