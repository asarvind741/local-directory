import { Component, OnInit, HostListener } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-about-component',
  templateUrl: './about-component.component.html',
  styleUrls: ['./about-component.component.css']
})
export class AboutComponentComponent implements OnInit {
  @HostListener("window:scroll", [])
  onWindowScroll() {
    AOS.init();
  }

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
