import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-supplier-subscription-component',
  templateUrl: './supplier-subscription-component.component.html',
  styleUrls: ['./supplier-subscription-component.component.css']
})
export class SupplierSubscriptionComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init()
  }

}
