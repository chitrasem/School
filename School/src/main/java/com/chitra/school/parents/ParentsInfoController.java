package com.chitra.school.parents;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("parents")
public class ParentsInfoController {
	
	@RequestMapping(value={"","show"}, method = RequestMethod.GET)
	public String showParents(){
		return "parents/list";
	}

}
