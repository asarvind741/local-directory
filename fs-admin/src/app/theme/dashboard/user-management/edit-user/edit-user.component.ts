import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../../services/user.servivce';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  updateUserForm: FormGroup;
  showMessage: any;
  @Input() currentUser;
  constructor(
    public activeModal: NgbActiveModal,
    private userService: UserService
    ) { }

  ngOnInit() {
    console.log("user", this.currentUser)
    this.createForm();
  }

  createForm(){
    let firstName = this.currentUser.firstName ? this.currentUser.firstName : '';
    let lastName = this.currentUser.lastName ? this.currentUser.lastName : '';
    let email = this.currentUser.email ? this.currentUser.email : '';
    let password = this.currentUser.password ? this.currentUser.password : '';
    let mobile = this.currentUser.mobile ? this.currentUser.mobile : null;
    this.updateUserForm = new FormGroup({
      'firstName': new FormControl(firstName),
      'lastName': new FormControl(lastName),
      'email': new FormControl(email),
      'password': new FormControl(password),
      'mobile': new FormControl(mobile)
    })
  }

  updateUser(){
    this.userService.updateUser(this.currentUser._id, this.updateUserForm.value)
    .subscribe((response: HttpResponse<any>) => {
      if(response.status === 200){
        this.closeModal();
        this.openSuccessSwal();
      }
    }, (error) => {
      this.closeModal();
      this.showMessage = error.error['message']
      this.openUnscuccessSwal();
    })
    
  }

  openSuccessSwal() {
    swal({
      title: 'Successful!',
      text: 'User updated successfully!',
      type: 'success'
    }).catch(swal.noop);
  }

  openUnscuccessSwal() {
    swal({
      title: 'Cancelled!',
      text: this.showMessage,
      type: 'error'
    }).catch(swal.noop);
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  cancelNewUserAddition(){
    this.updateUserForm.reset();
    this.closeModal();
  }

  clearModal(){
    this.updateUserForm.reset();
  }

}
