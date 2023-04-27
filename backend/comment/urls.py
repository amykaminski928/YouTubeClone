from django.urls import path
from . import views



urlpatterns = [
    path('', views.user_comments),
    path('<str:video_id>/', views.get_comments_by_video),
]