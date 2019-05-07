import { Injectable } from '@angular/core';
import { AuthenticationService, UserLoginInput, AuthenticationToken } from '../api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.model';

import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authenticationService: AuthenticationService) { }

  login(userLoginInput: UserLoginInput): Observable<User> {
    const storeUserToken = map((authToken: AuthenticationToken) => this.setSession(authToken.token));
    return storeUserToken(this.authenticationService.signIn(userLoginInput));
  }

  logout() {
    localStorage.removeItem('authenticated_user_token');
  }

  private setSession(token: string): User {
    localStorage.setItem('authenticated_user_token', token);
    return this.tokenToUser(token);
  }

  private tokenToUser(token: string): User {
    const decoded = jwt_decode(token);
    return {
      userID: decoded.sub,
      name: decoded.name,
      email: decoded.email,
      pictureURI: decoded.pictureURI,
      expirationTime: this.getExpirationTime(decoded)
    };
  }

  getLoggedUser(): User {
    const token = localStorage.getItem('authenticated_user_token');

    if (token) {
      const user = this.tokenToUser(token);
      if (user.expirationTime == null || Date.now() <= user.expirationTime.valueOf()) {
        return user;
      }
    }

    return null;
  }

  private getExpirationTime(decodedToken) {
    if (decodedToken.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decodedToken.exp);
    return date;
  }
}
