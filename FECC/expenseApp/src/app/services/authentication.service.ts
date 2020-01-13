// used for login and logout of the application
// login -> posts the users credentials to api and checks the response for a JWT token
// logged in user details are stored in local storage

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { backendUrl } from '../constants';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    register(email, password): Promise<any> {
        const body = JSON.stringify({ email, password });
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http
          .post(
            backendUrl.authService.register,
            body,
            { headers, responseType: 'text' }
          )
          .toPromise()
          .then(async (authKey) => {
            if (authKey === '-1') {
    
              return null;
            } else {
              console.log(authKey);
              localStorage.setItem('auth_key', authKey);
              this.router.navigate(['/dashboard/']);
    
              return 1;
            }
          });
      }

    login(email, password) {
        const body = JSON.stringify({ email, password });
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
        return this.http
          .post(
            backendUrl.authService.authenticate,
            body,
            { headers, responseType: 'text' }
          )
          .toPromise()
          .then(async (authKey) => {
            if (authKey === '-1') {
    
              return null;
            } else {
              console.log(authKey);
              localStorage.setItem('auth_key', authKey);
              this.router.navigate(['/dashboard/']);
    
              return 1;
            }
          });
      }
    logout() {
        // remove user from local storage to log user out
        console.log('test');
        
        localStorage.removeItem('auth_key');
        this.router.navigate(['/login']);
    }

}