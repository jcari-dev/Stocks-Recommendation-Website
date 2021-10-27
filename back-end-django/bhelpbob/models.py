# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models
from django.db.models.fields import TextField


class Users(models.Model):
    email = models.EmailField(blank=True, null=True)
    sign_up_date = models.CharField(blank=True, null=True, max_length=18)
    
class Results(models.Model):
    results = models.TextField(blank=True, null=True)
    date = models.CharField(blank=True, null=True,max_length=18)
    recommendations = models.TextField(blank=True, null=True)
    user_email = models.EmailField(blank=True, null=True)
    pattern = models.CharField(blank=True, null=True, max_length=20)

class Starred(models.Model):
    user_email = models.EmailField(blank=True, null=True)
    stock_symbol = models.CharField(blank=True, null=True, max_length=5)
    date = models.CharField(max_length=18, blank=True, null=True,)