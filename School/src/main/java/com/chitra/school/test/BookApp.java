package com.chitra.school.test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.dao.DataAccessException;

import com.chitra.school.config.DBConfig;

public class BookApp {
	public static void main(String[] args) {
		ApplicationContext applicationContext = new AnnotationConfigApplicationContext(
				DBConfig.class);

		BookService bookService = applicationContext.getBean(BookService.class);

		try {
			Book book = new Book();
			book.setName("JFLSDJF");
			bookService.save(book);
		} catch (DataAccessException ex) {
			System.out.println("Spring dao exception handled "+ex.getMessage());
		}
	}
}
