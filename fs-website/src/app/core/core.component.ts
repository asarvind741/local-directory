import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent {
  @ViewChild('aboutDigital',  { read: ElementRef }) aboutDigital: ElementRef;
  @ViewChild('jobPostPlan',  { read: ElementRef }) jobPostPlan: ElementRef;
  @ViewChild('contactUs',  { read: ElementRef }) contactUs: ElementRef;

  aboutDigitalSourcing: ElementRef;
  contact: ElementRef;
  jobPostPlanning: ElementRef;
  constructor(){
    
  }

  ngAfterViewInit(): void {
    this.aboutDigitalSourcing = this.aboutDigital;
    this.contact = this.contactUs;
    this.jobPostPlanning = this.jobPostPlan;
  }
}
