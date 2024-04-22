from django.db import models
from tinymce.models import HTMLField

# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=50)
    slug = models.CharField(max_length=50,default = '')
    githubLink = models.CharField(max_length=500,default="")
    liveLink = models.CharField(max_length=500,default="", null=True, blank=True)
    desciption = HTMLField()
    image = models.ImageField(upload_to='Projectimage/')
    def __str__(self) -> str:
        return self.title
    
class Resume(models.Model):
    resumeFile = models.FileField(upload_to='Resumes/')
    profilepic = models.ImageField(upload_to='Resumes/',null=True)


class ProjectImg(models.Model):
    project = models.ForeignKey(Project,on_delete=models.CASCADE)
    firstImg = models.ImageField(upload_to='Projectimage/')
    secondImg = models.ImageField(upload_to='Projectimage/')
    thirdImg = models.ImageField(upload_to='Projectimage/')

    def __str__(self) -> str:
        return f"Images of {self.project.title}"

class Totalvisiters(models.Model):
    counting = models.IntegerField(default=0)

    def __str__(self):
        return f"Visiters is {self.counting}"