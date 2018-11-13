import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.servivce';

@Component({
    selector: 'app-wizard-custom',
    templateUrl: './wizard-custom.component.html',
    styleUrls: ['./wizard-custom.component.scss']
})
export class WizardCustomComponent implements OnInit {

    constructor(private userService: UserService) { }

    userProfileForm: FormGroup;
    userId: any;

    ngOnInit() {
      this.userId = JSON.parse(localStorage.getItem('currentUser'))._id;
      this.createForm();

    }

    createForm() {
      let firstName  = '';
      let lastName = '';
      let email = '';
      let mobile = '';
      let addresses = new FormArray([]);
        this.userService.getUser(this.userId)
        .subscribe(response => {
          let userData = response['data'];
          console.log("user data", userData.email)
          firstName = userData.firstName ? userData.firstName: '';
          lastName = userData.lastName ? userData.lastName: '';
          mobile = userData.mobile ? userData.mobile: '';
          email = userData.email ? userData.email: '';
          if(userData.address){
              const addressObj = userData.address;
              addresses.push(
                  new FormGroup({
                      'line1': new FormControl(addressObj.line1),
                      'line2': new FormControl(addressObj.line2),
                      'city': new FormControl(addressObj.city),
                      'postalCode': new FormControl(addressObj.postalCode),
                      'country': new FormControl(addressObj.country)
                  })
              )
          }
          
        })
        console.log("email", email)
        this.userProfileForm = new FormGroup({
            firstName: new FormControl(firstName),
            lastName: new FormControl(lastName),
            mobile: new FormControl(mobile),
            email: new FormControl(email),
            addresses: addresses,
            confirmUserProfileDetails: new FormControl(null)
        })
    }

    updateUserData() {
        console.log("user data", this.userProfileForm.value)
    }

}
