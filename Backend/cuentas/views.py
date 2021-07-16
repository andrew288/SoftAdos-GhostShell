
from django.shortcuts import render, get_object_or_404
from rest_framework import generics
from .models import Perfiles, Comentarios, Publicaciones, Categorias
from .serializers import PerfilesSerializer, ComentariosSerializer, PublicacionesSerializer, CategoriasSerializer
from rest_framework.authentication import TokenAuthentication, SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
import base64


# Crear vistas.

class UsuarioView(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication, TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        content = {
            'user': str(request.user),
            'auth': str(request.auth),
        }
        return Response(content)


class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        perfilUser =  get_object_or_404(Perfiles,usuario=user.pk)
        print("Tipo de variable: ",type(perfilUser.foto))
        image = perfilUser.foto.open('rb')
        image_read = image.read()
        image_64 = base64.encodestring(image_read)
        print("Imagen 64: ",image_64)
        return Response({
            'token': token.key,
            'username': user.username,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'user_id': user.pk,
            'email': user.email,
            'genero': perfilUser.gener,
            'foto': image_64,
            'biografia':perfilUser.biografia,
            'estado_civil':perfilUser.estadoCivil,
        })


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


