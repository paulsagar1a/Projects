package com.laundryfit_support.business;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.jboss.logging.Logger;

import com.laundryfit_support.dao.SupportDao;
import com.laundryfit_support.dao.SupportDaoImpl;
import com.laundryfit_support.dto.CompleteOrderDTO;
import com.laundryfit_support.dto.SupportDTO;
import com.laundryfit_support.util.LaundryfitSupportConstant;

public class SupportBusinessServiceImpl implements SupportBusinessService{
	private static Logger logger = Logger.getLogger(SupportBusinessServiceImpl.class.getName());
	private SupportDao supportDao = null;
	
	@Transactional(rollbackOn = {Exception.class})
	public List<SupportDTO> searchByPhone(long phone) {
		if(String.valueOf(phone).length() != 10) {
			logger.error(LaundryfitSupportConstant.INCORRECT_PHONE);
			return null;
		}
		supportDao = new SupportDaoImpl();
		return supportDao.getSearchedData(phone);
	}

	@Transactional(rollbackOn = {Exception.class})
	public List<SupportDTO> searchByType(String type) {
		if(type.equals(null)) {
			logger.error(LaundryfitSupportConstant.EMPTY_TYPE);
			return null;
		}
		supportDao = new SupportDaoImpl();
		if(type.equals(LaundryfitSupportConstant.ISNTANT_ORDER)) {
			return supportDao.getDataByType(LaundryfitSupportConstant.INSTANT,LaundryfitSupportConstant.ALL);
		}
		else if(type.equals(LaundryfitSupportConstant.PREMIUM_ORDER)){
			return supportDao.getDataByType(LaundryfitSupportConstant.PREMIUM,LaundryfitSupportConstant.ALL);
		}
		else if(type.equals(LaundryfitSupportConstant.INPROGRESS_INSTANT_ORDER)){
			return supportDao.getDataByType(LaundryfitSupportConstant.INSTANT,LaundryfitSupportConstant.PENDING);
		}
		else if(type.equals(LaundryfitSupportConstant.COMPLETED_INSTANT_ORDER)){
			return supportDao.getDataByType(LaundryfitSupportConstant.INSTANT,LaundryfitSupportConstant.COMPLETED);
		}
		else if(type.equals(LaundryfitSupportConstant.INPROGRESS_PREMIUM_ORDER)){
			return supportDao.getDataByType(LaundryfitSupportConstant.PREMIUM,LaundryfitSupportConstant.PENDING);
		}
		else if(type.equals(LaundryfitSupportConstant.COMPLETED_PREMIUM_ORDER)){
			return supportDao.getDataByType(LaundryfitSupportConstant.PREMIUM,LaundryfitSupportConstant.COMPLETED);
		} else {
			logger.error(LaundryfitSupportConstant.INCORRECT_TYPE);
			return null;
		}
	}

	@Transactional(rollbackOn = {Exception.class})
	public boolean completeOrder(List<CompleteOrderDTO> list) {
		List<Integer> listOrderId = null;
		if(!list.isEmpty()) {
			supportDao = new SupportDaoImpl();
			listOrderId = new ArrayList<Integer>();
			for(CompleteOrderDTO obj : list){
				if(obj.isSelected()) {
					listOrderId.add(obj.getOrderId());
				}
			}
			if(listOrderId != null) {
				return supportDao.completeOrder(listOrderId);
			}
			return false;
		}
		return false;
	}

}
