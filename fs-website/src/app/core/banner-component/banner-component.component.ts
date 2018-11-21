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
export class BannerComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
