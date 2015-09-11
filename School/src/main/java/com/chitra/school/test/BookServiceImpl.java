package com.chitra.school.test;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;

@Transactional
public class BookServiceImpl implements BookService {
    private BookDao bookDao;
    
    public void setBookDao(BookDao bookDao) {
        this.bookDao = bookDao;
    }
    
    @Override
    public void save(Book book) {
        bookDao.save(book);
    }

	@Override
	public List<Book> getBook() {
		return bookDao.getBook();
	}

}
