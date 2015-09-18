package com.chitra.school.attendance;

import java.util.List;

import javax.transaction.Transactional;

@Transactional
public class AttendanceServiceImpl implements AttendanceService{
	private AttendanceDao attendanceDao;
	
	public void setAttendanceDao(AttendanceDao attendanceDao){

		this.attendanceDao = attendanceDao;	
	}

	@Override
	public void save(Attendance attendance) {	
		attendanceDao.save(attendance);
	}

	@Override
	public List<Attendance> getAttendance() {
		return attendanceDao.getAttendance();
	}

}
