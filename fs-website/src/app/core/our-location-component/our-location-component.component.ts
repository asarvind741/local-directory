import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

import * as AOS from 'aos';
declare var google: any;

@Component({
  selector: 'app-our-location-component',
  templateUrl: './our-location-component.component.html',
  styleUrls: ['./our-location-component.component.css']
})
export class OurLocationComponentComponent implements OnInit {
  chart: any;
  data: any;
  options: any = { title: '' };
  selected: String = 'Buyer';
  active1 = true;
  active2 = false;
  @ViewChild('showMap') showMap: ElementRef;

  constructor() { }

  ngOnInit() {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['City', 'Country'],
        ['Montreal', 'Canada'],
        ['Los Angeles', 'USA'],
        ['New York city', 'USA'],
        ['London', 'UK'],
        ['Paris', 'France'],
        ['Milano', 'Italy'],
        ['Dusseldorf', 'Germany'],
        ['Amsterdam', 'Netherlands'],
        ['Istanbul', 'Turkey'],
        ['Moscow', 'Russia'],
        ['Dubai', 'UAE'],
        ['Hong Kong', 'China'],
        ['Shanghai', 'China']
      ]);

      var options = {
        title: 'Buyer'
      };

      var chart = new google.visualization.GeoChart(document.getElementById('piechart'));
      chart.draw(data, options);
    }
    AOS.init()
  }



  showChart(event) {

    if (event.target.text == "Supplier") {
      this.active2 = true;
      this.active1 = false;
      google.charts.load('current', { 'packages': ['corechart'] });
      google.charts.setOnLoadCallback(this.drawChart2());



    }

    else if (event.target.text == "Buyer") {
      this.active2 = false;
      this.active1 = true;
      google.charts.load('current', { 'packages': ['corechart'] });
      google.charts.setOnLoadCallback(this.drawChart1());
      var self = this;


    }
  }

  drawChart2() {
    var data = google.visualization.arrayToDataTable([
      ['USA'], ['Mexico'], ['Brazil'], ['Argentina'], ['UK'], ['France'], ['Italy'], ['Spain'], ['germany'], ['hungary'], ['romania'], ['Bulgaria'], ['greece'], ['turkey'], ['egypt'], ['tunisia'], ['morocco'],
['pakistan'], ['India'], ['Nepal'], ['Bangladesh'], ['Myanmar'], ['thailand'], ['vietnam'], ['laos'], ['china'], ['philipines'], ['south korean'], ['Japan'], ['cambodia'], ['malaysia'], ['Indonesia'], ['South Africa'],['Mauritius'], ['Ethiopy'], ['Somalia'], ['Sudan']
    ]);

    var options = {
      title: 'Buyer'
    };

    var chart = new google.visualization.GeoChart(document.getElementById('piechart'));
    chart.draw(data, options);
  }

  drawChart1() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Popularity'],
      ['Germany', 200],
      ['United States', 300],
      ['Brazil', 400],
      ['Canada', 500],
      ['France', 600],
      ['RU', 700]
    ]);

    var options = {
      title: 'Buyer'
    };

    var chart = new google.visualization.GeoChart(document.getElementById('piechart'));
    chart.draw(data, options);
  }
}
