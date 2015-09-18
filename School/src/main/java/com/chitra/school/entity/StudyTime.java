package com.chitra.school.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class StudyTime {
	@Id
	@GeneratedValue
	private long id;
	@Temporal(TemporalType.TIME)
	private Date startTime;
	@Temporal(TemporalType.TIME)
	private Date stopTime;

}
