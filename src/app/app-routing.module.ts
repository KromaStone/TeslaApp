// angular import
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project import
import { AdminComponent } from './theme/layouts/admin-layout/admin-layout.component';
import { GuestComponent } from './theme/layouts/guest/guest.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./users/home/home.component').then((c) => c.HomeComponent)
  },
  {
    path: 'login', loadComponent: () => import("./users/login/login.component").then(com => com.LoginComponent)
  },
  {
    path: 'create-account', loadComponent: () => import("./users/crate-account/crate-account.component").then(com => com.CrateAccountComponent)
  },
  {
    // path: 'testroute', loadComponent: () => import("./users/test/test.component").then(com => com.TestComponent), canActivate: [authGuard]
    path: 'testroute', loadComponent: () => import("./users/test/test.component").then(com => com.TestComponent),

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
      {
        path: 'dashboard/default',
        loadComponent: () => import('./demo/default/dashboard/dashboard.component').then((c) => c.DefaultComponent)
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
      {
        path: 'login',
        loadComponent: () => import('./demo/authentication/login/login.component')
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
