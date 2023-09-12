import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login() {
    console.log('login');
  }

  logout() {
    console.log('logout');
  }
}
