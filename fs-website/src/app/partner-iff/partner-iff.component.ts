import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-partner-iff',
  templateUrl: './partner-iff.component.html',
  styleUrls: ['./partner-iff.component.css']
})
export class PartnerIffComponent implements OnInit, AfterViewInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    localStorage.setItem('path', 'partner-iff')
  }

}
