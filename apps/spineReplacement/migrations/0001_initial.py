# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-01-22 10:33
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Hospital',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('lat', models.DecimalField(decimal_places=4, max_digits=20)),
                ('long', models.DecimalField(decimal_places=4, max_digits=20)),
                ('address', models.CharField(max_length=255)),
                ('city', models.CharField(max_length=45)),
                ('state', models.CharField(max_length=2)),
                ('county', models.CharField(max_length=45)),
                ('telephone', models.CharField(max_length=45)),
                ('website', models.URLField()),
            ],
        ),
        migrations.CreateModel(
            name='Instance',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cost', models.DecimalField(decimal_places=2, max_digits=20)),
                ('date', models.DateField()),
                ('hospital', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='spineReplacement.Hospital')),
            ],
        ),
        migrations.CreateModel(
            name='Prerequisite',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Procedure',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
            ],
        ),
        migrations.AddField(
            model_name='prerequisite',
            name='procedure',
            field=models.ManyToManyField(related_name='procedure', to='spineReplacement.Procedure'),
        ),
        migrations.AddField(
            model_name='instance',
            name='procedure',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='spineReplacement.Procedure'),
        ),
    ]
