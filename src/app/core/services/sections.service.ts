import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { Section } from '@models/section.model';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {

  constructor(private http: HttpClient) { }

  getSections(): Observable<Section[]> {
    return this.http.get<Section[]>(`${environment.urlEndPoint}/sections`);
  }

  getOffersBySlug(slug: string): Observable<Section> {
    return this.http.get<Section>(`${environment.urlEndPoint}/sections?slug=${slug}`);
  }

}
