package com.chitra.school.test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.chitra.school.config.DBConfig;

@Controller
@RequestMapping("test")
public class BookController 
{
	ApplicationContext applicationContext = new AnnotationConfigApplicationContext(
			DBConfig.class);
	BookService bookService = applicationContext.getBean(BookService.class);

	@RequestMapping(value="/book", method=RequestMethod.GET)
	@ResponseBody
	public Map<String, Object> getBooks(){
		Map<String, Object> m = new HashMap<>();
		List<Book> books = bookService.getBook();	
		
		m.put("message", books);
		
		return m;
	}

}
