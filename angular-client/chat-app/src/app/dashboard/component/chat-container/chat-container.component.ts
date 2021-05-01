import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Topic } from 'src/app/shared/dto/topic';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css']
})
export class ChatContainerComponent implements OnInit {

  @Input("topic")
  public topic: Topic;
  public chatForm: FormGroup;
  private subject: WebSocketSubject<string> = webSocket("ws://localhost:8080/message");

  constructor(private formBuilder: FormBuilder) {
    this.topic = new Topic();
    this.chatForm = this.formBuilder.group({
      content: ['', [Validators.required, Validators.minLength(1)]]
    });

  }

  ngOnInit(): void {
    
  }

  onSendMessage():  void {
    this.subject.subscribe();
    this.subject.next(this.chatForm.value.content);
  }

}
