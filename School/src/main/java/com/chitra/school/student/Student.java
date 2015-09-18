package com.chitra.school.student;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Student {
	@Id
	@GeneratedValue
	private long id;
	private String firstName;
	private String lastName;
	private String sex;
	@Temporal(TemporalType.DATE)
	private Date birthDate;
	@Temporal(TemporalType.DATE)
	private Date registerDate;
	
	/*@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="student_id")
	private Set<Attendance> attendances = new HashSet<>();*/
	
	/*public Set<Attendance> getAttendances() {
		return attendances;
	}*/
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public Date getBirthDate() {
		return birthDate;
	}
	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}
	public Date getRegisterDate() {
		return registerDate;
	}
	public void setRegisterDate(Date registerDate) {
		this.registerDate = registerDate;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
		
	}
	
	

}
