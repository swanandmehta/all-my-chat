import { Component, Input, OnInit } from '@angular/core';
import { Topic } from 'src/app/shared/dto/topic';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css']
})
export class ChatContainerComponent implements OnInit {

  @Input("topic")
  public topic: Topic | null;

  constructor() {
    this.topic = null;
  }

  ngOnInit(): void {
  }

}
