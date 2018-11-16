import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { CouponService } from '../../../../services/coupon.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.scss']
})
export class AddCouponComponent implements OnInit {
  newCouponForm: FormGroup;
  modules: Array<String> = ['First Module', 'Second Module', 'Third Module']
  showMessage: any;
  constructor(
    public activeModal: NgbActiveModal,
    private couponService: CouponService
    ) { }

  ngOnInit() {

    this.createForm();
  }

  createForm(){
    this.newCouponForm = new FormGroup({
      'name': new FormControl(null),
      'module': new FormControl(null),
      'discount': new FormControl(null),
      'expiryDate': new FormControl(null),
      'status': new FormControl(null)
    })
  }

  addNewCoupon(){
    console.log(this.newCouponForm.value)
    this.couponService.addCoupon(this.newCouponForm.value)
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

  onSelectValue(event){
    console.log("value", this.newCouponForm.value)
  }


  openSuccessSwal() {
    swal({
      title: 'Successful!',
      text: 'User created successfully!',
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
    this.newCouponForm.reset();
    this.closeModal();
  }

  clearModal(){
    this.newCouponForm.reset();
  }

}
