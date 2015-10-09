package com.chitra.school.staff;

import java.util.HashMap;
import java.util.Map;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.chitra.school.config.DBConfig;

@Controller
@RequestMapping("staff")
public class StaffController {
	private ApplicationContext applicationContext =
			new AnnotationConfigApplicationContext(DBConfig.class);
	StaffService staffDao = applicationContext.getBean(StaffService.class);
	
	@RequestMapping(value="getStaffName", method = RequestMethod.GET)
	@ResponseBody
	public Map<String, Object> getStaffName(){
		Map<String, Object> m = new HashMap<>();
		try{
			m.put("item",staffDao.getStaffName());
			return m;
		}catch(Exception e){		
			m.put("error", e.getMessage());
			return m;			
		}
	}
	@RequestMapping(value = {"","show"}, method = RequestMethod.GET)
	public String showStaff(){
		return "Hello World";
	}

}
