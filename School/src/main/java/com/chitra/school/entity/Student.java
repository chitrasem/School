package com.chitra.school.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
	private String address;
	private String phoneNumber;
	
	@Temporal(TemporalType.DATE)
	private Date registerDate;
	
	@ManyToOne(fetch=FetchType.LAZY) 
	@JoinColumn(name="parent_id")
	private ParentsInfo parentsInfo;
	
	@ManyToOne(fetch=FetchType.LAZY) 
	@JoinColumn(name="staff_id")
	private Staff staff;
	
	public ParentsInfo getParentsInfo() {
		return parentsInfo;
	}
	public void setParentsInfo(ParentsInfo parentsInfo) {
		this.parentsInfo = parentsInfo;
	}
	public Staff getStaff() {
		return staff;
	}
	public void setStaff(Staff staff) {
		this.staff = staff;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	
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
