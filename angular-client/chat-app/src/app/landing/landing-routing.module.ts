import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular';
import { LandingHomeComponent } from './component/landing-home/landing-home.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "landing"
  },
  {
    path: "landing",
    pathMatch: "full",
    component: LandingHomeComponent
  },
  {
    path: "auth/callback",
    pathMatch: "full",
    component: OktaCallbackComponent
  },
  {
    path: "dashboard",
    pathMatch: "full",
    canActivate: [OktaAuthGuard],
    loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
