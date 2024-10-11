import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {

  connnectionStatus: boolean;

  constructor(private storage: StorageService) {
    this.connnectionStatus = false;
  }

  loginBDD(user: string, pass: String): Promise<boolean> {
    return this.storage.get(user).then((res) => {
      if(res.password==pass){
        this.connnectionStatus=true;
        return true;
      }else{
        return false
      }
    }).catch((error)=>{
      console.log("Error: "+error)
      return false
    })
  }

  login(user: string, pass: String): boolean {
    this.storage.get(user).then((val) => {
      if (val.password == pass) {
        console.log("usuario encontrado");
        this.connnectionStatus = true;
      } else {
        console.log("error pass");
      }
    }).catch((error) => {
      console.log("Error credenciales")
      this.connnectionStatus = false;
    });
    if (this.connnectionStatus) {
      return true;
    } else {
      return false;
    }
  }

  // Reemplazado por segmento anterior
  // login(user: String, pass: String): boolean {
  //   if (user == "prueba" && pass == "1234") {
  //     this.connnectionStatus = true;
  //     return true;
  //   }
  //   this.connnectionStatus = false;
  //   return false
  // }

  logout() {
    this.connnectionStatus = false;
  }

  isConected() {
    return this.connnectionStatus;
  }
}
