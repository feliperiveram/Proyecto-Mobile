import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { RecPassPage } from '../rec-pass/rec-pass.page';
import { AuthenticatorService } from './../Servicios/authenticator.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private auth: AuthenticatorService) {}

  user = {
    "username":"",
    "password":""
  };
  mensaje = '';

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