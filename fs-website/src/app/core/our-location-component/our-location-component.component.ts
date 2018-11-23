import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
<<<<<<< HEAD

=======
>>>>>>> fc4659e2cb20c526fe47a264494d62ef3ac0309d
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
    AOS.init();
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
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
      ['Country', 'Popularity'],
      ['Germany', 200],
      ['United States', 300],
      ['Brazil', 200],
      ['Canada', 100],
      ['France', 500],
      ['RU', 400]
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
