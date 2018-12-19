import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { SignupFormComponent } from './signup/signup-form/signup-form.component';
import { MessageComponent } from './signup/signup-form/message/message.component';
import { StripePaymentComponent } from './stripe-payment/stripe-payment.component';
import { SignupComponent } from './signup/signup.component';

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
    SignupFormComponent,
    MessageComponent,
    StripePaymentComponent
  ],
  entryComponents: [
    StripePaymentComponent
  ]
})
export class AuthModule { }
