package com.chitra.school.classroom;

import java.util.List;

import com.chitra.school.entity.ClassRoom;

public interface ClassroomService {
	public List<ClassRoom> listClassroom();
	public void saveClassroom(ClassRoom room);

}
