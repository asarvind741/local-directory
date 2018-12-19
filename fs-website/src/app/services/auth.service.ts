import { Injectable } from '@angular/core';
import {environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private httpClient: HttpClient){}
    signupUser(user, payment){
        return this.httpClient.post(`${environment.API_URL}/user/create`, {user, payment}, { observe: 'response'})
    }
}
