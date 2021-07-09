from django.db.models.signals import post_save
from django.contrib.auth.models import User
from .models import Perfiles
from django.dispatch import receiver

@receiver(post_save, sender=User)
def crear_perfil(sender, instance, created, **kwargs):
    '''Vamos a crear un peril
    

    Argumentos:
    sender: la clase modelo
    instance: la instancia que se guarda
    created: un booleano

    '''
    if created:
        Perfiles.objects.create(usuario=instance)