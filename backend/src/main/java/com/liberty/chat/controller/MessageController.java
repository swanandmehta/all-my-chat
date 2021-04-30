/**
 * 
 */
package com.liberty.chat.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import com.liberty.chat.dto.MessageDto;

/**
 * @author Swanand
 *
 */
@Controller
public class MessageController {
	
	@MessageMapping("/message")
	@SendTo("/reply")
	public MessageDto send(MessageDto message) {
		return message;
	}

}
