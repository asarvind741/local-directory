import { Component, OnInit, HostListener, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { RfqFeaturesComponent } from '../rfq-features/rfq-features.component';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  constructor() { }

  addClass: Boolean = false;
  @Output('features') features = new EventEmitter()
  @ViewChild('buyer-feature') buyerFeature: ElementRef
public moveToStructure():void {
  this.buyerFeature.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
}  
  ngOnInit() {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 100) {
      this.addClass = true;
    } else  {
        this.addClass = false
    }

  }


}
