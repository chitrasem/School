package com.chitra.school.entity;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
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
	
	/*@JoinColumn(name="parent_id")
	@OneToMany(cascade=CascadeType.ALL)
	private Set<Parents> parents = new HashSet<>();*/
	
	/*@JoinColumn(name="staff_id")
	@OneToMany(cascade=CascadeType.ALL)
	private Set<Staff> staffs = new HashSet<>();*/
	
	/*@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="student_id")
	private Set<Attendance> attendances = new HashSet<>();*/
	
	/*public Set<Attendance> getAttendances() {
		return attendances;
	}*/
	
	/*public Set<Staff> getStaffs() {
		return staffs;
	}
	public void setStaffs(Set<Staff> staffs) {
		this.staffs = staffs;
	}*/
	public String getFirstName() {
		return firstName;
	}
	/*public Set<Parents> getParents() {
		return parents;
	}
	public void setParents(Set<Parents> parents) {
		this.parents = parents;
	}*/
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
