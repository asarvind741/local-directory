import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { VatManagementRoutingModule } from './vat-management-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddVatComponent } from './add-vat/add-vat.component';
import { EditVatComponent } from './edit-vat/edit-vat.component';
import { VatManagementComponent } from './vat-management.component';

@NgModule({
  imports: [
    CommonModule,
    VatManagementRoutingModule,
    NgbModule.forRoot(),
    SharedModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    VatManagementComponent, 
    AddVatComponent, 
    EditVatComponent
  ],
  entryComponents: [
    AddVatComponent,
    EditVatComponent
  ]
})
export class VatManagementModule {

  
}
