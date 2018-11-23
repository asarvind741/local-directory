import { Component, OnInit, ViewChild } from '@angular/core';
import * as AOS from 'aos';
import { Subject } from 'rxjs';
import { SubjectService } from '../../services/subjects.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-job-post-plan',
  templateUrl: './job-post-plan.component.html',
  styleUrls: ['./job-post-plan.component.css']
})
export class JobPostPlanComponent implements OnInit {
  @ViewChild('postPlan') postPlan;
  postSubject = new Subject<any>();
  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
<<<<<<< HEAD
    AOS.init()
=======
    AOS.init();
>>>>>>> fc4659e2cb20c526fe47a264494d62ef3ac0309d
  }

  ngAfterViewInit(): void {
    this.subjectService.updateSubject(this.postPlan);
  }

}
