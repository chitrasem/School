package com.chitra.school.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class Level {
	@Id
	@GeneratedValue
	private long id;
	private String level;
	
	@JoinColumn(name="book_id")
	@OneToMany(cascade = CascadeType.ALL)
	private Set<Book> books = new HashSet<>();

	

}
