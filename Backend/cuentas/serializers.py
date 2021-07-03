from rest_framework import serializers
from cuentas.models import Perfiles, Comentarios, Publicaciones, Categorias

'''
Clases serializadoras, toman el modelo y retornan la data en fomato Json
'''
class PerfilesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Perfiles
        fields = ('id', 'usuario', 'foto', 'gener','biografia', 'fecNacimiento', 'estadoCivil', 'data_modificada')


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

        