import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrderSummaryComponent } from './order-summary.component';
import { OrderSummaryDetailedComponent } from '../order-summary-detailed/order-summary-detailed.component';

const routes: Routes = [
  {path: '', component: OrderSummaryComponent},
  {path: ':id', component: OrderSummaryDetailedComponent, data: {breadcrumb: {alias: 'OrderSummaryDetailed'}}}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OrderSummaryRoutingModule { }
