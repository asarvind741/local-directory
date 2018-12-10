import { Component, OnInit, HostListener, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { SubjectService } from '../../services/subjects.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  path: any;
  constructor(
    private router: Router,
    private subjectService: SubjectService,
    private location: Location
    ) { }
  
  addClass: Boolean = false;
  currentEvent: String = 'Home';
  @Input('aboutDigital') aboutDigital;
  @Input('contact') contact;
  @Input('jobPostPlanning') jobPostPlanning;
  @ViewChild('header') header: ElementRef;

  ngOnInit() {
    this.path = this.location.path();
    if(this.path === "/mission"){
      this.subjectService.currentEvent.next('Mission')
    }
    this.subjectService.currentEvent
      .subscribe(data => {
        this.currentEvent = data;
        console.log("current event======>", this.currentEvent);
        console.log("current pat======>", this.path);
      });

    $(document).ready(function () {
      if ($(window).width() < 768) {
        $('.Menu_br li:not(.language) > a').on('click', function () {
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
    if (this.currentEvent === "Mission") {
      this.router.navigate(['/']).then(() => {
        if (event.target.text === "Features") {
          this.subjectService.currentEvent.next(event.target.text);
          console.log("native element 1", this.aboutDigital)
          this.aboutDigital.nativeElement.scrollIntoView({
            behavior: "smooth", block: "center", inline: "center", alignToTop: true
          })


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
          // console.log("sssssssssssss pricing");
          // this.subjectService.currentEvent.next(event.target.text);
          // var topOfTheElement = this.contact.nativeElement.offsetTop - this.header.nativeElement.offsetHeight;
          // window.scroll({
          //   top: topOfTheElement,
          //   behavior: 'smooth'
          // })

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
        this.aboutDigital.nativeElement.scrollIntoView({
          behavior: "smooth", block: "center", inline: "center", alignToTop: true
        })

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

        // this.contact.nativeElement.scrollIntoView({
        //   behavior: "smooth", block: "center", inline: "center", alignToTop: true
        // })
      }
      // else if (this.currentEvent == "Mission" && event.target.text == "Features") {
      //   console.log("aaaaaaaaaaaaaa", this.currentEvent);
      //   this.router.navigate(['/'])
      //     .then(() => {
      //       this.subjectService.currentEvent.next(event.target.text);
      //       this.aboutDigital.nativeElement.scrollIntoView({
      //         behavior: "smooth", block: "center", inline: "center", alignToTop: true
      //       });

      //     })


      // }
      // else if (this.currentEvent === "Mission" && event.target.text == "Pricing") {
      //   console.log("sssssssssssss pricing");
      //   this.router.navigate(['/'])
      //     .then(() => {
      //       this.subjectService.currentEvent.next(event.target.text);
      //       var topOfTheElement = this.jobPostPlanning.nativeElement.offsetTop - this.header.nativeElement.offsetHeight;
      //       window.scroll({
      //         top: topOfTheElement,
      //         behavior: 'smooth'
      //       })

      //     })


      // }
      // else if (this.currentEvent === "Mission" && event.target.text == "Contact") {
      //   console.log("sssssssssssss pricing");
      //   this.router.navigate(['/'])
      //     .then(() => {
      //       this.subjectService.currentEvent.next(event.target.text);
      //       var topOfTheElement = this.contact.nativeElement.offsetTop - this.header.nativeElement.offsetHeight;
      //       window.scroll({
      //         top: topOfTheElement,
      //         behavior: 'smooth'
      //       })

      //     })

      //   // this.contact.nativeElement.scrollIntoView({
      //   //   behavior: "smooth", block: "center", inline: "center", alignToTop: true
      //   // })
      // }
      // else if (event.target.text == "Home") {
      //   window.scrollTo({
      //     top: 0,
      //     left: 0,
      //     behavior: 'smooth'
      //   });
      // }
    }

  }

  onMissionClick(event) {
    this.currentEvent = event.target.text;
    this.subjectService.currentEvent.next(this.currentEvent);
    this.router.navigate(['/mission']);
  }

  onHomeClicked(event) {
    console.log("sdsds", this.path);
    
    this.currentEvent = event.target.text;
    console.log("current", this.currentEvent)
    this.subjectService.currentEvent.next(event.target.text);
    this.router.navigate(['/']);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

  }


}
