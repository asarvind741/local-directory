import { Component, OnInit, HostListener, ViewChild, ElementRef, DoCheck, Renderer2, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-about-component',
  templateUrl: './about-component.component.html',
  styleUrls: ['./about-component.component.css']
})
export class AboutComponentComponent implements OnInit, AfterViewInit {
  @ViewChild('aboutus') aboutus: ElementRef;
  @HostListener("window:scroll", [])
  onWindowScroll() {
    AOS.init();
  }

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    if (this.aboutus.nativeElement.classList.contains('aos-animate')) {
    }
    AOS.init();
  }

  ngAfterViewInit(): void {
    if (this.aboutus.nativeElement.classList.contains('aos-animate')) {
      this.renderer.removeClass(this.aboutus.nativeElement, 'aos-animate')
    }
  }
}

