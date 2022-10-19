from rest_framework import serializers
from . import models


class UserProfileSerializer(serializers.ModelSerializer):
    model = models.UserProfile
    
    class Meta:
        fields = '__all__'


class NoteSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Note
        fields = "__all__"

    def create(self, validated_data):
        new_note = models.Note.objects.create(
        )


class UserSerializer(serializers.ModelSerializer):
    user_since = serializers.SerializerMethodField()

    class Meta:
        model = models.User
        exclude = ['password']

    def get_user_since(self, object):
        return object.user_profile.user_since

    def create(self, validated_data):
        print(validated_data)
        new_user = models.User.objects.create_user(**validated_data)
        new_user_profile = models.UserProfile.objects.create(user=new_user)
        new_user.save()
        new_user_profile.save()
        return new_user