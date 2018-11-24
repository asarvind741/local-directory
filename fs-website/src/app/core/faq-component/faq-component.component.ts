import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-faq-component',
  templateUrl: './faq-component.component.html',
  styleUrls: ['./faq-component.component.css']
})
export class FaqComponentComponent implements OnInit {

  constructor() { }
  active1=true
  ngOnInit() {
    AOS.init()
  }

}
