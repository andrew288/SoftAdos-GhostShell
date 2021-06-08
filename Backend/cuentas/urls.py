from django.urls import path
from django.conf.urls import url
from . import views

urlpatterns = [
    #path('', views.home, name='home'),
    url(r'^perfiles$', views.PerfilesList.as_view()),
    url(r'^perfiles/(?P<pk>[0-9]+)$', views.PerfilesDetail.as_view()),
    url(r'^publicaciones$', views.PublicacionesList.as_view()),
    url(r'^publicaciones/(?P<pk>[0-9]+)$', views.PublicacionesDetail.as_view()),
    url(r'^comentarios$', views.ComentariosList.as_view()),
    url(r'^comentarios/(?P<pk>[0-9]+)$', views.ComentariosDetail.as_view()),
    url(r'^categorias$', views.CategoriasList.as_view()),
    url(r'^categorias/(?P<pk>[0-9]+)$', views.CategoriasDetail.as_view()),
]
