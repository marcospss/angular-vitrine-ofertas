import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Offer } from '@models/offer.model';
import { OffersService } from '@services/offers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  offers$: Observable<Offer[]>;
  constructor(private offersService: OffersService) { }

  ngOnInit() {
    this.offers$ = this.offersService.getOffers();
  }

}
