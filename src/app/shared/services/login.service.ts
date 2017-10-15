import { Injectable } from '@angular/core';
import { Login } from '../model/login';

@Injectable()
export class LoginService {

  login: Login[] = [
    {
      username:'test',
      password:'test'
    }
  ];
  constructor() {

   }

   getPassword(): Login[]{
    return this.login;
   }

}
