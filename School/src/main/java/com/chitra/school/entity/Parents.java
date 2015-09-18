package com.chitra.school.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Parents {
	@Id
	@GeneratedValue
	private Long id;
	private String motherName;
	private String fatherName;
	private String motherPhone;
	private String fatherPhone;
	private String motherStatus;
	private String fatherStatus;
	private String motherJob;
	private String fatherJob;
	public String getMotherName() {
		return motherName;
	}
	public void setMotherName(String motherName) {
		this.motherName = motherName;
	}
	public String getFatherName() {
		return fatherName;
	}
	public void setFatherName(String fatherName) {
		this.fatherName = fatherName;
	}
	public String getMotherPhone() {
		return motherPhone;
	}
	public void setMotherPhone(String motherPhone) {
		this.motherPhone = motherPhone;
	}
	public String getFatherPhone() {
		return fatherPhone;
	}
	public void setFatherPhone(String fatherPhone) {
		this.fatherPhone = fatherPhone;
	}
	public String getMotherStatus() {
		return motherStatus;
	}
	public void setMotherStatus(String motherStatus) {
		this.motherStatus = motherStatus;
	}
	public String getFatherStatus() {
		return fatherStatus;
	}
	public void setFatherStatus(String fatherStatus) {
		this.fatherStatus = fatherStatus;
	}
	public String getMotherJob() {
		return motherJob;
	}
	public void setMotherJob(String motherJob) {
		this.motherJob = motherJob;
	}
	public String getFatherJob() {
		return fatherJob;
	}
	public void setFatherJob(String fatherJob) {
		this.fatherJob = fatherJob;
	}
	public Long getId() {
		return id;
	}
	
	
	

}
