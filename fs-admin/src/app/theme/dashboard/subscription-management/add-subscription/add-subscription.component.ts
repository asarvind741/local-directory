import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlanService } from '../../../../services/plan.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-subscription.component.html',
  styleUrls: ['./add-subscription.component.scss']
})
export class AddSubscriptionComponent implements OnInit {
  newPlanForm: FormGroup;
  statuss: Array<String> = ['Active', 'Inactive'];
  types: Array<String> = ['Yearly', 'Half Yearly', 'Quarterly']
  showMessage: any;
  constructor(
    public activeModal: NgbActiveModal,
    private planService: PlanService
  ) { }

  ngOnInit() {

    this.createForm();
  }

  createForm() {
    this.newPlanForm = new FormGroup({
      'name': new FormControl(null),
      'type': new FormControl(null),
      'cost': new FormControl(null),
      'status': new FormControl(null)
    })
  }

  addNewPlan() {
    console.log(this.newPlanForm.value)
    this.planService.addPlan(this.newPlanForm.value).subscribe((response: HttpResponse<any>) => {
        console.log("responseaaaaa", response);
        if (response.status === 200) {
          this.closeModal();
          this.openSuccessSwal();
        }
        else if (response.status !== 200) {
          this.closeModal();
          this.showMessage = response['date'];
          this.openUnscuccessSwal();
        }
      }, (error) => {
        console.log(error);
        this.closeModal();
        this.showMessage = error.error['message']
        this.openUnscuccessSwal();
      })

  }

  onSelectValue(event) {
    console.log("value", this.newPlanForm.value)
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

  cancelNewUserAddition() {
    this.newPlanForm.reset();
    this.closeModal();
  }

  clearModal() {
    this.newPlanForm.reset();
  }

}
