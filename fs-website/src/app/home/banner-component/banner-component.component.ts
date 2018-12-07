import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import { TimelineMax, Linear } from "gsap/TweenMax";
import * as $ from 'jquery';
declare let Granim: any;

@Component({
  selector: 'app-banner-component',
  templateUrl: './banner-component.component.html',
  styleUrls: ['./banner-component.component.css']
})
export class BannerComponentComponent implements OnInit {
  @ViewChild('banner') banner: ElementRef;
  @Input('aboutDigital') aboutDigital: ElementRef;
  constructor() { }

  ngOnInit() {
    // console.log("window height", window.outerHeight);
    // this.banner.nativeElement.style.height = window.outerHeight + 'px';

    $(document).ready(function () {
      var winHei = $(window).height();
      $('.banner_sec, .banner_sec .container, #canvas-basic').height(winHei);

    })

    $(window).resize(function () {
      //if($(window).width() > 767){
      $('.banner_sec, .banner_sec .container, #canvas-basic').removeAttr('style');
      var winHei = $(window).height();
      $('.banner_sec, .banner_sec .container, #canvas-basic').height(winHei);
      // }
    })

    function spinGlobe() {
      var tmax_tl = new TimelineMax({
            delay: 0.1675,
            repeat: -1 
          });
    
      var globe_continents = [
            $('#globe #middle g path'),
            $('#globe #left g path')
          ];
    
      var globe_speed = 10;
    
      var map_from = {
        x: 0
      };
    
      var map_to = {
        x: 150,
        ease: Linear.easeOut
      };
    
      tmax_tl.fromTo(globe_continents, globe_speed, map_from, map_to, 0);
      
      return tmax_tl;
    }
    
    spinGlobe();
  }

  scrollToBanner(){
    this.aboutDigital.nativeElement.scrollIntoView(true);
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