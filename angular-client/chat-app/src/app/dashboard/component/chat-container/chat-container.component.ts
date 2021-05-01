import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client, IMessage } from '@stomp/stompjs';
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
	public client: Client;

	constructor(private formBuilder: FormBuilder) {
		this.topic = new Topic();
		this.chatForm = this.formBuilder.group({
			content: ['', [Validators.required, Validators.minLength(1)]]
		});

		this.client = new Client({
			brokerURL: "ws://localhost:8080/chat"
		});

		this.client.activate();
	}

	ngOnInit(): void {
		console.log(this.topic);
	}

	onSendMessage(): void {
		this.client.publish({
			destination: "/topic",
			body: this.chatForm.value.content
		});
		//this.subject.next(this.chatForm.value.content);
	}

}
