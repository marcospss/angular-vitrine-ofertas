import { Component, OnInit } from '@angular/core';
import { CartService } from '@services/cart.service';
import { CartItem } from '@models/cart-item.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartItems: CartItem[] = [];
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

}
