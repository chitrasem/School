package com.chitra.school.parents;

import java.util.List;

import javax.transaction.Transactional;

import com.chitra.school.entity.ParentsInfo;

@Transactional
public class ParentsInfoServiceImpl implements ParentsInfoService{
	private ParentsInfoDao parentsDao;

	@Override
	public void saveParentsInfo(ParentsInfo parentsInfo) {
		parentsDao.saveParentsInfo(parentsInfo);		
	}

	@Override
	public List<ParentsInfo> listParentsInfo() {
		return parentsDao.listParentsInfo();
	}

	public void setClassroomDao(ParentsInfoDao parentsInfoDao) {
		this.parentsDao = parentsInfoDao;
		
	}

}
