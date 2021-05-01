/**
 * 
 */
package com.liberty.chat.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.liberty.chat.modal.Message;
import com.liberty.chat.repository.IMessageRepository;
import com.liberty.chat.service.IMessageService;

/**
 * @author Swanand
 *
 */
@Service
public class MessageService implements IMessageService {
	
	private final IMessageRepository messageRepository;
	
	public MessageService(IMessageRepository messageRepository) {
		this.messageRepository = messageRepository;
	}

	@Override
	public List<Message> getByTopicId(String topicId) {
		return messageRepository.findByTopicIdOrderByTimestampAsc(topicId);
	}

	@Override
	public Message save(Message message) {
		return messageRepository.save(message);
	}

}
