package com.chitra.school.studyTime;

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
import com.chitra.school.entity.StudyTime;

@Controller
@RequestMapping("studyTime")
public class StudyTimeController {
	ApplicationContext applicationContext = new AnnotationConfigApplicationContext(DBConfig.class);
	StudyTimeService studyDao = applicationContext.getBean(StudyTimeService.class);
	
	@RequestMapping(value="getTime", method = RequestMethod.GET)
	@ResponseBody
	public Map<String, Object> getStudyTime(){
		Map<String, Object> m = new HashMap<>();
		try{
			//List<StudyTime> list = studyDao.getStudyTime();
			m.put("item", studyDao.getStudyTime());
			return m;
		}catch(Exception ex){
			m.put("error", ex.getMessage());
			return m;
		}
	}

}
