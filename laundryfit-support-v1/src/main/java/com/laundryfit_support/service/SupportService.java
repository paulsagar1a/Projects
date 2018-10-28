package com.laundryfit_support.service;

import java.util.List;

import com.laundryfit_support.dto.CompleteOrderDTO;
import com.laundryfit_support.dto.SupportDTO;

public interface SupportService {
	public List<SupportDTO> searchByPhone(long phone);
	
	public List<SupportDTO> searchByType(String type);
	
	public boolean completeOrder(List<CompleteOrderDTO> list);
}
