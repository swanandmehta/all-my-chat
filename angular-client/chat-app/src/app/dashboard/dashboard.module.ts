import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './component/dashboard-home/dashboard-home.component';
import { SharedModule } from '../shared/shared.module';
import { TopicModalComponent } from './component/topic-modal/topic-modal.component';
import { ChatContainerComponent } from './component/chat-container/chat-container.component';


@NgModule({
  declarations: [
    DashboardHomeComponent,
    TopicModalComponent,
    ChatContainerComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
