package com.laundryfit.util;

public class LaundryfitQuery {
	public final static String SELECT_DATA = "select o.orderType,o.orderId,c.customerName from OrderInfo o, CustomerInfo c where o.customerInfo.customerId=c.customerId and c.customerPhone=";
	public final static String ORDER_TYPE = " and o.orderType='";
	public final static String ORDER_STATUS = "' and o.orderStatus='";
	public final static String QUERY_END = "'";
}
