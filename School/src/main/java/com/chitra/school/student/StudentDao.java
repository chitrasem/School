package com.chitra.school.student;

import java.util.List;

public interface StudentDao {
	public void save(Student student);
	public List<Student> getStudent();

}
