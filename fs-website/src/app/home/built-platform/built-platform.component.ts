import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-built-platform',
  templateUrl: './built-platform.component.html',
  styleUrls: ['./built-platform.component.css']
})
export class BuiltPlatformComponent implements OnInit {

  videoSrc: any = '../../../assets/images/old-poor-guy.mp4';
  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }
}
