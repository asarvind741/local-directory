import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) { }
  signupUser(user: any, payment: any): any {
    return this.httpClient.post(`${environment.API_URL}/user/create`, { user, payment }, { observe: 'response' });
  }
}
