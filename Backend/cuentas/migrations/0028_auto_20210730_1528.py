# Generated by Django 3.2.2 on 2021-07-30 20:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cuentas', '0027_articulos_contenido'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='perfiles',
            name='estadoCivil',
        ),
        migrations.RemoveField(
            model_name='perfiles',
            name='gener',
        ),
        migrations.AddField(
            model_name='perfiles',
            name='direccion',
            field=models.TextField(blank=True, null=True, verbose_name='Direccion'),
        ),
        migrations.AddField(
            model_name='perfiles',
            name='estatus',
            field=models.CharField(choices=[('f', 'Usuario destacado'), ('c', 'Creador de contenido'), ('u', 'Usuario')], default='u', max_length=1, verbose_name='Estatus'),
        ),
        migrations.AddField(
            model_name='perfiles',
            name='genero',
            field=models.CharField(blank=True, choices=[('m', 'Masculino'), ('f', 'Feminino')], max_length=1, null=True, verbose_name='Genero'),
        ),
        migrations.AddField(
            model_name='perfiles',
            name='rol',
            field=models.CharField(choices=[('a', 'Administrador'), ('u', 'Usuario'), ('e', 'Especialista')], default='u', max_length=1, verbose_name='Rol'),
        ),
        migrations.AlterField(
            model_name='articulos',
            name='art_archivo',
            field=models.FileField(blank=True, null=True, upload_to='documents/'),
        ),
    ]
