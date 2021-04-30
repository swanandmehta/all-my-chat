/**
 * 
 */
package com.liberty.chat.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * @author Swanand
 *
 */
@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
		.cors().disable()
		.authorizeRequests().anyRequest().authenticated()
		.and()
		.oauth2Login()
		.and()
		.oauth2ResourceServer().jwt();
	}
}
