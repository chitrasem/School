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
		/*Query query = entityManager.createQuery(
				"select s.firstName, s.lastName, s.sex, s.birthDate, s.registerDate t.firstName, t.lastName "
				+ "from Staff t "
				+ "join t.students s "
				+ "ORDER BY s.id DESC");*/
		 Query query = entityManager.createQuery(
				 "SELECT s.firstName, s.lastName, s.sex, s.birthDate, s.registerDate, t.firstName from Staff t join t.students s "
				 + "WHERE t.id = 2L "
				 + "ORDER BY s.id");
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
