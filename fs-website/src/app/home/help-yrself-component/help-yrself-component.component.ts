import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-help-yrself-component',
  templateUrl: './help-yrself-component.component.html',
  styleUrls: ['./help-yrself-component.component.css']
})
export class HelpYrselfComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }
}
