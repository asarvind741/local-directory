import { Component, OnInit, HostListener, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { SubjectService } from '../../services/subjects.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private subjectService: SubjectService) { }

  addClass: Boolean = false;
  currentEvent: String = 'Home';
  @Input('aboutDigital') aboutDigital;
  @Input('contact') contact;
  @Input('jobPostPlanning') jobPostPlanning;
  @ViewChild('header') header: ElementRef;

  ngOnInit() {
    $(document).ready(function(){
       if($(window).width() <768){
            $('.Menu_br li:not(.language) > a').on('click', function(){
              $('.navbar-toggler').click(); 
          })
       }


    })
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
    this.currentEvent = event.target.text;
    if (event.target.text === "Features") {
      this.aboutDigital.nativeElement.scrollIntoView({
        behavior: "smooth", block: "center", inline: "center", alignToTop: true
      })
    }
    else if (event.target.text == "Pricing") {
      var topOfTheElement = this.jobPostPlanning.nativeElement.offsetTop - this.header.nativeElement.offsetHeight;
      window.scroll({
        top: topOfTheElement,
        behavior: 'smooth'
      })

    }
    else if (event.target.text == "Contact") {
      var topOfTheElement = this.contact.nativeElement.offsetTop - this.header.nativeElement.offsetHeight;
      window.scroll({
        top: topOfTheElement,
        behavior: 'smooth'
      })
      // this.contact.nativeElement.scrollIntoView({
      //   behavior: "smooth", block: "center", inline: "center", alignToTop: true
      // })
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
