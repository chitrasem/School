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

}
