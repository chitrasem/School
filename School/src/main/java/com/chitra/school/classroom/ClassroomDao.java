package com.chitra.school.classroom;

import java.util.List;

import com.chitra.school.entity.ClassRoom;

public interface ClassroomDao {

	public List<ClassRoom> listClassroom();
	public void saveClassroom(ClassRoom room);

}
