import { Component, OnInit, Input } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-buyer-component',
  templateUrl: './buyer-component.component.html',
  styleUrls: ['./buyer-component.component.css']
})
export class BuyerComponentComponent implements OnInit {
@Input('buyerPlans') buyerPlans: any;
  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
