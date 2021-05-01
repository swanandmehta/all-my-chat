/**
 * 
 */
package com.liberty.chat.transformer;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import com.liberty.chat.dto.TopicDto;
import com.liberty.chat.modal.Topic;

/**
 * @author Swanand
 *
 */
public class TopicTransformer {

	public static Topic fromTopicDto(TopicDto dto) {
		Topic topic = new Topic();
		topic.setName(dto.getName());
		topic.setUserId(dto.getUserId());
		topic.setUuid(dto.getUuid() != null && !dto.getUuid().isEmpty() ? dto.getUuid() : UUID.randomUUID().toString());
		return topic;
	}

	public static TopicDto toTopicDto(Topic topic) {
		TopicDto dto = new TopicDto();
		dto.setName(topic.getName());
		dto.setUserId(topic.getUserId());
		dto.setUuid(topic.getUuid());
		return dto;
	}

	public static List<TopicDto> toTopicDto(List<Topic> topicList) {
		return topicList.parallelStream()
					.map(TopicTransformer::toTopicDto)
					.collect(Collectors.toList());
	}
}
