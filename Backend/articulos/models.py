from django.db import models

class Articulos(models.Model):
    titulo = models.CharField(max_length=100, unique=False)
    artfile = models.FileField(upload_to='documents/%Y/%m/%d', blank = False)



# Create your models here.
