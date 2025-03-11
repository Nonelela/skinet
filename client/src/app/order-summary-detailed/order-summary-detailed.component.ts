import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/models/order';
import { OrderSummaryService } from '../order-summary/order-summary.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-order-summary-detailed',
  templateUrl: './order-summary-detailed.component.html',
  styleUrls: ['./order-summary-detailed.component.scss']
})
export class OrderSummaryDetailedComponent implements OnInit {
  order?: Order;

  constructor(private orderSummaryService: OrderSummaryService, private route: ActivatedRoute,
    private bcService: BreadcrumbService){}

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      id && this.orderSummaryService.getOrderSummaryDetailed(+id).subscribe({
        next: order => {
          this.order = order;
          this.bcService.set('@OrderSummaryDetailed', `Order# ${order.id} - ${order.status}`);
        }
      })
  }

}
