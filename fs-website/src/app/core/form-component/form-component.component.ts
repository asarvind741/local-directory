import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
<<<<<<< HEAD

=======
>>>>>>> fc4659e2cb20c526fe47a264494d62ef3ac0309d
@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
<<<<<<< HEAD
    AOS.init()
=======
    AOS.init();
>>>>>>> fc4659e2cb20c526fe47a264494d62ef3ac0309d
  }

}
