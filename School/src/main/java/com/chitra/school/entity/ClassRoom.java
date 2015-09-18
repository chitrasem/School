package com.chitra.school.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class ClassRoom {
	
	@GeneratedValue
	@Id
	private long id;
	private String classRoom;
	
	@JoinColumn(name="level_id")
	@OneToMany
	private Set<Level> levels = new HashSet<>();
	@JoinColumn(name="level_id")
	@OneToMany
	private Set<StudyTime> studyTimes = new HashSet<>();

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

	public Set<Level> getLevels() {
		return levels;
	}

	public void setLevels(Set<Level> levels) {
		this.levels = levels;
	}
	
	

}
