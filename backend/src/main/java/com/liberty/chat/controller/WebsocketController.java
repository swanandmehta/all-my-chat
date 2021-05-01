/**
 * 
 */
package com.liberty.chat.controller;

import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import com.liberty.chat.dto.MessageDto;
import com.liberty.chat.modal.Message;
import com.liberty.chat.service.IMessageService;
import com.liberty.chat.transformer.MessageTransformer;

/**
 * @author Swanand
 *
 */
@Controller
public class WebsocketController {
	
	private final SimpMessagingTemplate template;
	private final IMessageService messageService;
	
	public WebsocketController(SimpMessagingTemplate template,
			IMessageService messageService) {
		this.template = template;
		this.messageService = messageService;
	}
		
	@MessageMapping("/topic/{uuid}")
	public void send(@DestinationVariable("uuid") String topicId, MessageDto dto) {
		Message message = MessageTransformer.fromMessageDto(dto);
		messageService.save(message);
		template.convertAndSend("/queue/"+topicId, dto);
	}

}
