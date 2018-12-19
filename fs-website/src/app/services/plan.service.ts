import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PlanService {
  constructor(private httpClient: HttpClient) {}
  getPlans(role: String): any { 
    return this.httpClient.get(`${environment.API_URL}/plan/by-role/${role}`);
  }
  getPlan(id: String): any { 
    return this.httpClient.get(`${environment.API_URL}/plan/${id}`);
  }
}
