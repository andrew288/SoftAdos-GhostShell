from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Perfiles, Comentarios, Publicaciones, Categorias

#Serializadores

"""
    Clases serializadoras, toman el modelo y retornan la data en fomato Json
"""
class UserSerializer(serializers.ModelSerializer):
    """
        Serializador de usuarios que es manejado por django
    """
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name')


class PerfilesSerializer(serializers.ModelSerializer):
    """
        Serializador de los perfiles de los usuarios
    """
    class Meta:
        model = Perfiles
        fields = ('id', 'usuario', 'foto', 'gener','biografia', 'fecNacimiento', 'estadoCivil', 'data_modificada')


class PerfilesConDatosUsuarioSerializer(serializers.ModelSerializer):
    """
        Serializador de los perfiles con el usuario 
    """
    usu = UserSerializer(read_only=True)
    class Meta:
        model = Perfiles
        fields = '__all__'


class ComentariosSerializer(serializers.ModelSerializer):
    """
        Serializador de los comentarios que realiza un usuario
    """
    class Meta:
        model = Comentarios
        fields = ('id', 'usuario', 'perfil', 'comentario')


class PublicacionesSerializer(serializers.ModelSerializer):
    """
        Serializador de las publicaciones que puede realizar un usuario
    """
    class Meta:
        model = Publicaciones
        fields = ('id', 'usuario', 'perfil', 'titulo', 'publicacion', 'creado', 'modificado', 'url', 'vistas', 'categoria')

        
class CategoriasSerializer(serializers.ModelSerializer):
    """
        Serializador de las categorias de las publicaciones
    """
    class Meta:
        model = Categorias
        fields = ('id', 'nombre')

        