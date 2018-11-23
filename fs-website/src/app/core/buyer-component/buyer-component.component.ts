import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-buyer-component',
  templateUrl: './buyer-component.component.html',
  styleUrls: ['./buyer-component.component.css']
})
export class BuyerComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
<<<<<<< HEAD
    AOS.init()
=======
    AOS.init();
>>>>>>> fc4659e2cb20c526fe47a264494d62ef3ac0309d
  }

}
