package com.laundryfit.service;

import com.laundryfit.dto.OrderDTO;

public interface OrderService {
	public OrderDTO savePremiumOrder(OrderDTO orderDTO); 
	public OrderDTO saveInstantOrder(OrderDTO orderDTO);
}
