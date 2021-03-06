import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Dashboard',
      status: false
    },
    children: [
      {
        path: 'default',
        loadChildren: './default/default.module#DefaultModule'
      },
      {
        path: 'ecommerce',
        loadChildren: './ecommerce/ecommerce.module#EcommerceModule'
      },
      {
        path: 'analytics',
        loadChildren: './analytics/analytics.module#AnalyticsModule'
      },
      {
        path: 'user-management',
        loadChildren: './user-management/user-management.module#UserManagementModule'
      },
      {
        path: 'coupon-management',
        loadChildren: './coupon-management/coupon-management.module#CouponManagementModule'
      },
      {
        path: 'subscription-management',
        loadChildren: './subscription-management/subscription-management.module#SubscriptionManagementModule'
      },
      {
        path: 'vat-management',
        loadChildren: './vat-management/vat-management.module#VatManagementModule'
      },
      {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
