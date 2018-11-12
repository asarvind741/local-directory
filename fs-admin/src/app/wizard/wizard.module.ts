import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { ReactiveFormsModule  } from '@angular/forms';
import { WizardRoutingModule } from './wizard-routing.module';
import { WizardComponent } from './wizard.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { BusinessDetailsComponent } from './business-details/business-details.component';
import { WizardNavbarComponent } from './wizard-navbar/wizard-navbar.component';

@NgModule({
  declarations: [
    WizardComponent,
    PersonalDetailsComponent,
    AddressDetailsComponent,
    BusinessDetailsComponent,
    WizardNavbarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WizardRoutingModule,
    SharedModule
  ],
  exports: []
})
export class WizardModule { }
