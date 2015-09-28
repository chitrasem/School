package com.chitra.school.parents;

import java.util.List;

import com.chitra.school.entity.ParentsInfo;

public interface ParentsInfoService {
	public void saveParentsInfo(ParentsInfo parentsInfo);
	public List<ParentsInfo> listParentsInfo();

}
