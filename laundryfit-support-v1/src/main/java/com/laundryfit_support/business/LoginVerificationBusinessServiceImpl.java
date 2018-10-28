package com.laundryfit_support.business;

import java.security.Key;
import java.util.Date;
import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import com.laundryfit_support.oAuth.ApiKey;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class LoginVerificationBusinessServiceImpl implements LoginVerificationBusinessService {
	public boolean validUser = false;
	public JSONObject verifyCredentials(String email,String password) {
		String email1 = "**********";
		String password1 = "**********";
		JSONObject obj = new JSONObject();
		if(email1.equals(email) && password1.equals(password)) {
			validUser = true;
			System.out.println(">>>>>>Verification done!\n>>>>>>Email: "+email+"\n>>>>>>Password: "+password);
			String token = createJWT("1",email1,"laundryfit@support",3600000L);
			System.out.println(">>>>>Token = "+token);
			try {
				obj.put("credential_status", true);
				obj.put("access_token", token);
			} catch (JSONException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			return obj;
		}
		System.out.println(">>>>>>ERROR occurd!\n>>>>>>Email: "+email+"\n>>>>>>Password: "+password);
		try {
			obj.put("credential_status", false);
			obj.put("error_code", "LFC_S1");
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return obj;
	}
	//Sample method to construct a JWT
	private String createJWT(String id, String issuer, String subject, long ttlMillis) {
	 
	    //The JWT signature algorithm we will be using to sign the token
	    SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;
	 
	    long nowMillis = System.currentTimeMillis();
	    Date now = new Date(nowMillis);
	    ApiKey apiKey = new ApiKey();
		//We will sign our JWT with our ApiKey secret
	    byte[] apiKeySecretBytes = DatatypeConverter.parseBase64Binary(apiKey.getSecret());
	    Key signingKey = new SecretKeySpec(apiKeySecretBytes, signatureAlgorithm.getJcaName());
	    System.out.println("---+ encrypted signature "+signingKey);
	    //Let's set the JWT Claims
	    JwtBuilder builder = Jwts.builder().setId(id)
	                                .setIssuedAt(now)
	                                .setSubject(subject)
	                                .setIssuer(issuer)
	                                .signWith(signatureAlgorithm, signingKey);
	 
	    //if it has been specified, let's add the expiration
	    if (ttlMillis >= 0) {
	    long expMillis = nowMillis + ttlMillis;
	        Date exp = new Date(expMillis);
	        builder.setExpiration(exp);
	    }
	 
	    //Builds the JWT and serializes it to a compact, URL-safe string
	    return builder.compact();
	}
}
