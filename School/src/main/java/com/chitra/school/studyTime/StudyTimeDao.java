package com.chitra.school.studyTime;

import java.util.List;

import com.chitra.school.entity.StudyTime;


public interface StudyTimeDao {
	public List<StudyTime> getStudyTime();
	public void save(StudyTime studyTime);
	

}
