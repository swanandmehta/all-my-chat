import { Injectable } from '@angular/core';
import { Topic } from '../dto/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private topicList: Topic[];

  constructor() {
    this.topicList = [];
  }

  getTopicList(): Topic[] {
    return this.topicList;
  }
}
