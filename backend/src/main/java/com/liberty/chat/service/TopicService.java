/**
 * 
 */
package com.liberty.chat.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.liberty.chat.modal.Topic;
import com.liberty.chat.repository.ITopicRepository;

/**
 * @author Swanand
 *
 */
@Service
public class TopicService implements ITopicService {
	
	private final ITopicRepository topicRepository;
	
	public TopicService(ITopicRepository topicRepository) {
		this.topicRepository = topicRepository;
	}

	@Override
	public Topic save(Topic topic) {
		return topicRepository.save(topic);
	}

	@Override
	public List<Topic> getAll() {
		return topicRepository.findAll();
	}

	@Override
	public List<Topic> getByUserId(String userId) {
		return topicRepository.findByUserId(userId);
	}

}
