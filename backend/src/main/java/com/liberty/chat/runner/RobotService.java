/**
 * 
 */
package com.liberty.chat.runner;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.time.format.FormatStyle;
import java.util.List;
import java.util.UUID;

import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.liberty.chat.enums.Role;
import com.liberty.chat.modal.Message;
import com.liberty.chat.modal.Topic;
import com.liberty.chat.service.IMessageService;
import com.liberty.chat.service.ITopicService;
import com.liberty.chat.transformer.MessageTransformer;

/**
 * @author Swanand
 *
 */
@Component
public class RobotService {
	
	private final ITopicService topicService;
	private final SimpMessagingTemplate template;
	private final IMessageService messageService;
	
	public RobotService(ITopicService topicService, SimpMessagingTemplate template, 
			IMessageService messageService) {
		this.topicService = topicService;
		this.template = template;
		this.messageService = messageService;
	}

	/**
	 * Robot informs current time every 120sec to all the topics or conversations
	 */
	@Scheduled(fixedDelay = 120000, initialDelay = 10000)
	public void whatIsTheTime() {
		List<Topic> topicList = topicService.getAll();
		topicList.parallelStream().forEach(topic -> {
			Message message = new Message();
			LocalDateTime now = LocalDateTime.now();
			
			message.setTimestamp(LocalDateTime.now());
			message.setTopicId(topic.getUuid());
			message.setUuid(UUID.randomUUID().toString());
			message.setContent("The Robot says 'The time is "+now.atZone(ZoneId.systemDefault()).format(DateTimeFormatter.ofLocalizedDateTime(FormatStyle.FULL)) + "'.");
			message.setRole(Role.ROBOT);
			
			messageService.save(message);
			template.convertAndSend("/queue/"+topic.getUuid(), MessageTransformer.toMessageDto(message));
		});
	}
}
