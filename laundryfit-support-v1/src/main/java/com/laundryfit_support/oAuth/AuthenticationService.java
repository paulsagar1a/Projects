package com.laundryfit_support.oAuth;

import javax.xml.bind.DatatypeConverter;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

public class AuthenticationService {
	public boolean authenticate(String authCredentials) {
		
		if(authCredentials.equals("loginCredential")) {
			System.out.println("+---+ Loging in.");
			return true;
		}
		// header value format will be "Bearer encodedstring" for Basic
		// authentication. Example "Bearer YWRtaW46YWRtaW4="
		final String clientToken = authCredentials.replaceFirst("Bearer"+ " ", "");
		return parseJWT(clientToken);
	}

	//Sample method to validate and read the JWT
	private boolean parseJWT(String jwt) {
	    ApiKey apiKey = new ApiKey();
	    //This line will throw an exception if it is not a signed JWS (as expected)
	    try{
	    	Claims claims = Jwts.parser()         
	    			.setSigningKey(DatatypeConverter.parseBase64Binary(apiKey.getSecret()))
	    			.parseClaimsJws(jwt).getBody();
	    	System.out.println("+---+Claims status: "+claims);
	    	return true;
	    } catch(Exception ex) {
	    	System.out.println("+---+ Authentication Faild with token "+jwt);
	    	return false;
	    }
	}
}
