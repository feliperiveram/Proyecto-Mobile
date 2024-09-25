import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {

  connnectionStatus: boolean = false;

  constructor() { }

  login(user: String, pass: String): boolean {
    if (user == "prueba" && pass == "1234") {
      this.connnectionStatus = true;
      return true;
    }
    this.connnectionStatus = false;
    return false
  }

  logout() {
    this.connnectionStatus = false;
  }

  isConected() {
    return this.connnectionStatus;
  }
}
