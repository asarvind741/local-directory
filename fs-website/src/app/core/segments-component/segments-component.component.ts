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
<<<<<<< HEAD
    AOS.init()
=======
    AOS.init();
>>>>>>> fc4659e2cb20c526fe47a264494d62ef3ac0309d
  }
   

}
