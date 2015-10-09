package com.chitra.school.staff;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.chitra.school.entity.Staff;

@Repository
public class StaffDaoImpl implements StaffDao{
	
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public List<Staff> getStaff() {
		Query query = entityManager.createQuery(
				"SELECT s.firstName, s.lastName, s.id From Staff s ORDER BY s.id DESC");
		
		return query.getResultList();
	}

	@Override
	public List<Staff> getStaffName() {
		Query query = entityManager.createQuery(
				"SELECT s.firstName, s.lastName, s.id From Staff s  ORDER BY s.id DESC");
		
		return query.getResultList();
	}

	@Override
	public void save(Staff staff) {
		this.entityManager.persist(staff);
		
	}

}
