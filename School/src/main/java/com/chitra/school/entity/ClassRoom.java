package com.chitra.school.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class ClassRoom {
	
	@GeneratedValue
	@Id
	private long id;
	private String classRoom;
	
	/*@JoinColumn(name="time_id")
	@OneToMany
	private Set<StudyTime> studyTimes = new HashSet<>();*/
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getClassRoom() {
		return classRoom;
	}
	public void setClassRoom(String classRoom) {
		this.classRoom = classRoom;
	}

	
	

}
