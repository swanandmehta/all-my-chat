/**
 * 
 */
package com.liberty.chat.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.liberty.chat.dto.MessageDto;
import com.liberty.chat.modal.Message;
import com.liberty.chat.service.IMessageService;
import com.liberty.chat.transformer.MessageTransformer;

/**
 * @author Swanand
 *
 */
@RestController
@RequestMapping("/message")
public class MessageController {
	
	private IMessageService messageService;
	
	public MessageController(IMessageService messageService) {
		this.messageService = messageService;
	}
	
	@GetMapping
	public List<MessageDto> getAll(@RequestParam("topicId") String topicId) {
		List<Message> messageList = messageService.getByTopicId(topicId);
		return MessageTransformer.toMessageDto(messageList);
	}
}
