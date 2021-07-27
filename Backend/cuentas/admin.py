from django.contrib import admin
from rest_framework.authtoken.admin import TokenAdmin
from .models import Perfiles, Comentarios_articulo,Comentarios_publicacion, Categorias, Publicaciones, Articulos

TokenAdmin.raw_id_fields = ['user']
admin.site.register(Perfiles)
admin.site.register(Comentarios_articulo)
admin.site.register(Comentarios_publicacion)
admin.site.register(Categorias)
admin.site.register(Publicaciones)
admin.site.register(Articulos)
