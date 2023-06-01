# from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Comment
from .serializers import *
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes

@api_view (['GET'])
@permission_classes([AllowAny])
def get_comments_by_video(request, video_id):
    print('user', f"{request.user.id} {request.user.username}")
    comments = Comment.objects.filter(video_id=video_id)
    print('filtered objects', f"{video_id}")
    serializer = CommentSummarySerializer(comments, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view (['POST'])
@permission_classes([IsAuthenticated])
def user_comments(request):
    print(
        'User ', f"{request.user.id} {request.user.username} {request.data['text']}")
    serialzier = CommentSerializer(data=request.data)
    if serialzier.is_valid():
        serialzier.save(user=request.user)
        return Response(serialzier.data, status=status.HTTP_201_CREATED)
    return Response(serialzier.errors, status=status.HTTP_400_BAD_REQUEST)