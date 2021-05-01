/**
 * 
 */
package com.liberty.chat.dto;

/**
 * @author Swanand
 *
 */
public class TopicDto implements IDto {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String uuid;	
	private String userId;
	private String name;
	
	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}
	
	public String getUserId() {
		return userId;
	}
	
	public void setUserId(String userId) {
		this.userId = userId;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	

}
