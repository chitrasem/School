package com.chitra.school.student;

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
import com.chitra.school.entity.Staff;
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
	/*@RequestMapping(value="/add", method=RequestMethod.POST)
	public String addStudent(Map<String, Object> model){
		model.put("studentForm", new Student());
		return "student/add_student";		
	}*/
	@RequestMapping(value="/add", method=RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> addStudent(@RequestParam("first_name") String firstName,
						@RequestParam("last_name") String lastName,
						@RequestParam("gender") String gender,						
						@RequestParam("date_birth") String birthDate,
						@RequestParam("date_enrolled") String registerDate)
	{
		
		Student s = new Student();
		
		s.setFirstName(firstName);
		s.setLastName(lastName);
		s.setSex(gender);
		s.setBirthDate(new DateUtil().inputDate(birthDate));	
		s.setRegisterDate(new DateUtil().inputDate(registerDate));
		s.setStaff(new Staff(2L));
		studentDao.save(s);		
		//return new RedirectView("dashboard",true,false);
		Map<String, Object> m = new HashMap<>();
		m.put("success", "You have been added " + firstName + "successfull!");
		
		return m;
		
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
