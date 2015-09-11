package com.chitra.school.student;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.View;

@Controller
@RequestMapping("student")
public class StudentController {
	
	@RequestMapping(value="get", method = RequestMethod.GET)
	public String getStudent()
	{
		return "student/get";
	}

}
