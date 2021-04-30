import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/shared/dto/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input("message")
  public message: Message;

  constructor() {
    this.message = new Message();
  }

  ngOnInit(): void {
  }

}
