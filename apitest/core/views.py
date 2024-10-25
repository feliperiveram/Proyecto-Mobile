from django.shortcuts import render, redirect


# Create your views here.

class Persona:
    def __init__(self, nombre, edad):
        self.nombre=nombre
        self.edad=edad
        super().__init__()

def home():

    return render(request,'core/home.html',datos)

