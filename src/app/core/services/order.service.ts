import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Order } from '@models/order.model';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) { }

  requestCompleted(order: Order): Observable<Order> {
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.post<Order>(
      `${environment.urlEndPoint}/purchase-requests`,
      order,
      {
        headers: headers
      }
    );
  }

}
