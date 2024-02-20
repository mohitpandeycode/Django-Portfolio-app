from django.urls import path
from webport import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('',views.index, name = 'index' ),
    path('About/<slug:info>',views.projectInfo, name = 'info' ),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
    document_root=settings.MEDIA_ROOT)
