package com.chitra.school.site;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("dashboard")
public class DashboardController {

	@RequestMapping(value = {"","show"})
	public ModelAndView showDashboard()
	{
		ModelAndView mv = new ModelAndView();		
		mv.setViewName("dashboard/index");		
		return mv;
	}
}
