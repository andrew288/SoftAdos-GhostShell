from django.contrib import admin
from .models import Perfiles, Comentarios, Categorias, Publicaciones

# Register your models here.

admin.site.register(Perfiles)
admin.site.register(Comentarios)
admin.site.register(Categorias)
admin.site.register(Publicaciones)
