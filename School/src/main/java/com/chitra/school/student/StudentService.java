package com.chitra.school.student;

import java.util.List;

import com.chitra.school.entity.Student;

public interface StudentService {
	public void save(Student student);
	public List<Student> getStudent(long teacher_id, long study_time_id);
	public List<Student> studentName();

}
