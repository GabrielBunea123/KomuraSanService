# Generated by Django 3.1.7 on 2022-01-10 08:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Programari',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nume', models.CharField(max_length=300)),
                ('email', models.CharField(max_length=300)),
                ('phone_number', models.CharField(max_length=300)),
                ('scop', models.CharField(max_length=10000)),
                ('date', models.DateField()),
            ],
        ),
    ]
