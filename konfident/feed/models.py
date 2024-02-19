from django.db import models

# Create your models here.
class Donos(models.Model):
    text = models.CharField(max_length=2000)
    date = models.DateTimeField(auto_now_add=True, blank=True)