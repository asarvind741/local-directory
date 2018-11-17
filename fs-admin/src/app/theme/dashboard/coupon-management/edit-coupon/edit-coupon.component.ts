import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { CouponService } from '../../../../services/coupon.service';

@Component({
  selector: 'app-edit-coupon',
  templateUrl: './edit-coupon.component.html',
  styleUrls: ['./edit-coupon.component.scss']
})
export class EditCouponComponent implements OnInit {
  editCouponForm: FormGroup;
  showMessage: any;
  modules: Array<String> = ['First Module', 'Second Module', 'Third Module']
  @Input() currentCoupon;
  constructor(
    public activeModal: NgbActiveModal,
    private couponService: CouponService
    ) { }

  ngOnInit() {
    console.log("current coupon", this.currentCoupon)
    this.createForm();
  }

  createForm(){
    console.log("module", this.currentCoupon.module)
    let name = this.currentCoupon.name ? this.currentCoupon.name : '';
    let module = this.currentCoupon.module ? this.currentCoupon.module : 'Select One';
    let discount = this.currentCoupon.discount ? this.currentCoupon.discount : '';
    let expiresOn = this.currentCoupon.expiresOn ? this.currentCoupon.expiresOn : null;
    let status = this.currentCoupon.status ? this.currentCoupon.status : null;
    this.editCouponForm = new FormGroup({
      'name': new FormControl(name),
      'module': new FormControl(module),
      'discount': new FormControl(discount),
      'expiresOn': new FormControl(expiresOn),
      'status': new FormControl(status)
    })
  }

  editCoupon(){
    this.couponService.updateCoupon(this.currentCoupon._id, this.editCouponForm.value)
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
      text: 'Coupon updated successfully!',
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
    this.editCouponForm.reset();
    this.closeModal();
  }

  clearModal(){
    this.editCouponForm.reset();
  }

}
