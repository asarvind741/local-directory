import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Router } from '@angular/router';

import { SubjectService } from '../../services/subjects.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor(
    private subjectService: SubjectService,
    private router: Router
  ) { }

  ngOnInit(): void {
    AOS.init()
  }

  onHelpPlanetClicked(event) {
    let currentEvent = event.target.text;

    this.subjectService.currentEvent$.next(currentEvent);
    this.router.navigate(['/help-planet']);
  }

  onPartnerIffClicked(event) {
    let currentEvent = event.target.text;

    this.subjectService.currentEvent$.next(currentEvent);
    this.router.navigate(['/partner-iff']);
  }
}

