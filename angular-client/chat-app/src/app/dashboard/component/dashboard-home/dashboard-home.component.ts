import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { ModalConfig } from 'src/app/shared/config/modal-config';
import { Topic } from 'src/app/shared/dto/topic';
import { User } from 'src/app/shared/dto/user';
import { TopicService } from 'src/app/shared/service/topic.service';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
	selector: 'app-dashboard-home',
	templateUrl: './dashboard-home.component.html',
	styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {

	public modalConfig: ModalConfig;
	public topicList: Topic[];
	public userName: String = '';

	/**
	 * Constructor for Dashboard Home
	 * Loads all avaliable topic for User or Client
	 * Loads user
	 * @param topicService 
	 * @param userService 
	 * @param authService 
	 */
	constructor(private topicService: TopicService, private userService: UserService, 
		private authService: OktaAuthService) {
		this.modalConfig = new ModalConfig();
		this.topicList = this.topicService.getTopicList();
		this.userService.getCurrentUser().then(
			(user: User) => {
				if(user.name !== undefined){
					this.userName = user.name;
				}
			}
		)
	}

	ngOnInit(): void {
	}

	/**
	 * Trigger for opening new chat modal
	 */
	openNewChat(): void {
		this.modalConfig.state = true;
	}

	/**
	 * Callback for topic creation used by chat modal
	 * @param topic 
	 */
	onTopicSelection(topic: Topic): void {
		this.topicService.createTopic(topic);
	}

	/**
	 * Logout user from application and okta session
	 */
	async logout(): Promise<boolean> {
		this.authService.tokenManager.clear();
		await this.authService.signOut();
		return Promise.resolve(true);
	}

}
