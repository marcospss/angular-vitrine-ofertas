import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from '@helpers/module-import-guard';
import { CartRoutingModule } from './cart-routing.module';
import { ListItemsComponent } from './list-items/list-items.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderCompleteComponent } from './order-complete/order-complete.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule
  ],
  declarations: [
    ListItemsComponent,
    CheckoutComponent,
    OrderCompleteComponent,
    HomeComponent
  ]
})

export class CartModule {
  constructor( @Optional() @SkipSelf() parentModule: CartModule) {
    throwIfAlreadyLoaded(parentModule, 'CartModule');
  }
 }
