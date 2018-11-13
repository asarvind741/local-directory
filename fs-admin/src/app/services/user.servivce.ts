import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})

export class UserService {

    constructor(private httpClient: HttpClient) {

    }

    getUser(id){
        return this.httpClient.get(`${environment.API_URL}/user/${id}`)
    }

}