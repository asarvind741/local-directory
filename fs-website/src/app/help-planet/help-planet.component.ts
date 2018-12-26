import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-help-planet',
  templateUrl: './help-planet.component.html',
  styleUrls: ['./help-planet.component.css']
})
export class HelpPlanetComponent implements OnInit, AfterViewInit {
  constructor(private location: Location) { }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    localStorage.setItem('path', this.location.path());
  }
}
