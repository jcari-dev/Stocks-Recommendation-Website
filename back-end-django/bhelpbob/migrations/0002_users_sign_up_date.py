# Generated by Django 3.2.5 on 2021-08-18 15:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bhelpbob', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='users',
            name='sign_up_date',
            field=models.CharField(blank=True, max_length=18, null=True),
        ),
    ]
