import { Component, ViewChild, ElementRef, ChangeDetectorRef, AfterViewInit, OnInit } from '@angular/core';
import { SubjectService } from '../services/subjects.service';
import { Location } from '@angular/common';
import { PlanService } from '../services/plan.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('aboutDigital', { read: ElementRef }) aboutDigital: ElementRef;
  @ViewChild('jobPostPlan', { read: ElementRef }) jobPostPlan: ElementRef;
  @ViewChild('contactUs', { read: ElementRef }) contactUs: ElementRef;

  aboutDigitalSourcing: ElementRef;
  contact: ElementRef;
  jobPostPlanning: ElementRef;
  buyerPlans: any;
  constructor(
    private cdr: ChangeDetectorRef,
    private subjectService: SubjectService,
    private location: Location,
    private planService: PlanService
  ) { }

  ngOnInit(): void {
    this.planService.getPlans('Buyer')
      .subscribe((response: HttpResponse<any>) => {
        if (response.status === 200) {
          this.buyerPlans = response['data'];
        }
      })
  }

  ngAfterViewInit(): void {
    localStorage.setItem('path', this.location.path())
    this.cdr.detectChanges();
    if (this.aboutDigital !== undefined) {
      // this.aboutDigitalSourcing = this.aboutDigital;
      // this.contact = this.contactUs;
      // this.jobPostPlanning = this.jobPostPlan;
      this.subjectService.digitalSourcing$.next(this.aboutDigital);
      this.subjectService.contact$.next(this.contactUs);
      this.subjectService.jobPostPlan$.next(this.jobPostPlan);
    }
  }
}
