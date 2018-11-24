import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-selected-country-wizard',
  templateUrl: './selected-country-wizard.component.html',
  styleUrls: ['./selected-country-wizardcomponent.scss']
})
export class SelectedCountryWizardComponent implements OnInit {
 id: any;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      console.log("country id", this.id)
    })
   }

  ngOnInit() {
   
  }

}
