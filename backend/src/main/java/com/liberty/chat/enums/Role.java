package com.liberty.chat.enums;

public enum Role {
	AGENT("AGENT"),
	USER("USER"),
	ROBOT("ROBOT"),;

	private String value;
	
	private Role(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}
	
	
}
