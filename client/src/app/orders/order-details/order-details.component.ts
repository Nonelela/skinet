import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/models/order';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit{
  order?: Order;
  
  constructor(private ordersService: OrdersService, private route: ActivatedRoute, 
    private bcService: BreadcrumbService){}
  
    ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    id && this.ordersService.getOrderDetails(+id).subscribe({
      next: order => {
        this.order = order;
        this.bcService.set('@OrderDetails', `Order# ${order.id} - ${order.status}`);
      }
    })
  }

}
