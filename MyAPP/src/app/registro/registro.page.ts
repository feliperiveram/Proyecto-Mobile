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
  });



  constructor(private router: Router) { }

  guardarDatos(){
    console.log(this.usuario.value);
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
