import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from '@helpers/module-import-guard';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [HomeComponent]
})

export class DashboardModule {
  constructor( @Optional() @SkipSelf() parentModule: DashboardModule) {
    throwIfAlreadyLoaded(parentModule, 'DashboardModule');
  }
 }
