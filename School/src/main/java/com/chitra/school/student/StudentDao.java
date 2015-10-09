package com.chitra.school.student;

import java.util.List;

import com.chitra.school.entity.Student;

public interface StudentDao {
	public void save(Student student);
	public List<Student> getStudent(long teacher_id, long study_time);
	public List<Student> getStudentName();

}
