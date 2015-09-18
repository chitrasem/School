package com.chitra.school.student;

import java.util.List;

import javax.transaction.Transactional;

import com.chitra.school.entity.Student;

@Transactional
public class StudentServiceImpl implements StudentService{
	
	StudentDao studentDao;

	public void setStudentDao(StudentDao studentDao) {
		this.studentDao = studentDao;
	}

	@Override
	public void save(Student student) {
		studentDao.save(student);		
	}

	@Override
	public List<Student> getStudent() {
		return studentDao.getStudent();
	}
	

}
