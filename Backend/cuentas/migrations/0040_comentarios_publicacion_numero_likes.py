# Generated by Django 3.2.2 on 2021-08-03 00:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cuentas', '0039_reacciones'),
    ]

    operations = [
        migrations.AddField(
            model_name='comentarios_publicacion',
            name='numero_likes',
            field=models.IntegerField(default=0),
        ),
    ]
