/**
 * 
 */
package com.liberty.chat.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.liberty.chat.dto.TopicDto;
import com.liberty.chat.modal.Topic;
import com.liberty.chat.service.ITopicService;
import com.liberty.chat.transformer.TopicTransformer;

/**
 * @author Swanand
 *
 */
@RestController
@RequestMapping("/topic")
public class TopicController {
	
	private ITopicService topicService;
	
	public TopicController(ITopicService topicService) {
		this.topicService = topicService;
	}
	
	@PostMapping
	public TopicDto create(@RequestBody TopicDto dto) {
		Topic topic = topicService.save(TopicTransformer.fromTopicDto(dto));
		return TopicTransformer.toTopicDto(topic);
	}
	
	@GetMapping
	public List<TopicDto> getAll(@RequestParam(name = "userId", required = false, defaultValue = "") String userId) {
		List<Topic> topicList = null;

		if(userId.isEmpty()) {
			topicList = topicService.getAll();
		} else {
			topicList = topicService.getByUserId(userId);
		}
		
		return TopicTransformer.toTopicDto(topicList);
	}
}
