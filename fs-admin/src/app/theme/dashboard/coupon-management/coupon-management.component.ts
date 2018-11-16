import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CouponService } from '../../../services/coupon.service';
import { HttpResponse } from '@angular/common/http';
import { AddCouponComponent } from './add-coupon/add-coupon.component';
import { EditCouponComponent } from './edit-coupon/edit-coupon.component';

@Component({
  selector: '<app-coupon-management></app-coupon-management>',
  templateUrl: './coupon-management.component.html',
  styleUrls: [
    './coupon-management.component.scss',
    '../../../../assets/icon/icofont/css/icofont.scss'
  ]
})
export class CouponManagementComponent implements OnInit {
  deleting: Boolean;
  showMessage: any;
  constructor(
    private couponService: CouponService,
    private modalService: NgbModal
  ) {
    this.getCoupons();
  }
  search_input: string = null;
  editing = {};
  rows = [];
  temp_rows = [];
  ngOnInit() {

  }

  getCoupons() {
    this.couponService.getCoupons()
      .subscribe(coupons => {  
        console.log("aaaaaaaaaaaaaa", coupons);      
        this.rows = coupons['data'];
        this.temp_rows = coupons['data'];
      })
  }

  updateValue(event, cell, row) {
    console.log( row. cell)
    this.editing[row + '-' + cell] = false;
    this.temp_rows[row][cell] = event.target.value;
    this.rows = this.temp_rows;
   this.couponService.updateCoupon(this.rows[row]._id,this.rows[row])
   .subscribe((response: HttpResponse<any>) => {
     if(response.status === 200){
       this.getCoupons();
       this.openSuccessSwal();
     }
   }, (error) => {
     this.showMessage = error.error['message'];
     this.getCoupons();
     this.openUnscuccessSwal()
   })
  }

  onSearchInputChange(val) {
    if (val) {
      val = val.toLowerCase();
      let data = this.rows;
      data = data.filter(coupon => {
        if (
          coupon.name ? coupon.name.toLowerCase().indexOf(val) >= 0 : null ||
          coupon.module ? coupon.module.toLowerCase().indexOf(val) >= 0 : null ||
          coupon.discount ? coupon.discount.toLowerCase().indexOf(val) >= 0 : null ||
          coupon.status ? coupon.status.toLowerCase().indexOf(val) >= 0 : null ||
          coupon.exipresOn ? coupon.exipresOn.indexOf(val) >=0 : null
        )
          return true;
      });
      this.rows = data;
    } else this.rows = this.temp_rows;
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

  openSuccessCancelSwal(name) {
    console.log("nameaaaaaa", name)
    this.deleting = true;
    swal({
      title: 'Are you sure?',
      text: 'You not be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger mr-sm'
    }).then((result) => {
      if (result.value) {
        this.couponService.deleteCoupon(name._id).subscribe((response: HttpResponse<any>) => {
          console.log(response)
          if (response.status === 200) {
            this.getCoupons();
            swal(
              'Deleted!',
              'Your have deactivated coupon successfully.',
              'success'
            );
          }
        });

      } else if (result.dismiss) {
        swal(
          'Cancelled',
          'You have cancelled deactivation request.)',
          'error'
        );
      }
    });

  }

  openFormModal() {
    const modalRef = this.modalService.open(AddCouponComponent);
    modalRef.result.then((result) => {
      this.getCoupons();
    }).catch((error) => {
      this.getCoupons();
    });
  }

  openEditFormModal(coupon){
    const modalRef = this.modalService.open(EditCouponComponent);
    modalRef.componentInstance.currentCoupon = coupon;
    modalRef.result.then((result) => {
      this.getCoupons();
    })
    .catch((error) => {
      this.getCoupons();
    });
  }
}
