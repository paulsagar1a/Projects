package com.laundryfit_support.service;

import org.codehaus.jettison.json.JSONObject;

public interface LoginVerificationService {
	public JSONObject verifyCredentials(String email,String password);
}
