from django.db import models

class Article(models.Model):
    word = models.CharField(max_length=50)
    link = models.TextField()
    