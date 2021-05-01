/**
 * 
 */
package com.liberty.chat.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.liberty.chat.modal.Message;

/**
 * @author Swanand
 *
 */
@Repository
public interface IMessageRepository extends JpaRepository<Message, String> {

	List<Message> findByTopicIdOrderByTimestampAsc(String topicId);

}
