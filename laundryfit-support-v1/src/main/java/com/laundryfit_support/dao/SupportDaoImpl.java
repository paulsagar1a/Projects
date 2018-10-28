package com.laundryfit_support.dao;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.query.Query;
import org.jboss.logging.Logger;

import com.laundryfit_support.dto.SupportDTO;
import com.laundryfit_support.util.LaundryfitSupportConstant;
import com.laundryfit_support.util.LaundryfitSupportQueries;

public class SupportDaoImpl implements SupportDao {

	private static Logger logger = Logger.getLogger(SupportDao.class.getName());
	private HibernateCfg hibernateCfg = null;
	private Configuration configuration = null;
	private SessionFactory factory = null;
	private Session session = null;
	private Transaction transaction = null;
	private List<SupportDTO> list = null;
	private Query query = null;
    private String hql=null;
	
	@SuppressWarnings("unchecked")
	public List<SupportDTO> getSearchedData(long phone) {
		try {
			hibernateCfg = new HibernateCfg();
			configuration = hibernateCfg.configuration;
	    	configuration.addAnnotatedClass(com.laundryfit_support.entity.CustomerInfo.class);
	    	configuration.addAnnotatedClass(com.laundryfit_support.entity.OrderInfo.class);
	        factory = configuration.buildSessionFactory();
	        session = factory.openSession();
	        transaction = session.beginTransaction();
	        hql = LaundryfitSupportQueries.SELECT_DATA+phone;
	        query = session.createQuery(hql);
	        transaction.commit();
	        list = query.getResultList();
		} catch (HibernateException ex) {
	        logger.error(LaundryfitSupportConstant.DB_CONNECTION_ERROR);
	        ex.printStackTrace();
	        if (transaction != null) {
				transaction.rollback();
	         }
	    }  finally { 
			session.close();
	    }
		return list;
	}

	@SuppressWarnings("unchecked")
	public List<SupportDTO> getDataByType(String orderType, String orderStatus) {
		try {
			hibernateCfg = new HibernateCfg();
			configuration = hibernateCfg.configuration;
	    	configuration.addAnnotatedClass(com.laundryfit_support.entity.CustomerInfo.class);
	    	configuration.addAnnotatedClass(com.laundryfit_support.entity.OrderInfo.class);
	        factory = configuration.buildSessionFactory();
	        session = factory.openSession();
	        transaction = session.beginTransaction();
	        if(orderStatus.equals(LaundryfitSupportConstant.ALL)){
	        	hql = LaundryfitSupportQueries.SELECT_DATA_BY_TYPE+orderType+"'";
	        }
	        else{
	        	hql = LaundryfitSupportQueries.SELECT_DATA_BY_TYPE+orderType+LaundryfitSupportQueries.ORDER_STATUS+orderStatus+"'";
	        }
	        query=session.createQuery(hql);
	        transaction.commit();
	        list = query.getResultList();
		} catch (HibernateException ex) {
	        logger.error(LaundryfitSupportConstant.DB_CONNECTION_ERROR);
	        ex.printStackTrace();
	        if (transaction != null) {
				transaction.rollback();
	         }
	    }  finally { 
			session.close();
	    }
		return list;
	}

	@SuppressWarnings("unchecked")
	public boolean completeOrder(List<Integer> listOrderId) {
		int result = 0;
		try {
			hibernateCfg = new HibernateCfg();
			configuration = hibernateCfg.configuration;
	    	configuration.addAnnotatedClass(com.laundryfit_support.entity.OrderInfo.class);
	        factory = configuration.buildSessionFactory();
	        session = factory.openSession();
	        transaction = session.beginTransaction();
	        String completed = LaundryfitSupportConstant.COMPLETED;
	        SimpleDateFormat sdfDate = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//dd/MM/yyyy
	        Date now = new Date();
	        String orderEndTime = sdfDate.format(now);
	        for (Integer orderId : listOrderId) {
	        	hql = LaundryfitSupportQueries.UPDATE_STATUS+completed+LaundryfitSupportQueries.UPDATE_END_TIME+orderEndTime+LaundryfitSupportQueries.ORDER_ID+orderId;
	        	query = session.createQuery(hql);
	        	result = query.executeUpdate();
	        	session.flush();
	        	session.clear();
	        }
	        transaction.commit();
		} catch (HibernateException ex) {
	        logger.error(LaundryfitSupportConstant.DB_CONNECTION_ERROR);
	        ex.printStackTrace();
	        if (transaction != null) {
				transaction.rollback();
	         }
	    }  finally { 
			session.close();
	    }
		if(result != 0) {
			return true;
		}
		return false;
	}
}
