package com.chitra.school.parents;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.chitra.school.entity.ParentsInfo;

@Repository
public class ParentsInfoDaoImpl implements ParentsInfoDao{
	
	@PersistenceContext
	private EntityManager entityManager;

	
	public void saveParentsInfo(ParentsInfo parentsInfo) {
		entityManager.persist(parentsInfo);
		
	}
	public List<ParentsInfo> listParentsInfo() {
		Query query = entityManager.createQuery(
				"select p from ParentsInfo p");
		List<ParentsInfo> parentsInfos = query.getResultList();
		return parentsInfos;
	}

}
