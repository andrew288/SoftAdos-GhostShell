from django.contrib import admin
from .models import Perfiles, Comentarios, Categorias, Publicaciones
from rest_framework.authtoken.admin import TokenAdmin

TokenAdmin.raw_id_fields = ['user']
admin.site.register(Perfiles)
admin.site.register(Comentarios)
admin.site.register(Categorias)
admin.site.register(Publicaciones)
