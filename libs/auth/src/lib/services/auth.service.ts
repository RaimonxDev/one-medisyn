import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(value = 'default') {
    console.log(value);
  }

  logout() {
    console.log('logout');
  }
}
