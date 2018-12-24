import { Injectable } from '@angular/core';

import { CartItem } from '@models/cart-item.model';
import { Offer } from '@models/offer.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public items: CartItem[] = [];

  constructor() { }

  getCartItems(): CartItem[] {
    return this.items;
  }

  add(offer: Offer): void {
    const cartItem: CartItem = {
      id: offer.id,
      cover: offer.cover,
      title: offer.title,
      description: offer.description,
      value: offer.value,
      amount: 1
     };

    const itemFoundCart = this.items.find((item: CartItem) => item.id === cartItem.id);

    if (itemFoundCart) {
      itemFoundCart.amount += 1;
    } else {
      this.items.push(cartItem);
    }

  }

  totalCart(): number {
    let total = 0;
    this.items.map((item: CartItem) => {
      total = total + (item.value * item.amount);
    });
    return total;
  }

  addAmount(itemCart: CartItem): void {
    const itemFoundCart = this.items.find((item: CartItem) => item.id === itemCart.id);

    if (itemFoundCart) {
      itemFoundCart.amount += 1;
    }
  }

  decreaseAmount(itemCart: CartItem): void {
    const itemFoundCart = this.items.find((item: CartItem) => item.id === itemCart.id);

    if (itemFoundCart) {
      itemFoundCart.amount -= 1;
      if (itemFoundCart.amount === 0) {
        this.items.splice(this.items.indexOf(itemFoundCart), 1);
      }
    }
  }

  removeItem(itemCart: CartItem): void {
    const itemFoundCart = this.items.find((item: CartItem) => item.id === itemCart.id);

    if (itemFoundCart) {
      this.items.splice(this.items.indexOf(itemFoundCart), 1);
    }
  }

  clearCart(): void {
    this.items = [];
  }

}
