import { Component, OnInit, HostListener, ViewChild, ElementRef, Input, DoCheck } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { SubjectService } from '../../services/subjects.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  addClass: Boolean = false;
  currentEvent: String = '';
  @Input('aboutDigital') aboutDigital;
  @Input('contact') contact;
  @Input('jobPostPlanning') jobPostPlanning;
  @ViewChild('header') header: ElementRef;
  path: any;
  constructor(
    private router: Router,
    private subjectService: SubjectService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.path = this.location.path();
    if (this.path === '/mission') {
      this.subjectService.currentEvent$.next('Mission');
    } else if (this.path === '/help-planet') {
      this.subjectService.currentEvent$.next('Parnter-Iff');
    }
    this.subjectService.currentEvent$
      .subscribe(data => {
        this.currentEvent = data;
      });
    $(document).ready(function () {
      if ($(window).width() < 768) {
        $('.Menu_br li:not(.language) > a').on('click', function () {
          $('.navbar-toggler').click();
        });
      }
    });
  }
  ngDoCheck() {
    this.path = this.location.path();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const number1 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number1 > 100) {
      if (this.path === '') {
        if (number1 < 400) {
          this.currentEvent = 'Home';
        } else if (number1 > 400 && number1 < 700) {
          this.currentEvent = 'Features';
        } else if (number1 > 6423 && number1 < 7200) {
          this.currentEvent = 'Pricing';
        } else if (number1 > 12900 && number1 < 13700) {
          this.currentEvent = 'Contact';
        } else {
          this.currentEvent = '';
        }
      }
      this.addClass = true;
    } else {
      this.addClass = false;
    }

  }

  scrollThis(event) {
    if (this.currentEvent === 'Mission') {
      this.router.navigate(['/']).then(() => {
        if (event.target.text === 'Features') {
          this.subjectService.currentEvent$.next(event.target.text);
          // this.aboutDigital.nativeElement.scrollIntoView({
          //   behavior: 'smooth', block: 'center', inline: 'center', alignToTop: true
          // })
        } else if (event.target.text === 'Pricing') {
          let topOfTheElement = this.jobPostPlanning.nativeElement.offsetTop - this.header.nativeElement.offsetHeight;
          window.scroll({
            top: topOfTheElement,
            behavior: 'smooth'
          });
          this.subjectService.currentEvent$.next(event.target.text);

        } else if (event.target.text === 'Contact') {
          this.contact.nativeElement.scrollIntoView({
            behavior: 'smooth', block: 'center', inline: 'center', alignToTop: true
          });
          this.subjectService.currentEvent$.next(event.target.text);
        }
      });
    } else {
      if (event.target.text === 'Features') {
        this.subjectService.currentEvent$.next(event.target.text);
        // this.aboutDigital.nativeElement.scrollIntoView({
        //   behavior: 'smooth', block: 'center', inline: 'center', alignToTop: true
        // })

      } else if (event.target.text === 'Pricing') {
        this.subjectService.currentEvent$.next(event.target.text);
        let topOfTheElement = this.jobPostPlanning.nativeElement.offsetTop - this.header.nativeElement.offsetHeight;
        window.scroll({
          top: topOfTheElement,
          behavior: 'smooth'
        });
      } else if (event.target.text === 'Contact') {
        this.subjectService.currentEvent$.next(event.target.text);
        let topOfTheElement = this.contact.nativeElement.offsetTop - this.header.nativeElement.offsetHeight;
        window.scroll({
          top: topOfTheElement,
          behavior: 'smooth'
        });
      }
    }

  }

  onMissionClick(event) {
    this.currentEvent = event.target.text;
    this.subjectService.currentEvent$.next(this.currentEvent);
    this.router.navigate(['/mission']);
  }

  onHomeClicked(event) {

    this.currentEvent = event.target.text;
    this.subjectService.currentEvent$.next(event.target.text);
    this.router.navigate(['/']);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

  }

  doSmth(reachedTarget): void {
    const number1 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number1 < 6500 && reachedTarget === 'Pricing') {
      window.scrollTo({
        top: 6660,
        left: 0,
        behavior: 'smooth'
      });

    } else if (number1 < 500 && reachedTarget === 'Features') {
      window.scrollTo({
        top: 600,
        left: 0,
        behavior: 'smooth'
      });

    } else if (number1 < 12900 && reachedTarget === 'Contact') {
      window.scrollTo({
        top: 13000,
        left: 0,
        behavior: 'smooth'
      });

    }
  }
}
