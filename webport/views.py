from django.shortcuts import render
from .models import Project,ProjectImg

# Create your views here.
def index(request):
    projects = Project.objects.all()
    data = {'project':projects}
    return render(request , 'index.html',data)

def projectInfo(request,info):
    projectinfo = Project.objects.filter(title = info)
    return render(request,'info.html',{'info':projectinfo})