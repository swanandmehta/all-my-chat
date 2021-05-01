/**
 * 
 */
package com.liberty.chat.modal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author Swanand
 *
 */
@Entity
@Table(name = "topic")
public class Topic implements IEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name = "uuid", nullable = false, unique = true)
	private String uuid;	
	
	@Column(name = "user_id", nullable = false)
	private String userId;
	
	@Column(name = "name", nullable = false)
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
