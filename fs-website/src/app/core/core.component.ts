import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent {
  @ViewChild('feat',  { read: ElementRef }) feat: ElementRef;
  featr: ElementRef;
  constructor(){
    this.featr = this.feat;
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('initissssssssss', this.feat.nativeElement)
    this.featr = this.feat;
    console.log("featr", this.feat)
  }
}
