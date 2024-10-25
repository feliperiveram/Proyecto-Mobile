from django.db import models


class Usuario_app(models.Model):
    username= models.CharField(max_length=50,primary_key=True,verbose_name="nombreUsuario")
    nombre= models.CharField(max_length=30, null=False, blank=False)
    apellido= models.CharField(max_length=40, null=False, blank=False)
    correo  = models.EmailField(max_length=100,null=False,blank=False)
    password = models.CharField(max_length=50,null=False,blank=False)
    tipo = models.CharField(max_length=20, null=False, blank=False)
    
    def __str__(self):
        return self.username
    
# Create your models here.
