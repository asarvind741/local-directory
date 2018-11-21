import { Component, OnInit, HostListener, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { RfqFeaturesComponent } from '../rfq-features/rfq-features.component';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  constructor() { }

  addClass: Boolean = false;
  @Input('aboutDigital') aboutDigital;
  @Input('contact') contact;
  @Input('jobPostPlanning') jobPostPlanning;

  ngOnInit() {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 100) {
      this.addClass = true;
    } else {
      this.addClass = false
    }

  }

  scrollThis(event) {
    console.log(event.target.text);
    if (event.target.text === "Features") {

      this.aboutDigital.nativeElement.scrollIntoView({
        behavior: "smooth", block: "center", inline: "center", alignToTop: true
      })
    }
    else if (event.target.text == "Pricing") {

      this.jobPostPlanning.nativeElement.scrollIntoView({
        behavior: "smooth", block: "start", inline: "start", alignToTop: true
      })
    }
    else if (event.target.text == "Contact") {

      this.contact.nativeElement.scrollIntoView({
        behavior: "smooth", block: "center", inline: "center", alignToTop: true
      })
    }
  }


}
