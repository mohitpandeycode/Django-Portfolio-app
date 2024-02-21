from django.db import models
from tinymce.models import HTMLField

# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=50)
    slug = models.CharField(max_length=50,default = '')
    link = models.CharField(max_length=500,default="")
    desciption = HTMLField()
    image = models.ImageField(upload_to='Projectimage/')
    def __str__(self) -> str:
        return self.title

class ProjectImg(models.Model):
    project = models.ForeignKey(Project,on_delete=models.CASCADE)
    firstImg = models.ImageField(upload_to='Projectimage/')
    secondImg = models.ImageField(upload_to='Projectimage/')
    thirdImg = models.ImageField(upload_to='Projectimage/')

    def __str__(self) -> str:
        return f"Images of {self.project.title}"