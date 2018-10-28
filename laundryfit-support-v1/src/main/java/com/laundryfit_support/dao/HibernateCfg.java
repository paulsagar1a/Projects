package com.laundryfit_support.dao;

import org.hibernate.cfg.Configuration;

class HibernateCfg {
		public static Configuration configuration = new Configuration()
				.setProperty("hibernate.dialect", "org.hibernate.dialect.MySQLDialect")
			    .setProperty("hibernate.connection.driver_class", "com.mysql.jdbc.Driver")
			    .setProperty("hibernate.connection.url", "**********")
			    .setProperty("hibernate.connection.username", "**********")
			    .setProperty("hibernate.connection.password", "**********")
			    .setProperty("hibernate.show_sql", "true")
			    .setProperty("hibernate.hbm2ddl.auto", "update");
}
