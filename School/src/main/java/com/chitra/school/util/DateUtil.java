package com.chitra.school.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtil {
	/*
	 * MM/dd/YYYY
	 */
	public Date inputDate(String userInput){
		String expectedPattern = "MM/dd/yyyy";
	    SimpleDateFormat formatter = new SimpleDateFormat(expectedPattern);
	    Date date;
	    try
	    {
	      date = formatter.parse(userInput);
	      return date;	      
	    }
	    catch (ParseException e)
	    {
	      e.printStackTrace();
	      return null;
	    }
	    
		
	}

}
