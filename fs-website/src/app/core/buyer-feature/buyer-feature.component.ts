import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-buyer-feature',
  templateUrl: './buyer-feature.component.html',
  styleUrls: ['./buyer-feature.component.css']
})
export class BuyerFeatureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
