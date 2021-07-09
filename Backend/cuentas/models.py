from django.db import models
from django.contrib.auth.models import User
from django.db.models.deletion import PROTECT
from ckeditor.fields import RichTextField
from django.utils.text import slugify

#from typing_extensions import TypeVarTuple

# Create your models here.

class Perfiles(models.Model):
    """
        Creamos un modelo para el manejo de perfiles(tabla)
    """
    GENERO = (
        ('m', 'Masculino'),
        ('f', 'Feminino'),
    )
    ESTADO_CIVIL = (
        ('s', 'Soltero'),
        ('c', 'Casado'),
        ('d', 'Divorciado'),
        ('v', 'Viudo'),
    )
    usuario = models.OneToOneField(User, on_delete=models.CASCADE, related_name='usu')
    foto = models.ImageField('Foto de perfil', upload_to='media', height_field=None, width_field=None,blank=True, null=True)
    gener = models.CharField('Genro', max_length=1, choices=GENERO, blank=True, null=True)
    biografia = models.TextField('Descripcion de bigrafia', blank=True, null=True)
    fecNacimiento = models.DateField('Fecha de nacimiento', blank=True, null=True)
    estadoCivil = models.CharField(max_length=1, choices=ESTADO_CIVIL, blank=True, null=True)
    data_modificada = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.usuario.username



class Comentarios(models.Model):
    """
        Se crea un modelo para que un usuario pueda realizar comentarios(tabla)
    """
    usuario = models.ForeignKey(User, on_delete=models.PROTECT)
    perfil = models.ForeignKey(Perfiles, on_delete=models.PROTECT)
    comentario = models.CharField(max_length=5000)

    def __str__(self):
        return self.comentario




class Categorias(models.Model):
    """
        Se crea un modelo de categorias para que las publicaciones puedan separarse por categorias(tabla)
    """
    nombre = models.CharField(max_length=100, unique=True)

    class Meta:
        ordering = ('nombre',)

    def __str__(self):
        return self.nombre



class Publicaciones(models.Model):
    """
        Se crea un modelo para que el usuario pueda realizar publicaciones(tabla)
    """
    usuario = models.ForeignKey(User, on_delete=models.PROTECT)
    perfil = models.ForeignKey(Perfiles, on_delete=models.PROTECT)
    titulo = models.CharField(max_length=255)
    publicacion = RichTextField()
    #imagen = models.ImageField(upload_to='')
    creado = models.DateTimeField(auto_now_add=True)
    modificado = models.DateTimeField(auto_now=True)
    #borrador = models.BooleanField(default=True)
    url = models.SlugField(max_length=255, unique=True, default='admin')
    vistas = models.PositiveIntegerField(default=0)
    categoria = models.ManyToManyField(Categorias)

    class Meta:
        ordering = ('titulo',)
    
    def __str__(self):
        return '{} by @{}'.format(self.titulo, self.usuario.username)

    def save(self, *args, **kwargs):
        self.url = slugify(self.titulo)
        super(Publicaciones, self).save(*args, **kwargs)    