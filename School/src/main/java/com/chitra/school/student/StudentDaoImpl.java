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


	public List<Student> getStudent(long teacher_id, long study_time_id) {
		 Query query = entityManager.createQuery(
				 "SELECT s.firstName, s.lastName, s.sex, s.birthDate, s.registerDate, s.phoneNumber "
				 + "from Student s "
				 + "join s.staff t "
				 + "join s.studyTime st "
				 + "WHERE t.id = :teacher_id "
				 + "AND st.id = :study_time_id "
				 + "ORDER BY s.id DESC");
		 		query.setParameter("teacher_id", teacher_id);
		 		query.setParameter("study_time_id", study_time_id);
		 		
		return query.getResultList();
	}


	@Override
	public List<Student> getStudentName() {
		Query query = entityManager.createQuery(
				"select s.firstName, s.lastName from Student s");
		List<Student> students = query.getResultList();
		return students;
	}

}
