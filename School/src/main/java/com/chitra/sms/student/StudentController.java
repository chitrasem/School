package com.chitra.sms.student;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("student")
public class StudentController {
	
	@RequestMapping(value="get", method = RequestMethod.GET)
	public String getStudent()
	{
		return "student/get";
	}

}
