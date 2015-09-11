package com.chitra.school.test;


import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

@Repository
public class BookDaoImpl implements BookDao {
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public void save(Book book) {
        entityManager.persist(book);
    }	
	public List<Book> getBook() {
		Query query = entityManager.createQuery(
				"select b from Book b");		
		List<Book> books = query.getResultList();
		return books;
	}
}
