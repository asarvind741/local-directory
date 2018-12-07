import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-supplier-component',
  templateUrl: './supplier-component.component.html',
  styleUrls: ['./supplier-component.component.css']
})
export class SupplierComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init()
  }

}
