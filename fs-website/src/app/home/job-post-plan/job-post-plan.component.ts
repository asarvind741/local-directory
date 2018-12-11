import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { SubjectService } from '../../services/subjects.service';
import * as AOS from 'aos';
import * as $ from 'jquery';

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
    AOS.init();

  }

  ngAfterViewInit(): void {
  }

}
