package com.chitra.school.attendance;

import java.util.List;

public interface AttendanceService {
	public void save(Attendance attendance);
	public List<Attendance> getAttendance();

}
