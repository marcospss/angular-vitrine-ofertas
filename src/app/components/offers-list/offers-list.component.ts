import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { OffersService } from '@services/offers.service';
import { SectionsService } from '@services/sections.service';
import { Section } from '@models/section.model';
import { Offer } from '@models/offer.model';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss']
})
export class OffersListComponent implements OnInit {
  sections$: Observable<Section[]>;
  offers$: Observable<Offer[]>;

  constructor(
    private sectionsService: SectionsService,
    private offersService: OffersService
  ) { }

  ngOnInit() {
    this.sections$ = this.sectionsService.getSections();
    this.offers$ = this.offersService.getOffers();
  }

  filterProducts(filter: string) {
    this.offers$ = this.offersService.getOffersByCategory(filter);
  }

}
