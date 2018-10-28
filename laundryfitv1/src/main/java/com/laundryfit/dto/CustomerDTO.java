package com.laundryfit.dto;
import net.sf.oval.constraint.Length;
import net.sf.oval.constraint.NotEmpty;
import net.sf.oval.constraint.NotNull;
public class CustomerDTO {
	@NotNull
	@NotEmpty
	@Length(max=100)
	private String customerName;
	@NotNull
	@NotEmpty
	@Length(min=10,max=10)
	private long customerPhone;
	@NotNull
	@NotEmpty
	@Length(max=100)
	private String customerCity;
	@NotNull
	@NotEmpty
	@Length(min=6,max=6)
	private int customerPin;
	@NotNull
	@NotEmpty
	@Length(max=100)
	private String customerLandmark;
	@NotNull
	@NotEmpty
	@Length(max=300)
	private String customerAddress;
	
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
	public String getCustomerCity() {
		return customerCity;
	}
	public void setCustomerCity(String customerCity) {
		this.customerCity = customerCity;
	}
	public int getCustomerPin() {
		return customerPin;
	}
	public void setCustomerPin(int customerPin) {
		this.customerPin = customerPin;
	}
	public String getCustomerLandmark() {
		return customerLandmark;
	}
	public void setCustomerLandmark(String customerLandmark) {
		this.customerLandmark = customerLandmark;
	}
	public String getCustomerAddress() {
		return customerAddress;
	}
	public void setCustomerAddress(String customerAddress) {
		this.customerAddress = customerAddress;
	}
}
