package com.laundryfit_support.service;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.codehaus.jettison.json.JSONObject;

import com.laundryfit_support.business.LoginVerificationBusinessService;
import com.laundryfit_support.business.LoginVerificationBusinessServiceImpl;

@Path("/laundryfit_login")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class LoginVerificationServiceImpl implements LoginVerificationService {
	@Path("/verify/{email}/{password}")
	@GET
	public JSONObject verifyCredentials(@PathParam("email") String email, @PathParam("password") String password) {
		LoginVerificationBusinessService loginVerificationBusinessService = new LoginVerificationBusinessServiceImpl();
		return loginVerificationBusinessService.verifyCredentials(email,password);
	}
}
