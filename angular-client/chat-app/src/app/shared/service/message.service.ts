import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Message } from '../dto/message';
import { UserService } from './user.service';

@Injectable({
	providedIn: 'root'
})
export class MessageService {

	constructor(private httpClient: HttpClient, private userService: UserService) {
		
	}

	getAllMessage(topicId: string): Promise<Message[]> {
		return new Promise<Message[]>(async (resolve, reject) => {
			let params = new HttpParams();

			if(topicId === undefined || topicId === '') {
				return reject("Invalid topic id is provided. Please try again with valid topic");
			}else {
				params = params.set('topicId', topicId);
			}

			this.httpClient.get<Message[]>(environment.message.rest.getAll, {params: params}).subscribe({
				next: (messageList: Message[]) => {
					return resolve(messageList);
				},
				error: (error: any) => {
					return reject(error);
				}
			});

		});
	}

}
