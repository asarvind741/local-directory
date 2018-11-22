import { Injectable  } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})


export class SubjectService {
    postSubject = new Subject<any>();

    updateSubject(data){
        this.postSubject.next(data);
    }
}