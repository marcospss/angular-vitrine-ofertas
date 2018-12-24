import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, catchError, map } from 'rxjs/operators';
import { Observable, Subject, of } from 'rxjs';

import { OffersService } from '@services/offers.service';
import { Offer } from '@models/offer.model';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  offers$: Observable<Offer[]>;
  search$: Subject<any>;
  searchForm: FormGroup;
  constructor(
    private router: Router,
    private offersService: OffersService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      this.searchForm.get('query').setValue('');
    });
    this.searchForm = this.formBuilder.group({
      query: [null, Validators.required]
    });

    this.search$ = new Subject<any>();
    this.search$.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((term: string) => {
        if (term.trim() === '') {
          return of<Offer[]>([]);
        }
        return this.offersService.searchOffers(term);
      }),
      catchError((error: any) => {
        return of<Offer[]>([]);
      })
    ).subscribe((result: any) => {
      this.offers$ = result;
    });
  }

  searchOffers(searchTerm: string): void {
    this.search$.next(searchTerm);
  }

  navigateOffer(slug: string): void {
    this.router.navigate([slug]);
  }

  clearSearch(): void {
    this.searchForm.reset();
    this.search$.next('');
  }

}
