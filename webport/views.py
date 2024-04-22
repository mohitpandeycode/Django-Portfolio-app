from django.shortcuts import render
from .models import Project,ProjectImg,Resume,Totalvisiters

# Create your views here.
def index(request):
    visitor_count = Totalvisiters.objects.first()
    
    # If there's no record in the database, create one with count 1
    if not visitor_count:
        visitor_count = Totalvisiters(counting=1)
    else:
        # Increment the count
        visitor_count.counting += 1
    
    # Save the updated count back to the database
    visitor_count.save()
    projects = Project.objects.all()
    resume = Resume.objects.all()
    data = {'project':projects,'resume':resume}
    return render(request , 'index.html',data)

def projectInfo(request,info):
    projectinfo = Project.objects.get(slug = info)
    images = ProjectImg.objects.filter(project = projectinfo)
    return render(request,'info.html',{'info':projectinfo,'img':images})

