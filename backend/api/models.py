from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):
    user = models.OneToOneField(User, primary_key=True, on_delete=models.CASCADE, related_name='user_profile')
    user_since = models.DateTimeField(auto_now_add=True)

class Note(models.Model):
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='notes')
    title = models.CharField(max_length=60)
    content = models.TextField()
    created_at = models.DateField(auto_now_add=True)
