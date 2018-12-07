import { Injectable  } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})


export class SubjectService {
    public digitalSourcing = new Subject();
    public contact = new Subject();
    public jobPostPlan = new Subject();
    public prcingPlan = new Subject();

    constructor(){
        
    }
}