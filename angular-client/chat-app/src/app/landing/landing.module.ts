import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingHomeComponent } from './component/landing-home/landing-home.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { RootComponent } from './component/root/root.component';


@NgModule({
  declarations: [
    LandingHomeComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    LandingRoutingModule,
    SharedModule
  ],
  bootstrap: [RootComponent]
})
export class LandingModule { }
