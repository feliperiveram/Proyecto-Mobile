# Generated by Django 5.1.2 on 2024-10-11 13:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('username', models.CharField(max_length=50, primary_key=True, serialize=False, verbose_name='nombreUsuario')),
                ('correo', models.EmailField(max_length=100)),
                ('password', models.CharField(max_length=50)),
            ],
        ),
    ]
