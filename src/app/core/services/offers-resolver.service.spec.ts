import { TestBed, inject } from '@angular/core/testing';

import { OffersResolverService } from './offers-resolver.service';

describe('OffersResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OffersResolverService]
    });
  });

  it('should be created', inject([OffersResolverService], (service: OffersResolverService) => {
    expect(service).toBeTruthy();
  }));
});
