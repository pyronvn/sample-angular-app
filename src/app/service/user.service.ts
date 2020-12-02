import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { UserLogin } from '../models/UserLogin';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  validUser: UserLogin = {
    email: 'user@user.com',
    password: 'password@123',
  };

  currentLoggedInUser: User = null;

  constructor() {}

  validateUser(userlogin: UserLogin) {
    if (
      userlogin.email === this.validUser.email &&
      userlogin.password === this.validUser.password
    ) {
      this.currentLoggedInUser = {
        email: userlogin.email
      };
      return true;
    }
    return false;
  }
}
