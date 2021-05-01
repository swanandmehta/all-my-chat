/**
 * 
 */
package com.liberty.chat.service;

import java.util.List;

import com.liberty.chat.modal.Message;

/**
 * @author Swanand
 *
 */
public interface IMessageService {

	List<Message> getByTopicId(String topicId);

	Message save(Message message);

}
