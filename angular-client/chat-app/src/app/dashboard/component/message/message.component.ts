import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/shared/dto/message';
import { User } from 'src/app/shared/dto/user';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input("message")
  public message: Message;

  @Input("activeUser")
  public activeUser: User | null = null;
  
  constructor() {
    this.message = new Message();
  }

  ngOnInit(): void {
  }

}
