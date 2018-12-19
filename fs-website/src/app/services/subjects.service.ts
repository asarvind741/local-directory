import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class SubjectService {
    digitalSourcing$ = new Subject();
    contact$ = new Subject();
    jobPostPlan$ = new Subject();
    prcingPlan$ = new Subject();
    currentEvent$ = new BehaviorSubject<any>('Home');
    constructor() { }
}

