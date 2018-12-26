import { Injectable  } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})


export class SubjectService {
    public digitalSourcing = new Subject();
    public contact = new Subject();
    public jobPostPlan = new Subject();
    public prcingPlan = new Subject();
    public currentEvent = new BehaviorSubject<any>('Home');

    constructor() {

    }
}
