# Generated by Django 3.2 on 2021-07-26 22:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cuentas', '0015_auto_20210726_1734'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='comentarios',
            name='comentario',
        ),
        migrations.AddField(
            model_name='comentarios',
            name='articulo',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='cuentas.articulos'),
        ),
        migrations.AddField(
            model_name='comentarios',
            name='reply_to',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='replies', to='cuentas.comentarios'),
        ),
        migrations.AddField(
            model_name='comentarios',
            name='text',
            field=models.TextField(null=True),
        ),
    ]
