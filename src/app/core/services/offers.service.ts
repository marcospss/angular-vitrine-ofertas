import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';
import { Offer } from '@models/offer.model';
import { Observable } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private http: HttpClient) { }

  getOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${environment.urlEndPoint}/products`);
  }

  getOffersByCategory(category: string): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${environment.urlEndPoint}/products?categorySlug=${category}`);
  }

  getOffersBySlug(slug: string): Observable<Offer> {
    return this.http.get<Offer>(`${environment.urlEndPoint}/products?slug=${slug}`);
  }

  searchOffers(term: string): Observable<Offer> {
    return this.http.get<Offer>(`${environment.urlEndPoint}/products?description_like=${term}`);
  }

}
