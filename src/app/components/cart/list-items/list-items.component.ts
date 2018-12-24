import { Component, OnInit } from '@angular/core';

import { CartService } from '@services/cart.service';
import { CartItem } from '@models/cart-item.model';
@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  cartItems: CartItem[] = [];
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.cartItems = this.cartService.getCartItems();
  }

  add(item: CartItem): void {
    this.cartService.addAmount(item);
  }

  decrease(item: CartItem): void {
    this.cartService.decreaseAmount(item);
  }

  removeItem(item: CartItem): void {
    this.cartService.removeItem(item);
  }

  clear(): void {
    this.cartService.clearCart();
    this.cartItems = this.cartService.getCartItems();
  }

}
