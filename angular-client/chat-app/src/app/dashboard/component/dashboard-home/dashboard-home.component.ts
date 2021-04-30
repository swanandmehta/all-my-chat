import { Component, OnInit } from '@angular/core';
import { ModalConfig } from 'src/app/shared/config/modal-config';
import { Topic } from 'src/app/shared/dto/topic';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {

  public modalConfig: ModalConfig;

  constructor() {
    this.modalConfig = new ModalConfig();
  }

  ngOnInit(): void {
  }

  openNewChat(): void {
    this.modalConfig.state = true;
  }

  onTopicSelection(topic: Topic): void {
    console.log(topic);
  }

}
