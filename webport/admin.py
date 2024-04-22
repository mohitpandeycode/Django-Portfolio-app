from django.contrib import admin
from django import forms

# Register your models here.
from .models import Project,ProjectImg,Resume,Totalvisiters

admin.site.register(Project)
admin.site.register(ProjectImg)
admin.site.register(Totalvisiters)

class ResumeAdminForm(forms.ModelForm):
    class Meta:
        model = Resume
        fields = '__all__'

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['profilepic'].required = False

class ResumeAdmin(admin.ModelAdmin):
    form = ResumeAdminForm
admin.site.register(Resume, ResumeAdmin)