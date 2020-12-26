from django.db import models

# Create your models here.


class Article(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    author = models.TextField(max_length=49, default="unknown")

    def _str_(self):
        return self.title
