from django.shortcuts import render
from .models import Project,ProjectImg

# Create your views here.
def index(request):
    projects = Project.objects.all()
    data = {'project':projects}
    return render(request , 'index.html',data)
