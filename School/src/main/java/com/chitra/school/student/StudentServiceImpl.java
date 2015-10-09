package com.chitra.school.student;

import java.util.List;

import javax.transaction.Transactional;

import com.chitra.school.entity.Student;

@Transactional
public class StudentServiceImpl implements StudentService{
	
	private StudentDao studentDao;

	public void setStudentDao(StudentDao studentDao) {
		this.studentDao = studentDao;
	}

	@Override
	public void save(Student student) {
		studentDao.save(student);		
	}


	@Override
	public List<Student> studentName() {
		return studentDao.getStudentName();
	}

	@Override
	public List<Student> getStudent(long teacher_id, long study_time_id) {
		return studentDao.getStudent(teacher_id, study_time_id);
	}
	

}
