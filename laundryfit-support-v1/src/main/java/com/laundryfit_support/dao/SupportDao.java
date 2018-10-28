package com.laundryfit_support.dao;

import java.util.List;

import com.laundryfit_support.dto.SupportDTO;

public interface SupportDao {
	public List<SupportDTO> getSearchedData(long phone);
	public List<SupportDTO> getDataByType(String orderType, String orderStatus);
	public boolean completeOrder(List<Integer> listOrderId);
}
