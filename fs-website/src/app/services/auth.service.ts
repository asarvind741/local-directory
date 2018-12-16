import { Injectable } from '@angular/core';
import {environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})


export class AuthService {

    constructor(private httpClient: HttpClient){

    }

    

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.     
    }

    signupUser(user, payment){
        return this.httpClient.post(`${environment.API_URL}/user/create`, {user, payment}, { observe: 'response'})
    }
}