import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SignupFormComponent } from './signup/signup-form/signup-form.component';
import { MessageComponent } from './signup/signup-form/message/message.component';
import { PaymentComponent } from './payment/payment.component';
import { BraintreePaymentComponent } from './braintree-payment/braintree-payment.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule.forRoot(),
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    SignupComponent,
    SigninComponent,
    SignupFormComponent,
    MessageComponent,
    PaymentComponent,
    BraintreePaymentComponent
  ],
  entryComponents: [
    PaymentComponent,
    BraintreePaymentComponent
  ]
})
export class AuthModule { }
