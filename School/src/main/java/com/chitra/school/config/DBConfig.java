package com.chitra.school.config;

import java.util.HashMap;
import java.util.Map;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

import org.hibernate.jpa.HibernatePersistenceProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.dao.annotation.PersistenceExceptionTranslationPostProcessor;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.chitra.school.attendance.AttendanceDao;
import com.chitra.school.attendance.AttendanceDaoImpl;
import com.chitra.school.attendance.AttendanceService;
import com.chitra.school.attendance.AttendanceServiceImpl;
import com.chitra.school.student.StudentDao;
import com.chitra.school.student.StudentDaoImpl;
import com.chitra.school.student.StudentService;
import com.chitra.school.student.StudentServiceImpl;
import com.chitra.school.test.BookDao;
import com.chitra.school.test.BookDaoImpl;
import com.chitra.school.test.BookService;
import com.chitra.school.test.BookServiceImpl;

@Configuration
@EnableTransactionManagement
public class DBConfig {

	@Bean
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("com.mysql.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://localhost:3306/school");
        dataSource.setUsername("root");
        dataSource.setPassword("");
        /*dataSource.setDriverClassName("org.postgresql.Driver");
        dataSource.setUrl("jdbc:postgresql://ec2-50-16-229-89.compute-1.amazonaws.com:5432/daa1lm2t562kb4");
        
        dataSource.setUsername("jwwbusbbzmnmsv");
        dataSource.setPassword("zU7yMkRTtqioqSPgo4MdsFXVji");*/
        return dataSource;
    }
	private Map<String,?> jpaProperties() {
        Map<String,String> jpaPropertiesMap = new HashMap<String,String>();
        jpaPropertiesMap.put("hibernate.dialect", "org.hibernate.dialect.MySQLDialect");
        //jpaPropertiesMap.put("hibernate.dialect", "org.hibernate.dialect.PostgreSQLDialect");
        jpaPropertiesMap.put("hibernate.hbm2ddl.auto", "update");
        return jpaPropertiesMap;
    }
	@Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
        LocalContainerEntityManagerFactoryBean factoryBean = 
            new LocalContainerEntityManagerFactoryBean();
        factoryBean.setPersistenceProviderClass(HibernatePersistenceProvider.class);
        factoryBean.setDataSource(dataSource());
        factoryBean.setPackagesToScan("com.chitra.school");
        factoryBean.setJpaPropertyMap(jpaProperties());
        return factoryBean;
    }

	/*@Bean
	public StudentDaoJpaImpl studentDao() {
		StudentDaoJpaImpl dao = new StudentDaoJpaImpl();
		return dao;
	}*/
	
    @Bean
    @Autowired
    public PlatformTransactionManager transactionManager(
        EntityManagerFactory entityManagerFactory) {
        JpaTransactionManager transactionManager = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(entityManagerFactory);
        return transactionManager;
    }

    @Bean
    public BookDao bookDao() {
        BookDaoImpl bean = new BookDaoImpl();
        return bean;
    }
    
    @Bean
    public BookService bookService() {
        BookServiceImpl bean = new BookServiceImpl();
        bean.setBookDao(bookDao());
        return bean;
    }
    
    @Bean 
    public StudentDao studentDao(){
    	StudentDaoImpl bean = new StudentDaoImpl();
    	return bean;
    }
    @Bean
    public StudentService studentService()
    {
    	StudentServiceImpl bean = new StudentServiceImpl();
    	bean.setStudentDao(studentDao());
    	return bean;
    }
    
    @Bean
    public AttendanceDao attendanceDao(){
    	AttendanceDaoImpl bean = new AttendanceDaoImpl();
    	return bean;
    }
    @Bean
    public AttendanceService attendanceService(){
    	AttendanceServiceImpl bean = new AttendanceServiceImpl();
    	bean.setAttendanceDao(attendanceDao());
    	return bean;
    	
    }
    
    @Bean
    public static PersistenceExceptionTranslationPostProcessor 
        persistenceExceptionTranslationPostProcessor() {
        PersistenceExceptionTranslationPostProcessor bean = 
        new PersistenceExceptionTranslationPostProcessor();
        return bean;
    }


}
