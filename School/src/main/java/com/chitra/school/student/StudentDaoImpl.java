package com.chitra.school.student;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

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
				"select s from Student s");
		List<Student> students = query.getResultList();
		return students;
	}

}
