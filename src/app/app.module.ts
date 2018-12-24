import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from './core/core.module';
import { RootComponent } from '@presentational/root/root.component';
import { HomeComponent } from '@container/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

registerLocaleData(localePt, 'pt');
@NgModule({
  declarations: [
    RootComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    }
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
