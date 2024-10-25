import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { RecPassPage } from '../rec-pass/rec-pass.page';
import { AuthenticatorService } from './../Servicios/authenticator.service';
import { ApiControllerServiceService } from '../Servicios/api-controller-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Apiresponse: any[] = [];
  TargetValue1 = 'pasajero';
  TargetValue2 = 'chofer';

  constructor(private router: Router, private auth: AuthenticatorService, private api:ApiControllerServiceService) {}

  user = {
    "username":"",
    "password":""
  };
  mensaje = '';

  validarBDD(){
    this.auth.loginBDD(this.user.username,this.user.password).then((res)=>{
      if(res){
        this.mensaje = 'Acceso correcto';

        const id = this.user.username;

            let navigationExtras: NavigationExtras = {
              state: {
                username: this.user.username,
                password: this.user.password,
              },
            };
            this.api.getUser(id).subscribe(
              (data) => {
                this.Apiresponse = data
                console.log(this.Apiresponse)
                this.checkValuesExist(data, navigationExtras)
              },
              (error) => {
                console.log("Error en la llamada :" + error)
              });
            
            // Luego agregar esto luego de la animación de carga
            this.user.username = '';
            this.user.password = '';
            this.mensaje = '';
      }else{
        this.mensaje="Credenciales Incorrectas"
      }
    })
  }

  checkValuesExist(obj: any, navigationExtras: any) {
    if(obj && obj.tipo === this.TargetValue1){
      this.router.navigate(['/pasajero'], navigationExtras);
    } else if (obj && obj.tipo === this.TargetValue2){
      this.router.navigate(['/chofer'], navigationExtras);
    } else {
      this.router.navigate(['/selection'], navigationExtras);
    }
  }

  validar() {
    if (this.user.username.length != 0){
      // Funciona
      if (this.user.password.length != 0){
        // Comienza verdadera validación
        if (this.auth.login(this.user.username, this.user.password)){
          
            // Funciona completamente

            this.mensaje = 'Acceso correcto';

            let navigationExtras: NavigationExtras = {
              state: {
                username: this.user.username,
                password: this.user.password,
              },
            };
            this.router.navigate(['/selection'], navigationExtras);
            
            // Luego agregar esto luego de la animación de carga
            this.user.username = '';
            this.user.password = '';
            this.mensaje = '';

          }
         else {
          this.mensaje = 'Credenciales incorrectas'
        }
      } else {
        this.mensaje = 'No se ha ingresado contraseña'
      }
    } else {
      this.mensaje = 'No se ha ingresado username'
    }
  }
}

