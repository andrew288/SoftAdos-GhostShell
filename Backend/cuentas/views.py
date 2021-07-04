
from django.shortcuts import render
from rest_framework import generics
from .models import Perfiles, Comentarios, Publicaciones, Categorias
from .serializers import PerfilesSerializer, ComentariosSerializer, PublicacionesSerializer, CategoriasSerializer
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

# Crear vistas.

class UsuarioView(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        content = {
            'user': str(request.user),
            'auth': str(request.auth),
        }
        return Response(content)



class PerfilesList(generics.ListCreateAPIView):
    """
        Clase generica para  lectura y escritura de perfiles
    """
    queryset = Perfiles.objects.all()
    serializer_class = PerfilesSerializer

class PerfilesDetail(generics.RetrieveUpdateDestroyAPIView):
    """
        Clase generica de perfiles, se utiliza para puntos finales de lectura, escritura y eliminación
    """
    queryset = Perfiles.objects.all()
    serializer_class = PerfilesSerializer


class ComentariosList(generics.ListCreateAPIView):
    """
        Clase generica para  lectura y escritura de comentarios
    """
    queryset = Comentarios.objects.all()
    serializer_class = ComentariosSerializer

class ComentariosDetail(generics.RetrieveUpdateDestroyAPIView):
    """
        Clase generica de comentarios, , se utiliza para puntos finales de lectura, escritura y eliminación
    """
    queryset = Comentarios.objects.all()
    serializer_class = ComentariosSerializer


class PublicacionesList(generics.ListCreateAPIView):
    """
        Clase generica para  lectura y escritura de publicaciones
    """
    queryset = Publicaciones.objects.all()
    serializer_class = PublicacionesSerializer

class PublicacionesDetail(generics.RetrieveUpdateDestroyAPIView):
    """
        Clase generica de publicaciones, se utiliza para puntos finales de lectura, escritura y eliminación 
    """
    queryset = Publicaciones.objects.all()
    serializer_class = PublicacionesSerializer


class CategoriasList(generics.ListCreateAPIView):
    """
        Clase generica para  lectura y escritura de categorias
    """
    queryset = Categorias.objects.all()
    serializer_class = CategoriasSerializer

class CategoriasDetail(generics.RetrieveUpdateDestroyAPIView):
    """
        Clase generica de categorias, se utiliza para puntos finales de lectura, escritura y eliminación 
    """
    queryset = Categorias.objects.all()
    serializer_class = CategoriasSerializer


