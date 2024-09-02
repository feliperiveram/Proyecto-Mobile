import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { RecPassPage } from '../rec-pass/rec-pass.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

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
        if (this.user.username.length >= 3 && this.user.username.length <= 8){
          if (this.user.password.length == 4){
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

          } else{
            this.mensaje = 'Contraseña no cumple los requisitos'
          }
        } else {
          this.mensaje = 'Username no cumple los requisitos'
        }
      } else {
        this.mensaje = 'No se ha ingresado contraseña'
      }
    } else {
      this.mensaje = 'No se ha ingresado username'
    }
  }

  olvidar() {
    this.router.navigate([RecPassPage]);
  }
}