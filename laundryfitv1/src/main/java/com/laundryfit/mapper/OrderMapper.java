package com.laundryfit.mapper;

import com.laundryfit.dto.CustomerDTO;
import com.laundryfit.dto.OrderDTO;
import com.laundryfit.entity.CustomerInfo;
import com.laundryfit.entity.OrderInfo;

public interface OrderMapper {
	public OrderInfo convertOrderDTOToEntity(OrderDTO orderDTO);
	public CustomerInfo convertCustomerDTOToEntity(CustomerDTO customerDTO);
}
