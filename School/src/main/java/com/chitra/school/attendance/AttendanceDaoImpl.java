package com.chitra.school.attendance;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

@Repository
public class AttendanceDaoImpl implements AttendanceDao{
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public void save(Attendance attendance) {
		entityManager.persist(attendance);
		
	}

	@Override
	public List<Attendance> getAttendance() {
		Query query = entityManager.createQuery(
				"select a from Attendance a join a.student s");
		
		List<Attendance> attendances = query.getResultList();
		
		return attendances;
	}

}
