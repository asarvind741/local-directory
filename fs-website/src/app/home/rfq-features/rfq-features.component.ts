import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-rfq-features',
  templateUrl: './rfq-features.component.html',
  styleUrls: ['./rfq-features.component.css']
})
export class RfqFeaturesComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    AOS.init()
  }
}

