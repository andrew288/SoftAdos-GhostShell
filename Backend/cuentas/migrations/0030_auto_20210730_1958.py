# Generated by Django 3.2.2 on 2021-07-31 00:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cuentas', '0029_alter_perfiles_estatus'),
    ]

    operations = [
        migrations.AddField(
            model_name='perfiles',
            name='url_facebook',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Facebook'),
        ),
        migrations.AddField(
            model_name='perfiles',
            name='url_instagram',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Instagram'),
        ),
        migrations.AddField(
            model_name='perfiles',
            name='url_twitter',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Twitter'),
        ),
        migrations.AddField(
            model_name='perfiles',
            name='url_website',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Web Site'),
        ),
    ]
