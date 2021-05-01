/**
 * 
 */
package com.liberty.chat.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.liberty.chat.modal.Topic;

/**
 * @author Swanand
 *
 */
public interface ITopicRepository extends JpaRepository<Topic, String> {

	List<Topic> findByUserId(String userId);

}
