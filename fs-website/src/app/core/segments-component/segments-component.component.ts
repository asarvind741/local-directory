import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-segments-component',
  templateUrl: './segments-component.component.html',
  styleUrls: ['./segments-component.component.css']
})
export class SegmentsComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }
   

}
