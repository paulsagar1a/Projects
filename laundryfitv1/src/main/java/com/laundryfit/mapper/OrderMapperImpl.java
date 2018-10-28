package com.laundryfit.mapper;

import org.modelmapper.ModelMapper;

import com.laundryfit.dto.CustomerDTO;
import com.laundryfit.dto.OrderDTO;
import com.laundryfit.entity.CustomerInfo;
import com.laundryfit.entity.OrderInfo;

public class OrderMapperImpl implements OrderMapper{
	ModelMapper modelMapper = null;
	CustomerInfo customerInfo_ = null;
	OrderInfo orderInfo_ = null;
	public OrderInfo convertOrderDTOToEntity(OrderDTO orderDTO) {
		if(null != orderDTO) {
			modelMapper = new ModelMapper();
			orderInfo_ = modelMapper.map(orderDTO, OrderInfo.class);
			orderInfo_.setCustomerInfo(customerInfo_);
			return orderInfo_;
		}
		return null;
	}

	public CustomerInfo convertCustomerDTOToEntity(CustomerDTO customerDTO) {
		if(null != customerDTO) {
			modelMapper = new ModelMapper();
			customerInfo_ = modelMapper.map(customerDTO, CustomerInfo.class);
			return customerInfo_;
		}
		return null;
	}
}
