import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { VatManagementService } from '../../../../services/vat-management.service';
import { HttpResponse } from '@angular/common/http';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-selected-country-wizard',
  templateUrl: './selected-country-wizard.component.html',
  styleUrls: ['./selected-country-wizardcomponent.scss']
})
export class SelectedCountryWizardComponent implements OnInit {
  id: any;
  settings: Object;
  settings1: Object;
  settings3: Object;
  selectedStates: any;
  states: Array<Object> = [];
  anothrStates: Array<Object> = [];
  vatForm: FormGroup;
  allStatesSelected: Boolean = false;
  selectedStatedId: any;
  cities: Array<Object> = [];
  paymentMode = [ 
    { 'id': 1, 'itemName': 'Paypal'},
    { 'id': 1, 'itemName': 'Stripe'},
    { 'id': 1, 'itemName': 'Bank Transfer'}
  ]
  constructor(
    private activatedRoute: ActivatedRoute,
    private vatManagementService: VatManagementService
  ) {
    let stateArray = [];
    this.anothrStates = [];
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];

      this.vatManagementService.getStates(this.id)
        .subscribe((response: HttpResponse<any>) => {
          if (response.status === 200) {
            this.states = response['data'];
            console.log(this.states)
            this.states.forEach(state => {

              let element = { 'id': state['id'], 'itemName': state['name'] };
              stateArray.push(element);
            })
            this.anothrStates = stateArray;
          }
        })
    });


  }

  ngOnInit() {
    this.settings = {
      singleSelection: true,
      text: "Select State",
      // selectAllText: 'Select All',
      // unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      badgeShowLimit: 3
    };

    this.settings1 = {
      singleSelection: false,
      text: "Select Cities",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      badgeShowLimit: 3
    };

    
    this.settings3 = {
      singleSelection: false,
      text: "Select Payment Mode",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      badgeShowLimit: 3
    };
    this.createForm();
  }

  createForm() {
    this.vatForm = new FormGroup({
      states: new FormControl([]),
      paymentMode: new FormControl([]),
      cities: new FormControl([])
    })
  }

  showForm() {
    console.log("ssssssssssssssss", this.selectedStatedId)
    this.vatManagementService.getCitiesOfState(this.selectedStatedId)
    .subscribe((response: HttpResponse<any>) => {
      if(response.status === 200){
        console.log("respn", response)
        response['data'].forEach(city => {
          let element  = { 'id': city['id'], 'itemName': city['name']};
          this.cities.push(element)
        })
      }
    })

  }

  onItemSelect(item: any) {
    console.log("as", item)
    // this.allStatesSelected = false;
    this.selectedStatedId = item['id'];
  }
  OnItemDeSelect(item: any) {
    // this.allStatesSelected = false;
  }
  onSelectAll(items: any) {
    this.allStatesSelected = true;
    console.log(this.selectedStates);
  }
  onDeSelectAll(items: any) {
    this.allStatesSelected = false;
  }

}
