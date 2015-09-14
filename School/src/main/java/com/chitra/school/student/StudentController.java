package com.chitra.school.student;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.chitra.school.config.DBConfig;

@Controller
@RequestMapping("student")
public class StudentController {
	
	ApplicationContext context = new AnnotationConfigApplicationContext(DBConfig.class);
	StudentService studentDao = context.getBean(StudentService.class);
	
	
	@RequestMapping(value="show", method = RequestMethod.GET)
	public String getStudent()
	{
		
		return "student/list_student";
	}
	@RequestMapping(value="add", method=RequestMethod.GET)
	public String addStudent(){
		return "student/add_student";		
	}
	@RequestMapping(value="add", method=RequestMethod.POST)
	public void addStudent(@RequestParam("firstName") String firstName){
		Student s = new Student();
		s.setFirstName("Randa");
		s.setLastName("Sor");
		s.setSex("Female");
		s.setBirthDate(new Date());
		
		studentDao.save(s);
		
	}
	
	@ResponseBody
	@RequestMapping(value="data", method=RequestMethod.GET)
	public Map<String, Object> listStudent(){
		Map<String, Object> map = new HashMap<>();
		try{
			List<Student> students = studentDao.getStudent();
			map.put("item", students);
			return map;
		}catch(Exception ex)
		{
			map.put("error", ex.getMessage());
			return map;
		}	
		
		
	}

}
