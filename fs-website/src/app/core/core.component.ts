import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent {
  @ViewChild('rfqFeature',  { read: ElementRef }) rfqFeature: ElementRef;
  featr: ElementRef;
  constructor(){
    
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('initissssssssss', this.rfqFeature.nativeElement)
    this.featr = this.rfqFeature;
    console.log("featr", this.rfqFeature)
  }
}
