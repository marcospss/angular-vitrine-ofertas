import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from '@helpers/module-import-guard';
import { OffersListRoutingModule } from './offers-list-routing.module';
import { OffersListComponent } from './offers-list.component';
import { SharedModule } from '@shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    OffersListRoutingModule,
    SharedModule
  ],
  declarations: [
    OffersListComponent
  ]
})

export class OffersListModule {
  constructor( @Optional() @SkipSelf() parentModule: OffersListModule) {
    throwIfAlreadyLoaded(parentModule, 'OffersListModule');
  }
 }
