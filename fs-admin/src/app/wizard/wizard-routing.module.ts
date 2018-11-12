import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { BusinessDetailsComponent } from './business-details/business-details.component';
import { WizardComponent } from './wizard.component';

const routes: Routes = [
    { 
        path: '', data: 
        {
        title: 'wizard-operation'
        },
        component: WizardComponent,
        children: [
            {
                path: 'personal-details', component: PersonalDetailsComponent
            },
            {
                path: 'address-details', component: AddressDetailsComponent
            },
            {
                path: 'business-details', component: BusinessDetailsComponent
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]

})

export class WizardRoutingModule {}