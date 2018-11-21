import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: [
    './profile.component.scss',
    '../../../../assets/icon/icofont/css/icofont.scss'
  ],
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({opacity: 0}),
        animate('400ms ease-in-out', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translate(0)'}),
        animate('400ms ease-in-out', style({opacity: 0}))
      ])
    ])
  ]
})
export class ProfileComponent implements OnInit {
  editProfile = true;
  editProfileIcon = 'icofont-edit';
  myProfileForm: FormGroup;

  editAbout = true;
  editAboutIcon = 'icofont-edit';

  public editor;
  public editorContent: string;

  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  profitChartOption: any;

  rowsContact = [];
  loadingIndicator = true;
  reorderable = true;
  currentUser: any;
  statuss: Array<String> = ['Married', 'Single'];

  constructor() {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    let fullName = this.currentUser.fullName ? this.currentUser.fullName: ''
    let firstName = this.currentUser.firstName ? this.currentUser.firstName : '';
    let lastName = this.currentUser.lastName ? this.currentUser.lastName : '';
    let email = this.currentUser.email ? this.currentUser.email : '';
    let gender = this.currentUser.gender ? this.currentUser.gender : '';
    let password = this.currentUser.password ? this.currentUser.password : '';
    let meritalStatus = this.currentUser.meritalStatus ? this.currentUser.meritalStatus :'';
    let status = this.currentUser.status ? this.currentUser.status: '';
    let mobile = this.currentUser.mobile ? this.currentUser.mobile : '';
    let currentLocation = this.currentUser.currentLocation ? this.currentUser.currentLocation : '';
    let twitterId = this.currentUser.twitterId ? this.currentUser.twitterId : '';
    let linkedInId = this.currentUser.linkedInId ? this.currentUser.linkedInId : '';
    let skypeId = this.currentUser.skypeId ? this.currentUser.skypeId: '';
    let websiteAddress = this.currentUser.websiteAddress ? this.currentUser.skypeId: '';
    this.myProfileForm = new FormGroup({
      'firstName': new FormControl(firstName),
      'lastName': new FormControl(lastName),
      'email': new FormControl(email),
      'password': new FormControl(password),
      'status': new FormControl(status),
      'mobile': new FormControl(mobile),
      'fullName': new FormControl(fullName),
      'gender': new FormControl(gender),
      'currentLocation': new FormControl(currentLocation),
      'twitterId': new FormControl(twitterId),
      'linkedInId': new FormControl(linkedInId),
      'websiteAddress': new FormControl(websiteAddress),
      'meritalStatus': new FormControl(meritalStatus)
    })
  }

  

  toggleEditProfile() {
    this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editProfile = !this.editProfile;
  }

  toggleEditAbout() {
    this.editAboutIcon = (this.editAboutIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editAbout = !this.editAbout;
  }

}
