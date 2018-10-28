package com.laundryfit_support.dto;

import java.util.Date;

public class SupportDTO {
	private int orderId;
	private String orderType;
	private String orderDetails;
	private double orderValue;
	private Date orderStartTime;
	private String orderStatus;
	private Date orderEndTime;
	private String customerAddress;
	private String customerCity;
	private String customerLandmark;
	private String customerName;
	private long customerPhone;
	private int customerPin;
	
	public SupportDTO(int orderId, String orderType, String orderDetails, double orderValue, Date orderStartTime,
			String orderStatus, Date orderEndTime, String customerAddress, String customerCity, String customerLandmark,
			String customerName, long customerPhone, int customerPin) {
		super();
		this.orderId = orderId;
		this.orderType = orderType;
		this.orderDetails = orderDetails;
		this.orderValue = orderValue;
		this.orderStartTime = orderStartTime;
		this.orderStatus = orderStatus;
		this.orderEndTime = orderEndTime;
		this.customerAddress = customerAddress;
		this.customerCity = customerCity;
		this.customerLandmark = customerLandmark;
		this.customerName = customerName;
		this.customerPhone = customerPhone;
		this.customerPin = customerPin;
	}
	public int getOrderId() {
		return orderId;
	}
	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}
	public String getOrderType() {
		return orderType;
	}
	public void setOrderType(String orderType) {
		this.orderType = orderType;
	}
	public String getOrderDetails() {
		return orderDetails;
	}
	public void setOrderDetails(String orderDetails) {
		this.orderDetails = orderDetails;
	}
	public double getOrderValue() {
		return orderValue;
	}
	public void setOrderValue(double orderValue) {
		this.orderValue = orderValue;
	}
	public Date getOrderStartTime() {
		return orderStartTime;
	}
	public void setOrderStartTime(Date orderStartTime) {
		this.orderStartTime = orderStartTime;
	}
	public String getOrderStatus() {
		return orderStatus;
	}
	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}
	public Date getOrderEndTime() {
		return orderEndTime;
	}
	public void setOrderEndTime(Date orderEndTime) {
		this.orderEndTime = orderEndTime;
	}
	public String getCustomerAddress() {
		return customerAddress;
	}
	public void setCustomerAddress(String customerAddress) {
		this.customerAddress = customerAddress;
	}
	public String getCustomerCity() {
		return customerCity;
	}
	public void setCustomerCity(String customerCity) {
		this.customerCity = customerCity;
	}
	public String getCustomerLandmark() {
		return customerLandmark;
	}
	public void setCustomerLandmark(String customerLandmark) {
		this.customerLandmark = customerLandmark;
	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	public long getCustomerPhone() {
		return customerPhone;
	}
	public void setCustomerPhone(long customerPhone) {
		this.customerPhone = customerPhone;
	}
	public int getCustomerPin() {
		return customerPin;
	}
	public void setCustomerPin(int customerPin) {
		this.customerPin = customerPin;
	}
}
