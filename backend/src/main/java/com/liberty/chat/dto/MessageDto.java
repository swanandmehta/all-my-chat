/**
 * 
 */
package com.liberty.chat.dto;

import com.liberty.chat.enums.Role;

/**
 * @author Swanand
 *
 */
public class MessageDto implements IDto {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String content;
	private Role role;
	private String topicId;
	
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
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public String getTopicId() {
		return topicId;
	}
	public void setTopicId(String topicId) {
		this.topicId = topicId;
	}

}
