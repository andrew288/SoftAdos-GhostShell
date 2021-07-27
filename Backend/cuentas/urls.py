from django.urls import path
from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    #path('', views.home, name='home'),
    path('profile/', views.UsuarioView.as_view()),
    path('api/auth/', views.CustomAuthToken.as_view()),
    url(r'^perfiles$', views.PerfilesList.as_view()),
    url(r'^perfiles/(?P<pk>[0-9]+)$', views.PerfilesDetail.as_view()),
    url(r'^publicaciones$', views.PublicacionesList.as_view()),
    url(r'^publicaciones/(?P<pk>[0-9]+)$', views.PublicacionesDetail.as_view()),
    url(r'^comentarios$', views.ComentariosList.as_view()),
    url(r'^comentarios/(?P<pk>[0-9]+)$', views.ComentariosDetail.as_view()),
    url(r'^categorias$', views.CategoriasList.as_view()),
    url(r'^categorias/(?P<pk>[0-9]+)$', views.CategoriasDetail.as_view()),
    
    url(r'^articulos$', views.ArticulosList.as_view()),
    url(r'^articulos/(?P<pk>[0-9]+)$', views.ArticulosDetail.as_view()),
]
urlpatterns = format_suffix_patterns(urlpatterns)