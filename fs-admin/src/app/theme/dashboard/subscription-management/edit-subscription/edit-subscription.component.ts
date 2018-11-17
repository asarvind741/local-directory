import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import {PlanService } from '../../../../services/plan.service';

@Component({
  selector: 'app-subscription-plan',
  templateUrl: './edit-subscription.component.html',
  styleUrls: ['./edit-subscription.component.scss']
})
export class EditSubscriptionComponent implements OnInit {
  editPlanForm: FormGroup;
  showMessage: any;
  statuss: Array<String> = ['Active', 'Inactive'];
  types: Array<String> = ['Yearly', 'Half Yearly', 'Quarterly']
  @Input() currentPlan;
  constructor(
    public activeModal: NgbActiveModal,
    private planService: PlanService
    ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    let name = this.currentPlan.name ? this.currentPlan.name : '';
    let type = this.currentPlan.type ? this.currentPlan.type : 'Select One';
    let cost = this.currentPlan.cost ? this.currentPlan.cost : '';
    let status = this.currentPlan.status ? this.currentPlan.status : null;
    this.editPlanForm = new FormGroup({
      'name': new FormControl(name),
      'type': new FormControl(type),
      'cost': new FormControl(cost),
      'status': new FormControl(status)
    })
  }

  editPlan(){
    this.planService.updatePlan(this.currentPlan._id, this.editPlanForm.value)
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
      text: 'Plan updated successfully!',
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
    this.editPlanForm.reset();
    this.closeModal();
  }

  clearModal(){
    this.editPlanForm.reset();
  }

}
