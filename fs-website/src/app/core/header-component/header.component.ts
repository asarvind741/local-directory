import { Component, OnInit, HostListener, ViewChild, ElementRef, Output, EventEmitter, Input, AfterViewInit, OnChanges, DoCheck } from '@angular/core';
import { SubjectService } from '../../services/subjects.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit, DoCheck {

  path: any;
  constructor(
    private router: Router,
    private subjectService: SubjectService,
    private location: Location
  ) { }

  addClass: Boolean = false;
  currentEvent: String = '';
  @Input('aboutDigital') aboutDigital;
  @Input('contact') contact;
  @Input('jobPostPlanning') jobPostPlanning;
  @ViewChild('header') header: ElementRef;

  ngOnInit() {
    this.path = this.location.path();
    if (this.path === "/mission") {
      this.subjectService.currentEvent.next('Mission');
    }
    else if(this.path === "/help-planet"){
      this.subjectService.currentEvent.next('Parnter-Iff');
    }
    


    this.subjectService.currentEvent
      .subscribe(data => {
        this.currentEvent = data;
      });

    $(document).ready(function () {
      if ($(window).width() < 768) {
        $('.Menu_br li:not(.language) > a').on('click', function () {
          $('.navbar-toggler').click();
        })
      }


    })
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

  }
  ngDoCheck() {
    this.path = localStorage.getItem('path');
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 100) {
      if (this.path === '') {
        if (number < 400) {
          this.currentEvent = "Home"
        }
        else if (number > 400 && number < 700) {
          this.currentEvent = "Features"
        }
        else if (number > 6423 && number < 7200) {
          this.currentEvent = "Pricing"
        }
        else if (number > 12900 && number < 13700) {
          this.currentEvent = "Contact"
        }
        else {
          this.currentEvent = "";
        }
      }
      this.addClass = true;
    } else {
      this.addClass = false
    }

  }

  scrollThis(event) {
    if (this.currentEvent === "Mission") {
      this.router.navigate(['/']).then(() => {
        if (event.target.text === "Features") {
          this.subjectService.currentEvent.next(event.target.text);
          // this.aboutDigital.nativeElement.scrollIntoView({
          //   behavior: "smooth", block: "center", inline: "center", alignToTop: true
          // })


        }
        else if (event.target.text === "Pricing") {
          var topOfTheElement = this.jobPostPlanning.nativeElement.offsetTop - this.header.nativeElement.offsetHeight;
          window.scroll({
            top: topOfTheElement,
            behavior: 'smooth'
          })
          this.subjectService.currentEvent.next(event.target.text);

        }
        else if (event.target.text == "Contact") {
          this.contact.nativeElement.scrollIntoView({
            behavior: "smooth", block: "center", inline: "center", alignToTop: true
          })
          this.subjectService.currentEvent.next(event.target.text);
        }
      })
    }
    else {
      if (event.target.text === "Features") {
        this.subjectService.currentEvent.next(event.target.text);
        // this.aboutDigital.nativeElement.scrollIntoView({
        //   behavior: "smooth", block: "center", inline: "center", alignToTop: true
        // })

      }
      else if (event.target.text === "Pricing") {
        this.subjectService.currentEvent.next(event.target.text);
        var topOfTheElement = this.jobPostPlanning.nativeElement.offsetTop - this.header.nativeElement.offsetHeight;
        window.scroll({
          top: topOfTheElement,
          behavior: 'smooth'
        })


      }
      else if (event.target.text == "Contact") {
        this.subjectService.currentEvent.next(event.target.text);
        var topOfTheElement = this.contact.nativeElement.offsetTop - this.header.nativeElement.offsetHeight;
        window.scroll({
          top: topOfTheElement,
          behavior: 'smooth'
        })
      }
    }

  }

  onMissionClick(event) {
    this.currentEvent = event.target.text;
    this.subjectService.currentEvent.next(this.currentEvent);
    this.router.navigate(['/mission']);
  }

  onHomeClicked(event) {

    this.currentEvent = event.target.text;
    this.subjectService.currentEvent.next(event.target.text);
    this.router.navigate(['/']);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

  }

  doSmth(reachedTarget): void {
    console.log('Yeah, we reached our destination', reachedTarget);
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number < 6500 && reachedTarget === "Pricing") {
      window.scrollTo({
        top: 6660,
        left: 0,
        behavior: 'smooth'
      });

    }
    else if (number < 500 && reachedTarget === "Features") {
      window.scrollTo({
        top: 600,
        left: 0,
        behavior: 'smooth'
      });

    }
    else if (number < 12900 && reachedTarget === "Contact") {
      window.scrollTo({
        top: 13000,
        left: 0,
        behavior: 'smooth'
      });

    }
  }
}
