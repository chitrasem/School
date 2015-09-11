package com.chitra.school.student;

import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import com.chitra.school.test.BookDao;

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
