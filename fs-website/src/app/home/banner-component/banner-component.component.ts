import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import { TimelineMax, Linear } from 'gsap/TweenMax';
import { Router } from '@angular/router';
import * as $ from 'jquery';

import { SubjectService } from '../../services/subjects.service';
declare let Granim: any;

@Component({
  selector: 'app-banner-component',
  templateUrl: './banner-component.component.html',
  styleUrls: ['./banner-component.component.css']
})
export class BannerComponentComponent implements OnInit, AfterViewInit {
  @ViewChild('banner') banner: ElementRef;
  @Input('aboutDigital') aboutDigital: ElementRef;
  aboutDigital1: any;
  constructor(
    private subjectService: SubjectService,
    private router: Router
  ) { }

  ngOnInit() {

    this.subjectService.digitalSourcing$
      .subscribe(data => {
        this.aboutDigital1 = data;
      });
    // console.log('window height', window.outerHeight);
    // this.banner.nativeElement.style.height = window.outerHeight + 'px';

    $(document).ready(function () {
      let winHei = $(window).height();
      $('.banner_sec, .banner_sec .container, #canvas-basic').height(winHei);

    });

    $(window).resize(function () {
      // if($(window).width() > 767){
      $('.banner_sec, .banner_sec .container, #canvas-basic').removeAttr('style');
      let winHei = $(window).height();
      $('.banner_sec, .banner_sec .container, #canvas-basic').height(winHei);
      // }
    });

    function spinGlobe() {
      let tmaxTl = new TimelineMax({
        delay: 0.1675,
        repeat: -1
      });

      let globeContinents = [
        $('#globe #middle g path'),
        $('#globe #left g path')
      ];

      let globeSpeed = 10;

      let mapFrom = {
        x: 0
      };

      let mapTo = {
        x: 150,
        ease: Linear.easeOut
      };

      tmaxTl.fromTo(globeContinents, globeSpeed, mapFrom, mapTo, 0);

      return tmaxTl;
    }

    spinGlobe();
  }

  scrollToBanner() {
    // console.log(this.aboutDigital1);
    this.aboutDigital1.nativeElement.scrollIntoView(true);
  }

  ngAfterViewInit() {
    new Granim({
      element: '#canvas-basic',
      name: 'basic-gradient',
      direction: 'left-right', // 'diagonal', 'top-bottom', 'radial'
      opacity: [1, 1],
      isPausedWhenNotInView: true,
      states: {
        'default-state': {
          gradients: [
            ['#360033', '#0b8793'],
            ['#33001b', '#ff0084'],
            ['#1a2a6c', '#b21f1f'],
            ['#cc2b5e', '#753a88'],
            ['#ee0979', '#ff6a00']
          ]
        }
      }
    });
  }

  onGlobeClicked(event): void {
    this.subjectService.currentEvent$.next(event);
    this.router.navigate(['/help-planet']);
  }

}
