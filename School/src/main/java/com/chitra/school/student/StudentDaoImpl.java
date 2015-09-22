package com.chitra.school.student;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.chitra.school.entity.Student;

@Repository
public class StudentDaoImpl implements StudentDao{
	 @PersistenceContext
	    private EntityManager entityManager;

	@Override
	public void save(Student student) {
		entityManager.persist(student);
		
	}


	public List<Student> getStudent() {
		Query query = entityManager.createQuery(
				"select s.firstName, s.lastName, s.sex, s.birthDate, s.registerDate from Student s");
		List<Student> students = query.getResultList();
		return students;
	}


	@Override
	public List<Student> getStudentName() {
		Query query = entityManager.createQuery(
				"select s.firstName, s.lastName from Student s");
		List<Student> students = query.getResultList();
		return students;
	}

}
