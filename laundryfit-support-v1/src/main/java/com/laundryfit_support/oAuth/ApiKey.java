package com.laundryfit_support.oAuth;

public class ApiKey {
	private String secret = "#VerySecretCode:AforApple&BforBall||A4@algorithm&B4$byte!#laundryfit.com";

	public String getSecret() {
		return secret;
	}

	public void setSecret(String secret) {
		this.secret = secret;
	}
}
