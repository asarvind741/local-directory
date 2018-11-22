import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-built-platform',
  templateUrl: './built-platform.component.html',
  styleUrls: ['./built-platform.component.css']
})
export class BuiltPlatformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
