package com.chitra.school.attendance;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.chitra.school.config.DBConfig;
import com.chitra.school.entity.Student;
import com.chitra.school.util.DateUtil;

@Controller
@RequestMapping("attendance")
public class AttendanceController {
	
	/*AnnotationConfigApplicationContext context = 
			new AnnotationConfigApplicationContext(DBConfig.class);
	AttendanceService attendanceDao = 
			context.getBean(AttendanceService.class);
	
	@RequestMapping(value={"","show"}, method = RequestMethod.GET)
	public String showAttendance(){
		return "attendance/list-attendance";
	}
	
	@RequestMapping(value="add", method=RequestMethod.GET)
	public void test(){
		long student_id = 2L;
		
		Student student = new Student();
		student.setId(student_id);
		Attendance attendance = new Attendance();
		attendance.setStatus("A");
		attendance.setAbsentDate(new DateUtil().inputDate("11/18/2015"));
		
		attendance.setStudent(student);
		try{
			attendanceDao.save(attendance);
		}catch(Exception ex){
			System.out.println("Error: "+ex.getMessage());
		}
		
	}
	
	@RequestMapping(value="list", method=RequestMethod.GET)
	@ResponseBody
	public Map<String, Object> testing(){
		Map<String, Object> m = new HashMap<>();
		List<Attendance> attendances;
		try{
			attendances  = attendanceDao.getAttendance();
			m.put("item", attendances);
		}catch(Exception ex){
			m.put("error", ex.getMessage());
		}
		
		return m;
	}
*/
}
