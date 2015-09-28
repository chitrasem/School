package com.chitra.school.classroom;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.chitra.school.entity.ClassRoom;

@Repository
public class ClassroomDaoImpl implements ClassroomDao{
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public List<ClassRoom> listClassroom() {
		Query query = entityManager.createQuery(
				"select s from ClassRoom s");
		List<ClassRoom> classRooms = query.getResultList();
		return classRooms;
	}

	@Override
	public void saveClassroom(ClassRoom room) {
		entityManager.persist(room);
		
	}

}
