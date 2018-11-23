import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';


@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  @ViewChild('aboutDigital',  { read: ElementRef }) aboutDigital: ElementRef;
  @ViewChild('jobPostPlan',  { read: ElementRef }) jobPostPlan: ElementRef;
  @ViewChild('contactUs',  { read: ElementRef }) contactUs: ElementRef;

  aboutDigitalSourcing: ElementRef;
  contact: ElementRef;
  jobPostPlanning: ElementRef;
  constructor(){
    
  }

  ngOnInit() {
   
  }

  ngAfterViewInit(): void {
    this.aboutDigitalSourcing = this.aboutDigital;
    this.contact = this.contactUs;
    this.jobPostPlanning = this.jobPostPlan;
  }
}
