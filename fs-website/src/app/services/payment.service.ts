import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn:'root'
})
export class PaymentService {
    constructor(private http: HttpClient) { }
  getClientToken(clientTokenURL: string): Observable<string> {
    return this.http
      .get(clientTokenURL, {responseType: 'text'})
  }
  checkout(checkoutURL: string, nonce: string, donationId: string): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    let params = {'payment_method_nonce': nonce, 'donation_id': donationId};
    return this.http
      .post(checkoutURL,
        {headers: headers, params: params}
      )
  }
}

