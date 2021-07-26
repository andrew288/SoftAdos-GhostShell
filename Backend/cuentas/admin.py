from django.contrib import admin
from .models import Perfiles, Comentarios_articulo,Comentarios_publicacion, Categorias, Publicaciones, Articulos

# Registrar los modelos.

admin.site.register(Perfiles)
admin.site.register(Comentarios_articulo)
admin.site.register(Comentarios_publicacion)
admin.site.register(Categorias)
admin.site.register(Publicaciones)
admin.site.register(Articulos)
