# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-07-17 08:57
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('train', '0006_path1'),
    ]

    operations = [
        migrations.CreateModel(
            name='Path2',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lat', models.DecimalField(decimal_places=15, max_digits=100)),
                ('lng', models.DecimalField(decimal_places=15, max_digits=100)),
            ],
        ),
    ]