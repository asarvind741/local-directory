import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Input } from '@angular/core';
import { TimelineMax, Linear } from 'gsap/TweenMax';
import { Router } from '@angular/router';

import * as $ from 'jquery';
import { SubjectService } from '../../services/subjects.service';
import { variable } from '@angular/compiler/src/output/output_ast';
declare let Granim: any;

@Component({
  selector: 'app-banner-component',
  templateUrl: './banner-component.component.html',
  styleUrls: ['./banner-component.component.css']
})
export class BannerComponentComponent implements OnInit {
  @ViewChild('banner') banner: ElementRef;
  @Input() aboutDigital: ElementRef;
  aboutDigital1: any;
  constructor(
    private subjectService: SubjectService,
    private router: Router
    ) { }

  ngOnInit() {

    this.subjectService.digitalSourcing
    .subscribe(data => {
      this.aboutDigital1 = data;
    });
    // console.log("window height", window.outerHeight);
    // this.banner.nativeElement.style.height = window.outerHeight + 'px';

    $(document).ready(function () {
      const winHei = $(window).height();
      $('.banner_sec, .banner_sec .container, #canvas-basic').height(winHei);

    });

    $(window).resize(function () {
      // if($(window).width() > 767){
      $('.banner_sec, .banner_sec .container, #canvas-basic').removeAttr('style');
      const winHei = $(window).height();
      $('.banner_sec, .banner_sec .container, #canvas-basic').height(winHei);
      // }
    });

    function spinGlobe() {
      const tmax_tl = new TimelineMax({
            delay: 0.1675,
            repeat: -1,
          });
      const globe_continents = [
            $('#globe #middle g path'),
            $('#globe #left g path')
          ];

      const globe_speed = 10;
      const map_from = {
        x: 0
      };
      const map_to = {
        x: 150,
        ease: Linear.easeOut
      };

      tmax_tl.fromTo(globe_continents, globe_speed, map_from, map_to, 0);

      return tmax_tl;
    }

    spinGlobe();
  }

  scrollToBanner() {
    console.log('thisssssssss', this.aboutDigital1);
    this.aboutDigital1.nativeElement.scrollIntoView(true);
  }

  AfterViewInit() {
    const granimInstance = new Granim({
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

  onGlobeClicked(event) {
    this.subjectService.currentEvent.next(event);
    this.router.navigate(['/help-planet']);
  }
}
