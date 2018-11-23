import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
<<<<<<< HEAD

=======
>>>>>>> fc4659e2cb20c526fe47a264494d62ef3ac0309d
@Component({
  selector: 'app-stock-feature',
  templateUrl: './stock-feature.component.html',
  styleUrls: ['./stock-feature.component.css']
})
export class StockFeatureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
<<<<<<< HEAD
    AOS.init()
=======
    AOS.init();
>>>>>>> fc4659e2cb20c526fe47a264494d62ef3ac0309d
  }

}
