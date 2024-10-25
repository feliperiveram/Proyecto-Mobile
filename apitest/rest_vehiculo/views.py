
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from .serializers import UsuarioSerialiazer
from .models import Usuario_app

# Create your views here.

@api_view(['GET','POST'])
def listar_usuarios(request):
    if request.method == 'GET':
        usuario = Usuario_app.objects.all()
        serializer = UsuarioSerialiazer(usuario,many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = UsuarioSerialiazer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET','PUT','DELETE'])
def mostrar_usuario(request, id):
    try:
        usuario = Usuario_app.objects.get(username=id)
    except Usuario_app.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = UsuarioSerialiazer(usuario)
        return Response(serializer.data)
    if request.method =='PUT':
        data = JSONParser().parse(request)
        serializer = UsuarioSerialiazer(usuario,data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        usuario.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
