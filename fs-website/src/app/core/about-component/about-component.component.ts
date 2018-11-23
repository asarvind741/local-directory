<<<<<<< HEAD
import { Component, OnInit, HostListener } from '@angular/core';
import * as AOS from 'aos';


=======
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
>>>>>>> fc4659e2cb20c526fe47a264494d62ef3ac0309d
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
