package com.laundryfit_support.service;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import com.laundryfit_support.business.SupportBusinessService;
import com.laundryfit_support.business.SupportBusinessServiceImpl;
import com.laundryfit_support.dto.CompleteOrderDTO;
import com.laundryfit_support.dto.SupportDTO;

@Path("/laundryfit_support")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class SupportServiceImpl implements SupportService{
	SupportBusinessService supportBusinessService = null;
	
	@Path("/search/{phone}")
	@GET
	public List<SupportDTO> searchByPhone(@PathParam("phone") long phone) {
		supportBusinessService = new SupportBusinessServiceImpl();
		return supportBusinessService.searchByPhone(phone);
	}

	@Path("/searchtype/{type}")
	@GET
	public List<SupportDTO> searchByType(@PathParam("type") String type) {
		supportBusinessService = new SupportBusinessServiceImpl();
		return supportBusinessService.searchByType(type);
	}

	@Path("/complete/save")
	@POST
	public boolean completeOrder(List<CompleteOrderDTO> list) {
		supportBusinessService = new SupportBusinessServiceImpl();
		return supportBusinessService.completeOrder(list);
	}

}
