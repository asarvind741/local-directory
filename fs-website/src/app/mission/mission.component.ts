import { Component, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements AfterViewInit {

  constructor(private location: Location) { }

  ngAfterViewInit(): void {
    localStorage.setItem('path', this.location.path());
  }
}
