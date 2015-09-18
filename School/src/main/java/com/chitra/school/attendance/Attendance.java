package com.chitra.school.attendance;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.chitra.school.student.Student;

@Entity
public class Attendance {
	@Id
	@GeneratedValue
	private long id;
	private String status;
	
	@Column(unique=true)
	@Temporal(TemporalType.TIMESTAMP)
	private Date absentDate;
	
	@ManyToOne(optional=false)
	@JoinColumn(name="student_id")
	private Student student;
	
	public Student getStudent() {
		return student;
	}
	public void setStudent(Student student) {
		this.student = student;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Date getAbsentDate() {
		return absentDate;
	}
	public void setAbsentDate(Date absentDate) {
		this.absentDate = absentDate;
	}
	public long getId() {
		return id;
	}

}
