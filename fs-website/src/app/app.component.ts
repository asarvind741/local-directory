import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { SubjectService } from './services/subjects.service';

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

  constructor(private subjectService: SubjectService){}

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
