package com.chitra.school.staff;

import java.util.List;

import com.chitra.school.entity.Staff;

public interface StaffService {

	public List<Staff> getStaff();
	public List<Staff> getStaffName();
	public void save(Staff staff);

}
