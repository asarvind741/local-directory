import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: 'signup/:id', component: SignupComponent },
  { path: 'signin/:id', component: SigninComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class AuthRoutingModule { }
