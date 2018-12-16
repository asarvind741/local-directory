import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SpinnerComponent } from './ngx-spinner/ngx-spinner';


@NgModule({
  imports: [
    CommonModule,
    NgxSpinnerModule
  ],
  exports:[
    SpinnerComponent
  ],
  declarations: [
    SpinnerComponent
  ]
})
export class SharedModule { }
