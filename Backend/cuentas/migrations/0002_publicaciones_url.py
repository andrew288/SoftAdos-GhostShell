# Generated by Django 3.2 on 2021-06-06 18:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cuentas', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='publicaciones',
            name='url',
            field=models.SlugField(default='admin', max_length=255, unique=True),
        ),
    ]
