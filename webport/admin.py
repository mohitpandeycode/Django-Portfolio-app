from django.contrib import admin

# Register your models here.
from .models import Project,ProjectImg

admin.site.register(Project)
admin.site.register(ProjectImg)