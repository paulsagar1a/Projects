package com.laundryfit.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="tbl_customer_info")
@NamedQuery(name="CustomerInfo.findAll", query="SELECT c FROM CustomerInfo c")
public class CustomerInfo implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GenericGenerator(name="generator", strategy="increment")
	@GeneratedValue(generator="generator")
	@Column(name="customer_id")
	private int customerId;

	@Column(name="customer_address")
	private String customerAddress;

	@Column(name="customer_city")
	private String customerCity;

	@Column(name="customer_landmark")
	private String customerLandmark;

	@Column(name="customer_name")
	private String customerName;

	@Column(name="customer_phone")
	private long customerPhone;

	@Column(name="customer_pin")
	private int customerPin;
	
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

	public CustomerInfo() {}

	public CustomerInfo(int customerId, String customerAddress, String customerCity, String customerLandmark,
			String customerName, long customerPhone, int customerPin) {
		this.customerAddress = customerAddress;
		this.customerCity = customerCity;
		this.customerLandmark = customerLandmark;
		this.customerName = customerName;
		this.customerPhone = customerPhone;
		this.customerPin = customerPin;
	}
	
}
