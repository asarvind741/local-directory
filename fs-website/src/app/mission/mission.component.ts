import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit, AfterViewInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    localStorage.setItem('path', this.location.path())
  }

}
