from rest_framework_simplejwt import serializers
from .models import Comment

class CommentSerializer(serializers.modelserializer):
    class Meta:
        model = Comment
        fields = ['id', 'user', 'video_id', 'text', 'likes', 'dislikes']
        depth = 1