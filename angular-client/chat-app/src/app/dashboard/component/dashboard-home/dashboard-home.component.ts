import { Component, OnInit } from '@angular/core';
import { ModalConfig } from 'src/app/shared/config/modal-config';
import { Topic } from 'src/app/shared/dto/topic';
import { TopicService } from 'src/app/shared/service/topic.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {

  public modalConfig: ModalConfig;
  public topicList: Topic[];

  constructor(private topicService: TopicService) {
    this.modalConfig = new ModalConfig();
    this.topicList = this.topicService.getTopicList();
  }

  ngOnInit(): void {
  }

  openNewChat(): void {
    this.modalConfig.state = true;
  }

  onTopicSelection(topic: Topic): void {
    this.topicList.push(topic);
  }

}
