import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    path: "dashboard",
    pathMatch: "full",
    loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
