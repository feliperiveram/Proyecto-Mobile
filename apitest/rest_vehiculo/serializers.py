from rest_framework import serializers
from .models import Usuario_app


class UsuarioSerialiazer(serializers.ModelSerializer):
    class Meta:
        model = Usuario_app
        fields = '__all__'