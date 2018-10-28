package com.laundryfit.dao;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.query.Query;
import org.jboss.logging.Logger;

import com.laundryfit.entity.OrderInfo;
import com.laundryfit.util.Constants;
import com.laundryfit.util.LaundryfitQuery;
import com.laundryfit.dao.HibernateCfg;

public class OrderDao {
	private static Logger logger = Logger.getLogger(OrderDao.class.getName());
	private HibernateCfg hibernateCfg = null;
	private Configuration configuration = null;
	private SessionFactory factory = null;
	private Session session = null;
	private Transaction transaction = null;
	
	public void save(OrderInfo orderInfo) {
		try{
			hibernateCfg = new HibernateCfg();
			configuration = hibernateCfg.configuration;
	    	configuration.addAnnotatedClass(com.laundryfit.entity.CustomerInfo.class);
	    	configuration.addAnnotatedClass(com.laundryfit.entity.OrderInfo.class);
	        factory = configuration.buildSessionFactory();
	        session = factory.openSession();
	        transaction = session.beginTransaction();
	        session.persist(orderInfo);
	        transaction.commit();
		} catch (HibernateException ex) {
	        logger.error(Constants.GENERIC_EXCEPTION);
	        ex.printStackTrace();
	        if (transaction != null) {
				transaction.rollback();
	         }
	    }  finally { 
			session.close();
	    }
	}

	public boolean isOrderTypeSame(long phone, String orderType, String orderStatus) {
		List<Object[]> list = null;
		try{
			hibernateCfg = new HibernateCfg();
			configuration = hibernateCfg.configuration;
	    	configuration.addAnnotatedClass(com.laundryfit.entity.CustomerInfo.class);
	    	configuration.addAnnotatedClass(com.laundryfit.entity.OrderInfo.class);
	        factory = configuration.buildSessionFactory();
	        session = factory.openSession();
	        transaction = session.beginTransaction();
	        String hql= LaundryfitQuery.SELECT_DATA+phone+LaundryfitQuery.ORDER_TYPE+orderType+LaundryfitQuery.ORDER_STATUS+orderStatus+LaundryfitQuery.QUERY_END;
	        Query query=session.createQuery(hql);
	        transaction.commit();
	        list = query.getResultList();
		} catch (HibernateException ex) {
	        logger.error(Constants.GENERIC_EXCEPTION);
	        ex.printStackTrace();
	        if (transaction != null) {
				transaction.rollback();
	         }
	    }  finally { 
			session.close();
	    }
		if(list.size()>0) {
			return true;
		}
		return false;
	}
}
