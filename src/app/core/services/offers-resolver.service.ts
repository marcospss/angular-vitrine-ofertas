import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { OffersService } from '@services/offers.service';
import { Offer } from '@models/offer.model';

@Injectable({
  providedIn: 'root'
})
export class OffersResolverService implements Resolve<Offer[]> {

  constructor( private offersService: OffersService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Offer[]> {
    const slugProduct = route.params['details'];
    return this.offersService.getOffersBySlug(slugProduct)
    .pipe(
      catchError(error => of(error))
    );
  }
}
