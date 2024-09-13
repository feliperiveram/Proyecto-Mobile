import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario = new FormGroup({
    nombre: new FormControl(''),
    clave: new FormControl(''),
    cclave: new FormControl(''),
  });

  mensaje = '';

  constructor(private router: Router) { }

  Registrarse(){
    if (this.usuario.controls.nombre.value?.length != 0){
      if (this.usuario.controls.clave.value?.length !=0) {
        if (this.usuario.controls.nombre.value?.length && this.usuario.controls.nombre.value?.length >= 3 &&  this.usuario.controls.nombre.value?.length <= 8) {
          if (this.usuario.controls.clave.value?.length == 4) {
            if (this.usuario.controls.clave.value == this.usuario.controls.cclave.value) {
              console.log(this.usuario.value);
              this.router.navigate(['/home']);              
            }
            else {
              this.usuario.controls.cclave.setValue('malisimo')
            }
          }
          else {
            this.usuario.controls.clave.setValue('terrible');
          }
        }
        else {
          this.usuario.controls.nombre.setValue('mal');
        }
      }
      else {
        this.usuario.controls.clave.setValue('malisimo');
      }
    }
    else {
      this.usuario.controls.nombre.setValue('esta mal');
    }
  }

  ngOnInit() {
  }

}
