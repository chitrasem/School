package com.chitra.school.classroom;

import java.util.List;

import javax.transaction.Transactional;

import com.chitra.school.entity.ClassRoom;
import com.chitra.school.parents.ParentsInfoDao;

@Transactional
public class ClassroomServiceImpl implements ClassroomService{
	private ClassroomDao classroomDao;

	public void setClassroomDao(ClassroomDao classroomDao) {
		this.classroomDao = classroomDao;
	}

	@Override
	public List<ClassRoom> listClassroom() {
		return classroomDao.listClassroom();
	}

	@Override
	public void saveClassroom(ClassRoom room) {
		classroomDao.saveClassroom(room);
		
	}

}
