/**
 * 
 */
package com.liberty.chat.transformer;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import com.liberty.chat.dto.MessageDto;
import com.liberty.chat.modal.Message;

/**
 * @author Swanand
 *
 */
public class MessageTransformer {

	public static MessageDto toMessageDto(Message message) {
		MessageDto dto = new MessageDto();
		dto.setContent(message.getContent());
		dto.setRole(message.getRole());
		dto.setTopicId(message.getTopicId());
		return dto;
	}

	public static List<MessageDto> toMessageDto(List<Message> messageList) {
		return messageList.parallelStream()
					.map(MessageTransformer::toMessageDto)
					.collect(Collectors.toList());
	}

	public static Message fromMessageDto(MessageDto dto) {
		Message message = new Message();

		message.setTimestamp(LocalDateTime.now());
		message.setTopicId(dto.getTopicId());
		message.setUuid(UUID.randomUUID().toString());
		message.setContent(dto.getContent());
		message.setRole(dto.getRole());
		
		return message;
	}
}
