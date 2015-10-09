package com.chitra.school.studyTime;

import java.util.List;

import javax.transaction.Transactional;

import com.chitra.school.entity.StudyTime;

@Transactional
public class StudyTimeServiceDao implements StudyTimeService {
	private StudyTimeDao studyTimeDao;
	
	public void setStudyTime(StudyTimeDao studyTimeDao){
		this.studyTimeDao = studyTimeDao;
	}

	@Override
	public List<StudyTime> getStudyTime() {
		return studyTimeDao.getStudyTime();
	}

	@Override
	public void save(StudyTime studyTime) {
		this.studyTimeDao.save(studyTime);
		
	}

}
