
from django.shortcuts import render
from rest_framework import generics
from cuentas.models import Perfiles, Comentarios, Publicaciones, Categorias
from cuentas.serializers import PerfilesSerializer, ComentariosSerializer, PublicacionesSerializer, CategoriasSerializer

# Create your views here.

class PerfilesList(generics.ListCreateAPIView):
    queryset = Perfiles.objects.all()
    serializer_class = PerfilesSerializer

class PerfilesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Perfiles.objects.all()
    serializer_class = PerfilesSerializer


class ComentariosList(generics.ListCreateAPIView):
    queryset = Comentarios.objects.all()
    serializer_class = ComentariosSerializer

class ComentariosDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comentarios.objects.all()
    serializer_class = ComentariosSerializer


class PublicacionesList(generics.ListCreateAPIView):
    queryset = Publicaciones.objects.all()
    serializer_class = PublicacionesSerializer

class PublicacionesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Publicaciones.objects.all()
    serializer_class = PublicacionesSerializer


class CategoriasList(generics.ListCreateAPIView):
    queryset = Categorias.objects.all()
    serializer_class = CategoriasSerializer

class CategoriasDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Categorias.objects.all()
    serializer_class = CategoriasSerializer


