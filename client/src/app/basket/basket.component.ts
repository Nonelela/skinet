import { Component } from '@angular/core';
import { BasketService } from './basket.service';
import { BasketItem } from '../shared/models/basket';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {

  constructor (public basketService: BasketService) {}

  incrementQuantity(item: BasketItem) {
    alert('increment qty');
    console.log(item);
    this.basketService.addItemToBasket(item);
  }

  removeItem(event: {id: number, quantity: number}) {
    alert('basket dec');
    this.basketService.removeItemFromBasket(event.id, event.quantity);
  }

}
