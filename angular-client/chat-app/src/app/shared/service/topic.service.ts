import { Injectable } from '@angular/core';
import { Topic } from '../dto/topic';
import { Client, IMessage } from '@stomp/stompjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserService } from './user.service';
import { User } from '../dto/user';
import { environment } from 'src/environments/environment';


@Injectable({
	providedIn: 'root'
})
export class TopicService {

	private topicList: Topic[];

	constructor(private httpClient: HttpClient, private userService: UserService) {
		this.topicList = [];
	}

	getTopicList(): Topic[] {
		if(this.topicList.length == 0){
			this.loadAllTopic();
		}
		return this.topicList;
	}
	
	loadAllTopic(): Promise<Topic[]> {
		return new Promise<Topic[]>(async (resolve, reject) => {
			const user: User = await this.userService.getCurrentUser();
			let params = new HttpParams();

			if(user.id === undefined) {
				return reject("Could not find the user details for logged-in user");
			}else {
				params = params.set('userId', user.id);
			}

			this.httpClient.get<Topic[]>(environment.topic.rest.getAll, {params: params}).subscribe({
				next: (topicList: Topic[]) => {
					topicList.forEach((topic: Topic) => {
						this.initConnection(topic);
						this.topicList.push({...new Topic(), ...topic});
					});
					return resolve(topicList);
				},
				error: (error: any) => {
					return reject(error);
				}
			});

		});
	}

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
					this.initConnection(savedTopic)
					this.topicList.push({...new Topic(), ...savedTopic});
					return resolve(savedTopic);
				},
				error: (error: any) => {
					return reject(error);
				}
			});

		});
	}

	private initConnection(topic: Topic): Client {
		const client: Client = new Client({
			brokerURL: "ws://localhost:8080/chat",
			onConnect: () => {
				client.subscribe("/topic/reply", (message: IMessage) => {
					console.log(message);
				});
			}
		});

		client.activate();
		return client;
	}

}
