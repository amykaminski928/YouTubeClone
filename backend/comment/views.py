# from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Comment
from .serializers import CommentSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes

@api_view (['GET'])
@permission_classes([AllowAny])
def get_comments_by_video(request):
    comments = Comment.objects.all()
    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view (['POST'])
@permission_classes([IsAuthenticated])
def user_comments(request):
    serialzier = CommentSerializer(data=request.data)
    if serialzier.is_valid():
        serialzier.save(user=request.user)
        return Response(serialzier.data, status=status.HTTP_201_CREATED)
    return Response(serialzier.errors, status=status.HTTP_400_BAD_REQUEST)