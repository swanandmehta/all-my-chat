/**
 * 
 */
package com.liberty.chat.modal;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.Table;

import com.liberty.chat.enums.Role;

/**
 * @author Swanand
 *
 */
@Entity
@Table(name = "message")
public class Message implements IEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name = "uuid", nullable = false)
	private String uuid;
	
	@Column(name = "timestamp", nullable = false, updatable = false)
	private LocalDateTime timestamp;
	
	@Column(name = "topicId", nullable = false, updatable = false)
	private String topicId;
	
	@Column(name = "content", nullable = false, updatable = false)
	private String content;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "role", nullable = false, updatable = false)
	private Role role;

	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public LocalDateTime getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(LocalDateTime timestamp) {
		this.timestamp = timestamp;
	}

	public String getTopicId() {
		return topicId;
	}

	public void setTopicId(String topicId) {
		this.topicId = topicId;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}
	
	

}
