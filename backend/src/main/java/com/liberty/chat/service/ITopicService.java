/**
 * 
 */
package com.liberty.chat.service;

import java.util.List;

import com.liberty.chat.modal.Topic;

/**
 * @author Swanand
 *
 */
public interface ITopicService {

	Topic save(Topic topic);

	List<Topic> getAll();

	List<Topic> getByUserId(String userId);

}
