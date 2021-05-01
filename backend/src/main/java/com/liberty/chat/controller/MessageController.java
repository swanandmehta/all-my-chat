/**
 * 
 */
package com.liberty.chat.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

/**
 * @author Swanand
 *
 */
@Controller
public class MessageController {
	
	private final SimpMessagingTemplate template;
	
	public MessageController(SimpMessagingTemplate template) {
		this.template = template;
	}
		
	@MessageMapping("/topic")
	public void send(String message) {
		template.convertAndSend("/topic/reply", message);
	}

}
