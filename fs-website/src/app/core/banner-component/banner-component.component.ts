import { Component, OnInit, AfterViewInit } from '@angular/core';
import {TimelineMax} from "gsap/TweenMax";
import { easeLinear } from 'd3';
import * as $ from 'jquery';

declare let Linear: any

@Component({
  selector: 'app-banner-component',
  templateUrl: './banner-component.component.html',
  styleUrls: ['./banner-component.component.css']
})
export class BannerComponentComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {

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
        ease: easeLinear
      };
    
      tmax_tl.fromTo(globe_continents, globe_speed, map_from, map_to, 0);
      
      return tmax_tl;
    }
    
    spinGlobe();
  }

  ngAfterViewInit(){
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

}
