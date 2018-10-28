package com.laundryfit.business;
import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;
import org.jboss.logging.Logger;
import com.laundryfit.dao.OrderDao;
import com.laundryfit.dto.CustomerDTO;
import com.laundryfit.dto.OrderDTO;
import com.laundryfit.entity.CustomerInfo;
import com.laundryfit.entity.OrderInfo;
import com.laundryfit.mapper.OrderMapper;
import com.laundryfit.mapper.OrderMapperImpl;
import com.laundryfit.util.Constants;
import com.laundryfit.util.ElaborateOrderDetails;

import net.sf.oval.Validator;

public class OrderBusinessServiceImpl implements OrderBusinessService {
	private static Logger logger = Logger.getLogger(OrderBusinessServiceImpl.class.getName());
	private Validator validator = new Validator();
	private List violations = null;
	private OrderMapper orderMapper = null;
	private OrderDao orderDao = null;
	private CustomerDTO customerDTO = null;
	private OrderInfo orderInfo = null;
	private CustomerInfo customerInfo = null;
	private ElaborateOrderDetails elaborateOrderDetails = null;
	
	@Transactional(rollbackOn = {Exception.class})
	public OrderDTO savePremiumOrder(OrderDTO orderDTO) {
		violations = validator.validate(orderDTO.getCustomerDTO());
		if(!violations.isEmpty()) {
			logger.info(Constants.INVALID_CUSTOMER_DTO);
			return null;
		}
		if(isOrderTypeSame(orderDTO.getCustomerDTO().getCustomerPhone(),Constants.PREMIUM_ORDER_TYPE,Constants.ORDER_STATUS_PENDING)){
			logger.info(Constants.SAME_ORDER_STATE_INACTIVE);
			return null;
		}
		if(null != orderDTO) {
			orderDTO.setOrderDetails(Constants.INITIAL_PREMIUM_NUMBER);
			orderDTO.setOrderType(Constants.PREMIUM_ORDER_TYPE);
			orderDTO.setOrderValue(Constants.PREMIUM_ORDER_VALUE);
			orderDTO.setOrderStartTime(new Date());
			orderDTO.setOrderStatus(Constants.ORDER_STATUS_PENDING);
			try {
				return saveDTOObj(orderDTO);
			} catch (Exception ex) {
				logger.error(Constants.GENERIC_EXCEPTION);
			}
		} 
		logger.error(Constants.EMPTY_DTO);
		return null;
	}

	public OrderDTO saveInstantOrder(OrderDTO orderDTO) {
		violations = validator.validate(orderDTO.getCustomerDTO());
		if(!violations.isEmpty()) {
			logger.info(Constants.INVALID_CUSTOMER_DTO);
			return null;
		}
		violations = validator.validate(orderDTO);
		if(!violations.isEmpty()) {
			logger.info(Constants.INVALID_ORDER_DTO);
			return null;
		}
		if(isOrderTypeSame(orderDTO.getCustomerDTO().getCustomerPhone(),Constants.INSTANT_ORDER_TYPE,Constants.ORDER_STATUS_PENDING)){
			logger.info(Constants.SAME_ORDER_STATE_INACTIVE);
			return null;
		}
		if(null != orderDTO) {
			orderDTO.setOrderDetails(elaborateOrderDetails.elaborateOrderDetails(orderDTO.getOrderDetails()));
			orderDTO.setOrderType(Constants.INSTANT_ORDER_TYPE);
			orderDTO.setOrderStartTime(new Date());
			orderDTO.setOrderStatus(Constants.ORDER_STATUS_PENDING);
			try {
				return saveDTOObj(orderDTO);
			} catch (Exception ex) {
				logger.error(Constants.GENERIC_EXCEPTION);
			}
		}
		logger.error(Constants.EMPTY_DTO);
		return null;
	}

	private boolean isOrderTypeSame(long phone,String orderType,String orderStatus) {
		orderDao = new OrderDao();
		return orderDao.isOrderTypeSame(phone,orderType,orderStatus);
	}

	private OrderDTO saveDTOObj(OrderDTO orderDTO) {
		orderMapper = new OrderMapperImpl();
		customerDTO = orderDTO.getCustomerDTO();
		customerInfo = orderMapper.convertCustomerDTOToEntity(customerDTO);
		if(null != customerInfo) {
			orderInfo = orderMapper.convertOrderDTOToEntity(orderDTO);
		}
		if(null != orderInfo) {
			orderDao = new OrderDao();
			orderDao.save(orderInfo);
		} else {
			logger.error(Constants.DTO_ENTITY_CONVERTION_ERROR);
			return null;
		}
        return orderDTO;
	}
	
}
