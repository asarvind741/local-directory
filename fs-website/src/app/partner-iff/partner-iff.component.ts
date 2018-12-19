import { Component, OnInit, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-partner-iff',
  templateUrl: './partner-iff.component.html',
  styleUrls: ['./partner-iff.component.css']
})
export class PartnerIffComponent implements AfterViewInit {

  constructor(private location: Location) { }

  ngAfterViewInit(): void {
    localStorage.setItem('path', 'partner-iff');
  }

}
