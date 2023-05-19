from django.urls import path
from . import views



urlpatterns = [
    path('comments/', views.user_comments),
    path('comments/<str:video_id>/', views.get_comments_by_video),
]