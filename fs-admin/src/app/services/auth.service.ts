import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment } from '../../environments/environment';
import { CustomRegistrationModule } from '../theme/auth/registration/custom-registration/custom-registration.module';


@Injectable({
    providedIn: 'root',
})



export class AuthService {

    constructor(private httpClient: HttpClient){

    }

    signupUser(userData){
        return this.httpClient.post(`${environment.API_URL}/user/sign-up`, userData)
    }

}