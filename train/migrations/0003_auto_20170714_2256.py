# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-07-14 17:26
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('train', '0002_auto_20170714_2253'),
    ]

    operations = [
        migrations.AlterField(
            model_name='location',
            name='lat',
            field=models.DecimalField(decimal_places=20, max_digits=100),
        ),
        migrations.AlterField(
            model_name='location',
            name='lng',
            field=models.DecimalField(decimal_places=20, max_digits=100),
        ),
    ]
