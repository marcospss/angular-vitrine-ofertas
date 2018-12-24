import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CartService } from '@services/cart.service';
import { Offer } from '@models/offer.model';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.scss']
})
export class OfferDetailComponent implements OnInit {
  slugProduct: string;
  public offer: Offer;
  constructor(
    private route: ActivatedRoute,
    private cart: CartService
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    const resolverData: Offer = this.route.snapshot.data['resolvedOffer'];
    this.offer = resolverData[0];
  }

  addItem(offer: Offer): void {
    this.cart.add(offer);
  }

}
