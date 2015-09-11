package com.chitra.school.test;

import java.util.List;

public interface BookDao {
    public void save(Book book);
    public List<Book> getBook();
}
