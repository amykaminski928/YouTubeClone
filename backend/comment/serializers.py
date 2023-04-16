from rest_framework import serializers
from .models import Comment

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'user', 'video_id', 'text', 'likes', 'dislikes']
        depth = 1

class CommentSummarySerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username')

    class Meta: 
        model= Comment
        fields = ['username', 'text']