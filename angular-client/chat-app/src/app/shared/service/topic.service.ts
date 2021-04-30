import { Injectable } from '@angular/core';
import { Topic } from '../dto/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private topicList: Topic[];

  constructor() {
    this.topicList = [
      {
        name: "Test1",
        messageList: [
          {
            username: "Test1",
            content: "I am User",
            date: "26-Oct-2021",
            role: "USER"
          },
          {
            username: "Test1",
            content: "I am Agent",
            date: "26-Oct-2021",
            role: "AGENT"
          },
          {
            username: "Test1",
            content: "I am User",
            date: "26-Oct-2021",
            role: "USER"
          },
          {
            username: "Test1",
            content: "I am Agent",
            date: "26-Oct-2021",
            role: "AGENT"
          },
          {
            username: "Test1",
            content: "I am Robot",
            date: "26-Oct-2021",
            role: "ROBOT"
          },
          {
            username: "Test1",
            content: "I am User",
            date: "26-Oct-2021",
            role: "USER"
          }
        ],
        uuid: "Test1"
      },
      {
        name: "Test1",
        messageList: [
          {
            username: "Test1",
            content: "I am User",
            date: "26-Oct-2021",
            role: "USER"
          },
          {
            username: "Test1",
            content: "I am Agent",
            date: "26-Oct-2021",
            role: "AGENT"
          },
          {
            username: "Test1",
            content: "I am User",
            date: "26-Oct-2021",
            role: "USER"
          },
          {
            username: "Test1",
            content: "I am Agent",
            date: "26-Oct-2021",
            role: "AGENT"
          },
          {
            username: "Test1",
            content: "I am Robot",
            date: "26-Oct-2021",
            role: "ROBOT"
          },
          {
            username: "Test1",
            content: "I am User",
            date: "26-Oct-2021",
            role: "USER"
          }
        ],
        uuid: "Test1"
      }
    ];
  }

  getTopicList(): Topic[] {
    return this.topicList;
  }
}
