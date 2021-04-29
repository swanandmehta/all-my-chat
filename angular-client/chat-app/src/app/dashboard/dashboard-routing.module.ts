import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './component/dashboard-home/dashboard-home.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "prefix",
    component: DashboardHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
