package com.laundryfit_support.util;

public class LaundryfitSupportQueries {
	public final static String SELECT_DATA = "select new com.laundryfit_support.dto.SupportDTO ("
			+ "o.orderId,o.orderType,o.orderDetails,o.orderValue,o.orderStartTime,"
			+ "o.orderStatus,o.orderEndTime,c.customerAddress,c.customerCity,"
			+ "c.customerLandmark,c.customerName,c.customerPhone,c.customerPin )"
			+ " from OrderInfo o, CustomerInfo c "
			+ "where o.customerInfo.customerId=c.customerId and c.customerPhone=";
	public final static String SELECT_DATA_BY_TYPE = "select new com.laundryfit_support.dto.SupportDTO ("
			+ "o.orderId,o.orderType,o.orderDetails,o.orderValue,o.orderStartTime,"
			+ "o.orderStatus,o.orderEndTime,c.customerAddress,c.customerCity,"
			+ "c.customerLandmark,c.customerName,c.customerPhone,c.customerPin )"
			+ " from OrderInfo o, CustomerInfo c "
			+ "where o.customerInfo.customerId=c.customerId and o.orderType='";
	public final static String ORDER_STATUS = "' and o.orderStatus='";
	public final static String UPDATE_STATUS = "UPDATE OrderInfo set orderStatus = '";
	public final static String UPDATE_END_TIME = "', orderEndTime = '";
	public final static String ORDER_ID = "' WHERE orderId = ";
}
