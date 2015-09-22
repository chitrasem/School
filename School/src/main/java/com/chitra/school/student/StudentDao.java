package com.chitra.school.student;

import java.util.List;

import com.chitra.school.entity.Student;

public interface StudentDao {
	public void save(Student student);
	public List<Student> getStudent();
	public List<Student> getStudentName();

}
