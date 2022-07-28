from django.contrib import admin
from django.urls import path, include
from api.views import ArticleViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('items', ArticleViewSet, basename='items')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]