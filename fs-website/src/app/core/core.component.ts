import { Component, ViewChild, ElementRef, ChangeDetectorRef  } from '@angular/core';

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
  constructor(private cdr: ChangeDetectorRef){
    
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
    if(this.aboutDigital !== undefined)
    this.aboutDigitalSourcing = this.aboutDigital;
    this.contact = this.contactUs;
    this.jobPostPlanning = this.jobPostPlan;
  }
}
