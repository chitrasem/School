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
import org.springframework.web.bind.annotation.ResponseBody;

import com.chitra.school.config.DBConfig;
import com.chitra.school.entity.Student;
import com.chitra.school.util.DateUtil;

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
	/*@RequestMapping(value="/add", method=RequestMethod.GET)
	public String addStudent(Map<String, Object> model){
		model.put("studentForm", new Student());
		return "student/add_student";		
	}*/
	@RequestMapping(value="/add", method=RequestMethod.GET)
	@ResponseBody
	public void addStudent(/*@RequestParam("firstName") String firstName,
						@RequestParam("lastName") String lastName,
						@RequestParam("sex") String sex*//*,
						@RequestParam("birthDate") Date birthDate,
						@RequestParam("registerDate") Date registerDate*/){
		Student s = new Student();
		s.setFirstName("Chitra");
		s.setLastName("Sem");
		s.setSex("Male");
		s.setBirthDate(new DateUtil().inputDate("12/30/1990"));	
		s.setRegisterDate(new Date());
		studentDao.save(s);		
		//return new RedirectView("dashboard",true,false);
		
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
	
	@ResponseBody
	@RequestMapping(value="studentName", method=RequestMethod.GET)
	public Map<String, Object> studentName(){
		Map<String, Object> map = new HashMap<>();
		try{
			List<Student> students = studentDao.studentName();
			map.put("item", students);
			return map;
		}catch(Exception ex)
		{
			map.put("error", ex.getMessage());
			return map;
		}	
		
		
	}

}
