import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { StatesService } from '@services/states.service';
import { StateBr } from '@models/state-br.model';
import { CepSearchService } from '@services/cep-search.service';
import { CartService } from '@services/cart.service';
import { CartItem } from '@models/cart-item.model';
import { OrderService } from '@services/order.service';
import { Order } from '@models/order.model';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItem[] = [];
  formCheckout: FormGroup;
  statesBr: Observable<StateBr[]>;
  checkFormInvalid = false;

  constructor(
    private router: Router,
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private statesService: StatesService,
    private cepSearchService: CepSearchService,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.cartItems = this.cartService.getCartItems();
    this.statesBr = this.statesService.getStatesBr();
    this.formCheckout = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      username: [null, Validators.required],
      password: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      address: this.formBuilder.group({
        zip: [null, Validators.required],
        number: [null, Validators.required],
        complement: [null],
        publicPlace: [null, Validators.required],
        state: [null, Validators.required],
        city: [null, Validators.required]
      })
    });

  }

  searchCEP() {
    const cep = this.formCheckout.get('address.zip').value;
    if (cep != null && cep !== '') {
      this.cepSearchService.search(cep)
      .subscribe(data => this.fillFormData(data));
    }
  }

  fillFormData(data) {
    this.formCheckout.patchValue({
      address: {
        publicPlace: data.logradouro,
        state: data.uf,
        city: data.localidade
      }
    });
  }

  checkValidInput(input: string) {
    return (
      !this.formCheckout.get(input).valid && ( this.formCheckout.get(input).dirty || this.formCheckout.get(input).touched )
    );
  }

  checkEmailValid() {
    const inputEmail = this.formCheckout.get('email');
    if (inputEmail.errors) {
      return inputEmail.errors['email'] && inputEmail.touched;
    }
  }

  onSubmit() {
    this.checkFormInvalid = this.formCheckout.invalid;
    if (this.checkFormInvalid) {
      return;
    }

    const order: Order = {
      firstName: this.formCheckout.get('firstName').value,
      lastName: this.formCheckout.get('lastName').value,
      email: this.formCheckout.get('email').value,
      address: this.formCheckout.get('address').value,
      items: this.cartItems
    };

    this.orderService.requestCompleted(order).subscribe(
      (res: any) => {
        this.router.navigate(['/carrinho/sucesso', res.id]);
      }
    );

  }

}
