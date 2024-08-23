// angular import
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project import
import { AdminComponent } from './theme/layouts/admin-layout/admin-layout.component';
import { GuestComponent } from './theme/layouts/guest/guest.component';
import { authenticationGuard } from './demo/authentication/auth/authentication.guard';
import { HomeComponent } from './users/home/home.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./users/home/home.component').then((c) => c.HomeComponent)
  },
  {
    path: 'create-account', loadComponent: () => import("./users/crate-account/crate-account.component").then(com => com.CrateAccountComponent)
  },
  {
    path: 'buy', loadComponent: () => import("./users/buy-component/buy-component.component").then(com => com.BuyComponentComponent)
  },
  {
    path: 'testroute', loadComponent: () => import("./users/test/test.component").then(com => com.TestComponent), canActivate: [authenticationGuard]
  },
  {
    path: 'shop', loadComponent: () => import("./users/shop/shop-home/shop-home.component").then(com => com.ShopHomeComponent)
  },
  {
    path: '',
    component: AdminComponent,
    children: [

      // {
      //   path: '',
      //   redirectTo: '/dashboard/default',
      //   pathMatch: 'full'
      // },
      // {
      //   path: 'dashboard/default',
      //   loadComponent: () => import('./demo/default/dashboard/dashboard.component').then((c) => c.DefaultComponent)
      // },
      {
        path: 'Admin',
        loadComponent: () => import('./demo/default/dashboard/dashboard.component').then((c) => c.DefaultComponent), canActivate:[authenticationGuard]
      },
      {
        path: 'products', loadComponent: () => import("./admin/products/products.component").then(com => com.ProductsComponent)
      },
      {
        path: 'typography',
        loadComponent: () => import('./demo/ui-component/typography/typography.component')
      },
      {
        path: 'color',
        loadComponent: () => import('./demo/ui-component/ui-color/ui-color.component')
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/other/sample-page/sample-page.component')
      }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      // {
      //   path: 'login', loadComponent: () => import("./users/login/login.component").then(com => com.LoginComponent)
      // },
      {
        path: 'login',
        loadComponent: () => import('./demo/authentication/login/login.component').then((c)=>c.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () => import('./demo/authentication/register/register.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
