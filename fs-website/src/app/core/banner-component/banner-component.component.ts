import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { TimelineMax } from "gsap/TweenMax";
import { easeLinear } from 'd3';
import * as $ from 'jquery';
declare let Granim: any;

@Component({
  selector: 'app-banner-component',
  templateUrl: './banner-component.component.html',
  styleUrls: ['./banner-component.component.css']
})
export class BannerComponentComponent implements OnInit {
  @ViewChild('banner') banner: ElementRef;
  constructor() { }

  ngOnInit() {
    // console.log("window height", window.outerHeight);
    // this.banner.nativeElement.style.height = window.outerHeight + 'px';

    $(document).ready(function () {
      var winHei = $(window).height();
      $('.banner_sec').height(winHei);
      $('#canvas-basic').height(winHei);
    })

    $(window).resize(function () {
      //if($(window).width() > 767){
      $('.banner_sec').removeAttr('style');
      var winHei = $(window).height();
      $('.banner_sec').height(winHei);
      // }
    })
  }

  ngAfterViewInit() {
    var granimInstance = new Granim({
      element: '#canvas-basic',
      name: 'basic-gradient',
      direction: 'left-right', // 'diagonal', 'top-bottom', 'radial'
      opacity: [1, 1],
      isPausedWhenNotInView: true,
      states: {
        "default-state": {
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

}
