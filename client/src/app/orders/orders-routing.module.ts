import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { OrderDetailsComponent } from '../order-details/order-details.component';
import { OrderSummaryDetailedComponent } from '../order-summary-detailed/order-summary-detailed.component';
import { OrdersComponent } from './orders.component';

const routes: Routes = [
  { path: '', component: OrdersComponent },
  { path: ':id', component: OrderSummaryDetailedComponent, data: { breadcrumb: { alias: 'OrderSummaryDetails' } } }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }