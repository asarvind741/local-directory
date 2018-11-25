import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root',
})



export class VatManagementService {

    constructor(private httpClient: HttpClient){}

    getCountryList(){
        return this.httpClient.get(`${environment.API_URL}/region/countries`);
    }

    getStates(id){
        return this.httpClient.get(`${environment.API_URL}/region/states/?id=${id}`);
    }

    getCitiesOfState(id){
        return this.httpClient.get(`${environment.API_URL}/region/cities/?id=${id}`);
    }

}