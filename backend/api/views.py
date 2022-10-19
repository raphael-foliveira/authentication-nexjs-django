from os import stat
from tokenize import Token
from django.shortcuts import render
from rest_framework import viewsets, status, views
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from . import models, serializers

class UserViewSet(viewsets.ViewSet):

    def list(self, request):
        queryset = models.User.objects.all()
        serializer = serializers.UserSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        try:
            queryset = models.User.objects.get(pk=pk)
            serializer = serializers.UserSerializer(queryset)
            return Response(serializer.data)
        except:
            return Response({
                'error': 'This user does not exist'
            })

    def create(self, request):
        new_user_data = {
            'username': request.data['username'],
            'password': request.data['password'],
            'email': request.data['email'],
            'first_name': request.data['first_name'],
            'last_name': request.data['last_name']
        }
        new_user = models.User.objects.create_user(**new_user_data)
        models.UserProfile.objects.create(user=new_user)
        serializer = serializers.UserSerializer(instance=new_user)
        return Response(serializer.data)

    def destroy(self, request, pk=None):
        try:
            user = models.User.objects.get(pk=pk)
            user.delete()
            return Response({
                'message': 'User deleted successfully'
            })
        except:
            return Response({
                'error': 'User does not exist.'
            }, status=status.HTTP_404_NOT_FOUND)


class NoteViewSet(viewsets.ViewSet):

    authentication_classes = [TokenAuthentication]

    def list(self, request):
        queryset = models.Note.objects.all()
        serializer = serializers.NoteSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        new_note = models.Note.objects.create(
            title=request.data["title"],
            content=request.data["content"],
            author=request.user
        )
        return Response(serializers.NoteSerializer(instance=new_note).data)

class GetUserFromTokenView(views.APIView):

    authentication_classes = [TokenAuthentication]

    def post(self, request):
        serializer = serializers.UserSerializer(request.user)
        return Response(serializer.data)

class GetUserNotesView(views.APIView):

    authentication_classes = [TokenAuthentication]

    def get(self, request):
        user_notes = models.Note.objects.filter(author=request.user)
        serializer = serializers.NoteSerializer(user_notes, many=True)
        return Response(serializer.data)