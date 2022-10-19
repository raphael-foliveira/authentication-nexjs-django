from django.urls import path, include
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token
from . import views

app_name = 'api'

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet, basename="users")
router.register(r'notes', views.NoteViewSet, basename="notes")

urlpatterns = [
    path('', include(router.urls)),
    path('login/', obtain_auth_token),
    path('get-user/', views.GetUserFromTokenView.as_view()),
    path('get-notes/', views.GetUserNotesView.as_view())
]
