package com.laundryfit.business;

import com.laundryfit.dto.OrderDTO;

public interface OrderBusinessService {
	public OrderDTO savePremiumOrder(OrderDTO orderDTO);
	public OrderDTO saveInstantOrder(OrderDTO orderDTO);
}
