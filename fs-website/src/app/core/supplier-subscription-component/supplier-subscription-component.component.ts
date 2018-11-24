import { Component, OnInit, HostListener, Renderer2, ViewChild, ElementRef } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-supplier-subscription-component',
  templateUrl: './supplier-subscription-component.component.html',
  styleUrls: ['./supplier-subscription-component.component.css']
})
export class SupplierSubscriptionComponentComponent implements OnInit {
  active1 = true;
  applyClass = 1;
  @ViewChild('supplier1') supplier1: ElementRef;
  @ViewChild('supplier2') supplier2: ElementRef;
  @ViewChild('stockist1') stockist1: ElementRef;
  @ViewChild('stockist2') stockist2: ElementRef;
  @ViewChild('reseller1') reseller1: ElementRef;
  @ViewChild('reseller2') reseller2: ElementRef;

  @HostListener('click', ['$event'])
  onclick(event: MouseEvent) {

    // console.log(event)
    // this.renderer.removeClass(
    //   this.supplier1.nativeElement, 'aos-animate'
    // )

  }
  constructor(private renderer: Renderer2) { }
  ngOnInit() {
    AOS.init()
  }

  classToApply(event) {
    if (event.target.text === "supplier")
      this.applyClass = 1;
    else if (event.target.text === "stockist")
      this.applyClass = 2;
    else if (event.target.text === "External resources")
      this.applyClass = 3;
  }

}
