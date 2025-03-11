import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/models/order';
import { OrderSummaryService } from './order-summary.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  orders: Order[] = [];

  /**
   *
   */
  constructor(private orderSummaryService: OrderSummaryService) {
  }

  ngOnInit(): void {
      this.getOrders();
  }

  getOrders() {
    this.orderSummaryService.getOrdersForUser().subscribe({
      next: orders => this.orders = orders
    })
  }
}
