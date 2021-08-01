# Generated by Django 3.2.2 on 2021-07-31 19:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cuentas', '0031_auto_20210730_2035'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='publicaciones',
            name='categoria',
        ),
        migrations.RemoveField(
            model_name='publicaciones',
            name='perfil',
        ),
        migrations.RemoveField(
            model_name='publicaciones',
            name='usuario',
        ),
        migrations.RemoveField(
            model_name='comentarios_publicacion',
            name='publicacion',
        ),
        migrations.RemoveField(
            model_name='comentarios_publicacion',
            name='reply_to',
        ),
        migrations.RemoveField(
            model_name='comentarios_publicacion',
            name='usuario',
        ),
        migrations.AddField(
            model_name='comentarios_publicacion',
            name='articulo',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.PROTECT, to='cuentas.articulos'),
        ),
        migrations.AddField(
            model_name='comentarios_publicacion',
            name='fecha_publicacion',
            field=models.DateField(auto_now=True),
        ),
        migrations.DeleteModel(
            name='Comentarios_articulo',
        ),
        migrations.DeleteModel(
            name='Publicaciones',
        ),
    ]
