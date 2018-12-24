import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderCompleteComponent } from './order-complete/order-complete.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'produtos',
        pathMatch: 'full'
      },
      {
        path: 'produtos',
        component: ListItemsComponent
      },
      {
        path: 'checkout',
        component: CheckoutComponent
      },
      {
        path: 'sucesso/:id',
        component: OrderCompleteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
