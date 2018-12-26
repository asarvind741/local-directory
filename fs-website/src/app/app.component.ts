import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { SubjectService } from './services/subjects.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, NavigationEnd, NavigationCancel, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'b2b2';
  aboutDigitalSourcing: ElementRef;
  contact: ElementRef;
  jobPostPlanning: ElementRef;

  constructor(
    private subjectService: SubjectService,
    private router: Router,
    private spinner: NgxSpinnerService
    ) {}

  OnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  ngAfterViewInit() {

    this.router.events
    .subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.spinner.show();
      } else if (event instanceof NavigationCancel || event instanceof NavigationEnd) {
        this.spinner.hide( );
      }
    });
    this.subjectService.digitalSourcing
    .subscribe((data: ElementRef) => {
      this.aboutDigitalSourcing = data;
    });

    this.subjectService.contact
    .subscribe((data: ElementRef) => {
      this.contact = data;
    });

    this.subjectService.jobPostPlan
    .subscribe((data: ElementRef) => {
      this.jobPostPlanning = data;
    });
  }
}
