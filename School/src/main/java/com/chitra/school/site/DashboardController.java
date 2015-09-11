package com.chitra.school.site;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class DashboardController {

	@RequestMapping(value = "dashboard")
	public ModelAndView showDashboard()
	{
		ModelAndView mv = new ModelAndView();		
		mv.setViewName("dashboard");		
		return mv;
	}
}
