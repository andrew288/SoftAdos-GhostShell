from rest_framework import serializers
from cuentas.models import Perfiles, Comentarios, Publicaciones, Categorias

class PerfilesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Perfiles
        fields = ('id', 'usuario','data_modificada')


class ComentariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comentarios
        fields = ('id', 'usuario', 'perfil', 'comentario')


class PublicacionesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publicaciones
        fields = ('id', 'usuario', 'perfil', 'titulo', 'publicacion', 'creado', 'modificado', 'url', 'vistas', 'categoria')

        
class CategoriasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categorias
        fields = ('id', 'nombre')

        