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
      let firstName  = null;
      let lastName = null;
      let email = null;
      let mobile = null;
      let address = null;
        this.userService.getUser(this.userId)
        .subscribe(response => {
          let userData = response['data'];
          console.log("user data", userData.email)
          firstName = userData.firstName || null;
          lastName = userData.lastName || null;
          mobile = userData.mobile || null;
          email = userData.email || null;
          address = userData.address || null;
          
        })
        console.log("email", email)
        this.userProfileForm = new FormGroup({
            firstName: new FormControl(firstName),
            lastName: new FormControl(lastName),
            mobile: new FormControl(mobile),
            email: new FormControl(email),
            address: new FormControl(address),
            confirmUserProfileDetails: new FormControl(null)
        })
    }

    updateUserData() {
        console.log("user data", this.userProfileForm.value)
    }

}
