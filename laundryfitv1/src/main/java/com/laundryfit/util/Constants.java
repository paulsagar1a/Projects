package com.laundryfit.util;

public class Constants {
	
	/**
	 * Initialization constants
	 */
	public final static String INITIAL_PREMIUM_NUMBER = "40";
	public final static String PREMIUM_ORDER_TYPE = "PREMIUM";
	public final static String INSTANT_ORDER_TYPE = "INSTANT";
	public final static double PREMIUM_ORDER_VALUE = 400.00;
	public final static String ORDER_STATUS_PENDING = "PENDING";
	
	/**
	 * Error constants
	 */
	public final static String EMPTY_DTO = "Empty DTO object.";
	public final static String INVALID_CUSTOMER_DTO = "Invalid CustomerDTO object.";
	public final static String INVALID_ORDER_DTO = "Invalid OrderDTO object.";
	public final static String DTO_ENTITY_CONVERTION_ERROR = "Error occured during DTO to Entity convertion.";
	public final static String SAME_ORDER_STATE_INACTIVE = "The same type of order with the phone number is already in active state.";
	
	/**
	 * Exception constants
	 */
	public final static String GENERIC_EXCEPTION = "Exception occured during saving data.";
	
}
