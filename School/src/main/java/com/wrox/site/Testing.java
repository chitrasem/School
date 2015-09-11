package com.wrox.site;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class Testing {
	
	@ResponseBody
	@RequestMapping(value="showData", method = RequestMethod.GET)
	public Map<String, Object> showData()
	{
		Map<String, Object> m = new HashMap<>();
		m.put("Testing", "Data Testing");
		return m;
	}
}
