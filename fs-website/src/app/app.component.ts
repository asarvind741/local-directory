import { Component, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner'
import { SubjectService } from './services/subjects.service';
import { Router, NavigationEnd, NavigationStart, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'b2b2';
  loading: Boolean;
  aboutDigitalSourcing: ElementRef;
  contact: ElementRef;
  jobPostPlanning: ElementRef;

  constructor(
    private subjectService: SubjectService,
    private router: Router,
    private spinner: NgxSpinnerService
    ){
      this.loading = true;
    }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  ngAfterViewInit(){

    this.router.events
    .subscribe((event)=>{
      if(event instanceof NavigationStart){
        this.loading = true;
        console.log("asss")
        this.spinner.show();
      }
      else if(
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel
      ){
        this.loading = false;
        this.spinner.hide();
      }
    })
    this.subjectService.digitalSourcing
    .subscribe((data:ElementRef)=>{
      this.aboutDigitalSourcing = data;
    });

    this.subjectService.contact
    .subscribe((data:ElementRef)=>{
      this.contact = data;
    });

    this.subjectService.jobPostPlan
    .subscribe((data:ElementRef)=>{
      this.jobPostPlanning = data;
    })
  }
  
}
