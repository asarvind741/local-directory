import { Component, OnInit, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-supplier-subscription-component',
  templateUrl: './supplier-subscription-component.component.html',
  styleUrls: ['./supplier-subscription-component.component.css']
})
export class SupplierSubscriptionComponentComponent implements OnInit {
@ViewChild('supplier2') supplier2: ElementRef;
@HostListener('click', ['$event'])
onClick(event: MouseEvent){
  this.renderer.removeClass(this.supplier2.nativeElement, 'aos-animate');
  setTimeout(() => {
    this.renderer.addClass(this.supplier2.nativeElement, 'aos-animate');
  }, 500)
  
}

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    AOS.init();
  }

}
