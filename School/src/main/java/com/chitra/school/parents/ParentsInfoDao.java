package com.chitra.school.parents;

import java.util.List;

import com.chitra.school.entity.ParentsInfo;

public interface ParentsInfoDao {
	public void saveParentsInfo(ParentsInfo parentsInfo);
	public List<ParentsInfo> listParentsInfo();

}
