import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PlanService } from '../../../services/plan.service';
import { HttpResponse } from '@angular/common/http';
import { PaymentComponent } from '../../payment/payment.component';
import { AuthService } from '../../../services/auth.service';



function passwordConfirming(c: AbstractControl): any {
  if(!c.parent || !c) return;
  const pwd = c.parent.get('password');
  const cpwd = c.parent.get('confirm_password');

  if(!pwd || !cpwd) return ;
  if (pwd.value !== cpwd.value) {
      return { invalid: true };
  }
}

@Component({
  selector: 'app-sigunup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  signupForm: FormGroup;
  regitered: Boolean = false;
  message: String = '';
  planId: any;
  tokenId: any;
  selectedPlan: any;
  passwordPattern: any = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}$"

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private planService: PlanService,
    private authService: AuthService
    ) {

  }

  ngOnInit() {

    this.activatedRoute.params
    .subscribe((param: Params) => {
      this.planId = param['id'];
      this.planService.getPlan(this.planId)
      .subscribe((response: HttpResponse<any>) => {
        if(response.status === 200){
          this.selectedPlan = response['data'];
        }
      })
    });

    

    this.createSignupForm();

  }

  createSignupForm() {
    this.signupForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.pattern(this.passwordPattern)]),
      confirmPassword: new FormControl(null, [Validators.required, passwordConfirming])
    })
  }

  openPaymentModal(){
      const modalRef = this.modalService.open(PaymentComponent);
      modalRef.componentInstance.selectedPlan = this.selectedPlan;
      modalRef.result.then((result) => {
        console.log("result===>", result);
        delete this.signupForm.value.confirmPassword;
       
        const user = this.signupForm.value;
        console.log("user", user)
        const payment = { tokenId: result.id, amount: this.selectedPlan.price, subscriptionId: this.selectedPlan._id};
        console.log("user", payment)
        this.authService.signupUser(user, payment)
        .subscribe((response: HttpResponse<any>) => {
          if(response.status === 200){
            console.log("response", response)
          }
        })

      }).catch((error) => {
      });
    
  }

  onSubmit() {

    console.log("form values", this.signupForm.value);
    if(this.selectedPlan.price > 0 ){
      var handler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_K9HatDLzNWcxnBcPioY0JjvF',
        locale: 'auto',
        token: function (token: any) {
         this.tokenId = token.id;
        }
      });
      handler.open({
        name: 'B2B Portal',
        description: 'A fashionsourcing website',
        amount: this.selectedPlan.price
      });
  
      // this.router.navigate(['./payment'], { relativeTo: this.activatedRoute});
    }
    // console.log("selected plan", this.selectedPlan)
  }

}
