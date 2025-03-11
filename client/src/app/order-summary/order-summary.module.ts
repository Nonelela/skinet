import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderSummaryComponent } from './order-summary.component';
import { OrderSummaryDetailedComponent } from '../order-summary-detailed/order-summary-detailed.component';
import { OrderSummaryRoutingModule } from './order-summary-routing.module';



@NgModule({
  declarations: [
    OrderSummaryComponent, OrderSummaryDetailedComponent
  ],
  imports: [
    CommonModule,
    OrderSummaryRoutingModule
  ]
})
export class OrderSummaryModule { }
