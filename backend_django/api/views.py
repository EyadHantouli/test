from django.shortcuts import render, HttpResponse
from rest_framework import viewsets
from api.models import Article
from api.serializers import ArticleSerializer

class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

