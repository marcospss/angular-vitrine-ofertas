import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@container/home/home.component';
import { PageNotFoundComponent } from '@container/page-not-found/page-not-found.component';
import { OffersResolverService } from '@services/offers-resolver.service';

const routes: Routes = [
  {
    path: 'ofertas',
    loadChildren: 'app/components/offers-list/offers-list.module#OffersListModule'
  },
  {
    path: 'sobre',
    loadChildren: 'app/components/about/about.module#AboutModule'
  },
  {
    path: 'contato',
    loadChildren: 'app/components/contact/contact.module#ContactModule'
  },
  {
    path: 'carrinho',
    loadChildren: 'app/components/cart/cart.module#CartModule'
  },
  {
    path: 'login',
    loadChildren: 'app/components/login/login.module#LoginModule'
  },
  {
    path: 'dashboard',
    loadChildren: 'app/components/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: ':details',
    loadChildren: 'app/components/offer-detail/offer-detail.module#OfferDetailModule',
    resolve: {
      resolvedOffer: OffersResolverService
    }
  },
  {
    path: '',
    component: HomeComponent
  },
  { path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
