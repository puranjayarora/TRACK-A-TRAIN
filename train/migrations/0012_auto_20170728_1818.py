# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-07-28 12:48
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('train', '0011_train'),
    ]

    operations = [
        migrations.AlterField(
            model_name='train',
            name='arr_hr',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='train',
            name='arr_min',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='train',
            name='dep_hr',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='train',
            name='dep_min',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='train',
            name='stoppage',
            field=models.IntegerField(),
        ),
    ]
