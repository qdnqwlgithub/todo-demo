package com.example.demo;

import com.example.demo.entity.Todo;
import com.example.demo.repository.TodoRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.stereotype.Component;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.Date;
import java.util.Random;
import java.util.stream.Stream;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	// eat food
//	@Bean
//	ApplicationRunner init(TodoRepository repository) {
//
//		return args -> {
//			Todo eatBreakfastTodo = new Todo();
//			eatBreakfastTodo.setTitle("eat breakfast");
//			eatBreakfastTodo.setCompleted(false);
//			eatBreakfastTodo.setUpdateTime(LocalDateTime.now());
//			repository.save(eatBreakfastTodo);
//
//			Todo eatLunchTodo = new Todo();
//			eatLunchTodo.setTitle("eat lunch");
//			eatLunchTodo.setCompleted(false);
//			eatLunchTodo.setUpdateTime(LocalDateTime.now());
//			repository.save(eatLunchTodo);
//
//			Todo dinnerTodo = new Todo();
//			dinnerTodo.setTitle("eat dinner");
//			dinnerTodo.setCompleted(false);
//			dinnerTodo.setUpdateTime(LocalDateTime.now());
//			repository.save(dinnerTodo);
//
//			repository.findAll().forEach(System.out::println);
//		};
//	}

	// Fix the CORS errors
//	@Bean
//	public FilterRegistrationBean simpleCorsFilter() {
//		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//		CorsConfiguration config = new CorsConfiguration();
//		config.setAllowCredentials(true);
//		// *** URL below needs to match the Vue client URL and port ***
//		config.setAllowedOrigins(Collections.singletonList("http://localhost:8080"));
//		config.setAllowedMethods(Collections.singletonList("*"));
//		config.setAllowedHeaders(Collections.singletonList("*"));
//		source.registerCorsConfiguration("/**", config);
//		FilterRegistrationBean bean = new FilterRegistrationBean<>(new CorsFilter(source));
//		bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
//		return bean;
//	}

	// Expose IDs of Todo items
	@Component
	class RestRespositoryConfigurator implements RepositoryRestConfigurer {
		public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
			config.exposeIdsFor(Todo.class);
		}
	}

}
