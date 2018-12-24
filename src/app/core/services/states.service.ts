import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { StateBr } from '@models/state-br.model';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor(private http: HttpClient) { }

  getStatesBr(): Observable<StateBr[]> {
    return this.http.get<StateBr[]>(`assets/data/states-br.json`);
  }

}
