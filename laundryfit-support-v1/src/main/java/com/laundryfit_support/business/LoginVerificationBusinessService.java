package com.laundryfit_support.business;

import org.codehaus.jettison.json.JSONObject;

public interface LoginVerificationBusinessService {
	public JSONObject verifyCredentials(String email,String password);
}
