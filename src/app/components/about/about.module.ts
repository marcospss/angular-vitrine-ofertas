import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { throwIfAlreadyLoaded } from '@helpers/module-import-guard';
import { AboutRoutingModule } from './about-routing.module';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, HistoryComponent]
})

export class AboutModule {
  constructor( @Optional() @SkipSelf() parentModule: AboutModule) {
    throwIfAlreadyLoaded(parentModule, 'AboutModule');
  }
 }
