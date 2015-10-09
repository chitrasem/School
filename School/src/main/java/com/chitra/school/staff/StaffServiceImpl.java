package com.chitra.school.staff;

import java.util.List;

import javax.transaction.Transactional;

import com.chitra.school.entity.Staff;

@Transactional
public class StaffServiceImpl implements StaffService{
	private StaffDao staffDao;
	
	public void setStaffDao(StaffDao staffDao){
		this.staffDao = staffDao;
	}

	@Override
	public List<Staff> getStaff() {
		return this.staffDao.getStaff();
	}

	@Override
	public List<Staff> getStaffName() {
		return this.staffDao.getStaffName();
	}

	@Override
	public void save(Staff staff) {
		this.staffDao.save(staff);
		
	}

}
