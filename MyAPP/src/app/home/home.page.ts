import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  user = {
    username: '',
    password: '',
  };

  validar(){
    if (this.user.username.length != 0) {
      if (this.user.username.length > 3 && this.user.username.length < 8) {
        if (this.user.password.length == 4) {
          console.log(this.user.password)
          console.log(this.user.username)
        }else {
          console.log('Contraseña no tiene 4 caracteres')
        }
      }else {
        console.log('Usuario no contiene entre 3 y 8 caracteres')
      }
    }else {
      console.log('Usuario vacío')
    }
  }
}
