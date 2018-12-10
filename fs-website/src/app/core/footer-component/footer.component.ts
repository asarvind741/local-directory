import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { SubjectService } from '../../services/subjects.service';
import { Router } from '@angular/router';

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

  ngOnInit() {
    AOS.init()
  }

  onHelpPlanetClicked(event){
    let currentEvent = event.target.text;

    this.subjectService.currentEvent.next(currentEvent);
    this.router.navigate(['/help-planet']);
  }

}
