package com.chitra.school.studyTime;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.chitra.school.entity.StudyTime;

@Repository
public class StudyTimeDaoImpl implements StudyTimeDao{
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public List<StudyTime> getStudyTime() {
		Query query = entityManager.createQuery(
				"SELECT s.id, s.startTime, s.stopTime "
				+ "FROM StudyTime s");
		return query.getResultList();
	}

	@Override
	public void save(StudyTime studyTime) {
		this.entityManager.persist(studyTime);
		
	}

}
