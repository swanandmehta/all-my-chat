import { Component, OnInit } from '@angular/core';
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

	constructor(private topicService: TopicService, private userService: UserService) {
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

	openNewChat(): void {
		this.modalConfig.state = true;
	}

	onTopicSelection(topic: Topic): void {
		this.topicService.createTopic(topic);
	}

}
