# Generated by Django 3.1.7 on 2022-04-02 13:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0007_auto_20220118_1543'),
    ]

    operations = [
        migrations.AddField(
            model_name='services',
            name='icon',
            field=models.CharField(default='', max_length=200),
            preserve_default=False,
        ),
    ]
