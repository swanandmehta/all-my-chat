/**
 * 
 */
package com.liberty.chat.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

/**
 * @author Swanand
 *
 */
@Configuration
@EnableWebSocketMessageBroker
public class MessageBrokerConfig implements WebSocketMessageBrokerConfigurer {

	/**
	 * Creates endpoint with "/queue" for system to be used
	 */
	@Override
	public void configureMessageBroker(MessageBrokerRegistry registry) {
		registry.enableSimpleBroker("/queue");
	}
	
	/**
	 * Creates a stomp endpoint as "/socket" with allowed origins from localhost:4200
	 */
	@Override
	public void registerStompEndpoints(StompEndpointRegistry registry) {
		registry.addEndpoint("/socket").setAllowedOrigins("http://localhost:4200");
	}
}
