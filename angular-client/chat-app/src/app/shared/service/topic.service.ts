import { Injectable } from '@angular/core';
import { Topic } from '../dto/topic';
import * as SockJS from 'sockjs-client'
import { Stomp, Client } from '@stomp/stompjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private topicList: Topic[];
  private clientList: Client[];

  constructor(private httpClient:HttpClient) {
    this.clientList = [];
    this.topicList = [];
  }

  getTopicList(): Topic[] {
    return this.topicList;
  }

  createTopic(topic: Topic): void {
    const client: Client = this.initConnection(topic);

    this.clientList.push(client);
    this.topicList.push(topic);
  }

  private initConnection(topic: Topic): Client {
    const client: Client = new Client({
      webSocketFactory: () => {
        return new WebSocket("ws://localhost:8080/chat");
      },
      debug : (message: string) => {
        console.log(message);
      },
    });

    client.activate();
    return client;
  }

}
