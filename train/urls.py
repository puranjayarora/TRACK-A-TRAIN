from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.map),
    url(r'^detail$', views.detail),
    url(r'^detail/([A-Z_]*)$', views.specific_detail, name='specific_detail'),
    url(r'^search/$', views.search),
]