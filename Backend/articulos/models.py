from django.db import models

class Articulos(models.Model):

    HOME_MAIN = "HM"
    BUTTOM_MAIN = "BM"
    TOP_MAIN = "TM"
    POSICION = [(HOME_MAIN, "HOME_MAIN"),(BUTTOM_MAIN, "BOTTOM_MAIN"),(TOP_MAIN, "TOP_MAIN"),]

    titulo = models.CharField(max_length=100, unique=False)
    pub_fecha = models.DateField(null = True)
    resumen = models.TextField(null= True)
    art_archivo = models.FileField(upload_to='documents/%Y/%m/%d', blank = False)
    posicion = models.CharField(max_length=50, choices=POSICION, default = TOP_MAIN)
    def __str__(self):
        return self.titulo 



# Create your models here.
