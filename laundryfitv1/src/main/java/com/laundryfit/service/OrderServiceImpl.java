package com.laundryfit.service;

import javax.ws.rs.Consumes;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.laundryfit.business.OrderBusinessService;
import com.laundryfit.business.OrderBusinessServiceImpl;
import com.laundryfit.dto.OrderDTO;

@Path("/laundryfit")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class OrderServiceImpl implements OrderService {
	
	@Path("/premium_order/save")
	@PUT
	public OrderDTO savePremiumOrder(OrderDTO orderDTO) {
		OrderBusinessService orderBusinessService = new OrderBusinessServiceImpl();
		return orderBusinessService.savePremiumOrder(orderDTO);
	}
	
	@Path("/instant_order/save")
	@PUT
	public OrderDTO saveInstantOrder(OrderDTO orderDTO) {
		OrderBusinessService orderBusinessService = new OrderBusinessServiceImpl();
		return orderBusinessService.saveInstantOrder(orderDTO);
	}
}
