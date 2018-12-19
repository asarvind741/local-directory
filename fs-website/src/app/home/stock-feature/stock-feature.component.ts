import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-stock-feature',
  templateUrl: './stock-feature.component.html',
  styleUrls: ['./stock-feature.component.css']
})
export class StockFeatureComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    AOS.init();
  }
}
