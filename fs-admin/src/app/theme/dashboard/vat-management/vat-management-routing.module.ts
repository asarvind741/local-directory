import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { VatManagementComponent } from './vat-management.component';

const routes: Routes = [{ path: '', component: VatManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VatManagementRoutingModule {}
