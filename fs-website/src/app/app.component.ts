import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { SubjectService } from './services/subjects.service';
import { Router, NavigationEnd } from '@angular/router';

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
    private router: Router
    ){}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  ngAfterViewInit(){
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
