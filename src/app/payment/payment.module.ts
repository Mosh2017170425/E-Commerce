import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './components/payment/payment.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PaymentComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ]
})
export class PaymentModule { }
