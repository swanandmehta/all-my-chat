import { AfterViewChecked, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from '@stomp/stompjs';
import { Message } from 'src/app/shared/dto/message';
import { Topic } from 'src/app/shared/dto/topic';
import { User } from 'src/app/shared/dto/user';
import { MessageService } from 'src/app/shared/service/message.service';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
	selector: 'app-chat-container',
	templateUrl: './chat-container.component.html',
	styleUrls: ['./chat-container.component.css']
})
export class ChatContainerComponent implements OnInit, AfterViewChecked {

	@Input("topic")
	public topic: Topic;

	@ViewChild('scrollableElement')
	private scrollableDiv: ElementRef | null = null;

	public chatForm: FormGroup;
	public client: Client;
	public activeUser: User | null = null;

	/**
	 * Chat container constructor
	 * Create and loads topic and establish connection to server using sockets
	 * @param formBuilder 
	 * @param messageService 
	 * @param userService 
	 */
	constructor(private formBuilder: FormBuilder, private messageService: MessageService, private userService: UserService) {
		this.topic = new Topic();
		this.userService.getCurrentUser().then(
			(user: User) => {
				this.activeUser = user;
			}
		);

		this.chatForm = this.formBuilder.group({
			content: ['', [Validators.required, Validators.minLength(1)]]
		});

		this.client = new Client({
			brokerURL: "ws://localhost:8080/socket"
		});

		this.client.activate();
	}

	/**
	 * Used to load message for given topic Used to scroll at very end of chat
	 */
	ngOnInit(): void {
		this.loadMessage();
	}

	/**
	 * Used to scroll after View is updated
	 */
	ngAfterViewChecked() {
		this.scrollToBottom();
	}

	/**
	 * used to scroll at bottom of the page
	 */
	scrollToBottom(): void {
		if (this.scrollableDiv !== null) {
			this.scrollableDiv.nativeElement.scrollTop = this.scrollableDiv.nativeElement.scrollHeight;
		}
	}

	/**
	 * Uses scoket protocol and user email to determine and sent the message to backend
	 */
	onSendMessage(): void {
		if (this.chatForm.valid && this.activeUser !== null) {
			const messageDto: Message = new Message();
			messageDto.content = this.chatForm.value.content;
			messageDto.role = this.activeUser.email === "agent@servicedesk.com" ? "AGENT" : 'USER';
			messageDto.topicId = this.topic.uuid;

			this.client.publish({
				destination: "/topic/" + this.topic.uuid,
				body: JSON.stringify(messageDto)
			});

			this.reset();
		}
	}

	/**
	 * Used to rest form after action
	 */
	private reset(): void {
		this.chatForm.reset({
			content: '',
		}, { emitEvent: false });

	}

	private loadMessage(): void {
		if (this.topic !== undefined && this.topic.name !== '' && this.topic.messageList.length === 0) {
			this.messageService.getAllMessage(this.topic.uuid).then(
				(messsageList: Message[]) => {
					this.topic.messageList = messsageList;
					this.scrollToBottom();
					this.topic.isOpen = true;
				}
			)
		}
	}

}
