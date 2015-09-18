package com.chitra.school.attendance;

import java.util.List;

public interface AttendanceDao {
	
	public void save(Attendance attendance);
	public List<Attendance> getAttendance();

}
