import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingHomeComponent } from './component/landing-home/landing-home.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LandingHomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    LandingRoutingModule,
    SharedModule
  ],
  bootstrap: [LandingHomeComponent]
})
export class LandingModule { }
