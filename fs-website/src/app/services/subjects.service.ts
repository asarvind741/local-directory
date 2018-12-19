import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  public digitalSourcing$ = new Subject();
  public contact$ = new Subject();
  public jobPostPlan$ = new Subject();
  public prcingPlan$ = new Subject();
  public currentEvent$ = new BehaviorSubject<any>('Home');
  constructor() { }
}
