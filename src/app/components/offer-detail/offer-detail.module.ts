import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { throwIfAlreadyLoaded } from '@helpers/module-import-guard';

import { OfferDetailRoutingModule } from './offer-detail-routing.module';
import { OfferDetailComponent } from './offer-detail.component';

@NgModule({
  imports: [
    CommonModule,
    OfferDetailRoutingModule,
    SharedModule
  ],
  declarations: [
    OfferDetailComponent
  ]
})

export class OfferDetailModule {
  constructor( @Optional() @SkipSelf() parentModule: OfferDetailModule) {
    throwIfAlreadyLoaded(parentModule, 'OfferDetailModule');
  }
 }
