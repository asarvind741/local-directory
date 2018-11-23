import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
<<<<<<< HEAD

=======
>>>>>>> fc4659e2cb20c526fe47a264494d62ef3ac0309d
@Component({
  selector: 'app-faq-component',
  templateUrl: './faq-component.component.html',
  styleUrls: ['./faq-component.component.css']
})
export class FaqComponentComponent implements OnInit {

  constructor() { }
  active1=true
  ngOnInit() {
<<<<<<< HEAD
    AOS.init()
=======
    AOS.init();
>>>>>>> fc4659e2cb20c526fe47a264494d62ef3ac0309d
  }

}
