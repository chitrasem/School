package com.chitra.school.classroom;

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
import com.chitra.school.entity.ClassRoom;

@Controller
@RequestMapping("classroom")
public class ClassroomController {
	
	ApplicationContext context = new AnnotationConfigApplicationContext(DBConfig.class);
	ClassroomService classroomDao = context.getBean(ClassroomService.class);
	
	@RequestMapping(value={"","show"},method=RequestMethod.GET)
	public String showClassroom(){
		return "classroom/list-classroom";
	}
	
	@ResponseBody
	@RequestMapping(value="list",method=RequestMethod.GET)
	public Map<String, Object> listClassroom(){
		Map<String, Object> m = new HashMap<>();
		List<ClassRoom> classrooms; 
		try{
			classrooms = classroomDao.listClassroom();
			m.put("item", classrooms);
			return m;
		}catch(Exception ex){
			m.put("error",ex.getMessage());
			return m;
		}
	}

}
