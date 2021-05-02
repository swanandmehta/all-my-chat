import { Injectable } from '@angular/core';
import { Topic } from '../dto/topic';
import { Client, IMessage } from '@stomp/stompjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserService } from './user.service';
import { User } from '../dto/user';
import { Message } from '../dto/message';
import { environment } from 'src/environments/environment';


@Injectable({
	providedIn: 'root'
})
export class TopicService {

	private topicList: Topic[];

	/**
	 * 
	 * @param httpClient 
	 * @param userService 
	 */
	constructor(private httpClient: HttpClient, private userService: UserService) {
		this.topicList = [];
	}

	/**
	 * returns topic list 
	 * In case of topic do not exist checks with server and updates the topic
	 * 
	 */
	getTopicList(): Topic[] {
		if (this.topicList.length == 0) {
			this.loadAllTopic();
		}
		return this.topicList;
	}

	/**
	 * Load all topics as per user
	 * for Normal user will have specific topic created by him will be return
	 * for Agent all topics will be returned
	 */
	loadAllTopic(): Promise<Topic[]> {
		return new Promise<Topic[]>(async (resolve, reject) => {
			const user: User = await this.userService.getCurrentUser();
			let params = new HttpParams();

			if (user.id === undefined) {
				return reject("Could not find the user details for logged-in user");
			} else if (user.email !== undefined && user.email !== "agent@servicedesk.com") {
				params = params.set('userId', user.id);
			}

			this.httpClient.get<Topic[]>(environment.topic.rest.getAll, { params: params }).subscribe({
				next: (topicList: Topic[]) => {
					topicList.forEach((topic: Topic) => {
						topic = { ...new Topic(), ...topic }
						this.initConnection(topic);
						this.topicList.push(topic);
					});
					return resolve(topicList);
				},
				error: (error: any) => {
					return reject(error);
				}
			});

		});
	}

	/**
	 * Creates a topic
	 * returns error in case of userid is missing or error from server
	 * @param topic 
	 */
	createTopic(topic: Topic): Promise<Topic> {
		return new Promise<Topic>(async (resolve, reject) => {
			const user: User = await this.userService.getCurrentUser();

			if (user.id != undefined) {
				topic.userId = user.id;
			} else {
				return reject("Could not find the user id for Logged-In user.");
			}

			this.httpClient.post<Topic>(environment.topic.rest.create, topic).subscribe({
				next: (savedTopic: Topic) => {
					savedTopic = { ...new Topic(), ...savedTopic }
					this.initConnection(savedTopic)
					this.topicList.push(savedTopic);
					return resolve(savedTopic);
				},
				error: (error: any) => {
					return reject(error);
				}
			});

		});
	}

	/**
	 * Create connection to recieve the messages
	 * the messages are created subscribe in runtime
	 * so all windows could be updated in case user is working with multiple topics
	 * @param topic 
	 */
	private initConnection(topic: Topic): Client {
		const client: Client = new Client({
			brokerURL: "ws://localhost:8080/socket",
			onConnect: () => {
				client.subscribe("/queue/" + topic.uuid, (message: IMessage) => {
					if(topic.messageList.length !== 0 || topic.isOpen == true){
						topic.messageList.push(JSON.parse(message.body) as Message)
					}
				});
			}
		});

		client.activate();
		return client;
	}

}
