import { Component, OnInit, HostListener, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { RfqFeaturesComponent } from '../rfq-features/rfq-features.component';
import { SubjectService } from '../../services/subjects.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  constructor(private subjectService: SubjectService) { }

  addClass: Boolean = false;
  @Input('aboutDigital') aboutDigital;
  @Input('contact') contact;
  @Input('jobPostPlanning') jobPostPlanning;
  @ViewChild('header') header: ElementRef;

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
    if (event.target.text === "Features") {
      var topOfTheElement = this.aboutDigital.nativeElement.offsetTop- this.header.nativeElement.offsetHeight;
      window.scroll({ top: topOfTheElement, behavior: 'smooth'})
    }
    else if (event.target.text == "Pricing") {
      var scrolledY = window.scrollY;
      var topOfTheElement = this.jobPostPlanning.nativeElement.offsetTop- this.header.nativeElement.offsetHeight - 10;
      window.scroll({ top: topOfTheElement, behavior: 'smooth'})
      

    }
    else if (event.target.text == "Contact") {

      // this.contact.nativeElement.scrollIntoView({
      //   behavior: "smooth", block: "center", inline: "center", alignToTop: true
      // })
      var topOfTheElement = this.contact.nativeElement.offsetTop- this.header.nativeElement.offsetHeight + 10;
      window.scroll({ top: topOfTheElement, behavior: 'smooth'})
    }
    else if (event.target.text == "Home") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }


}
