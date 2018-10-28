package com.laundryfit.dao;

import org.hibernate.cfg.Configuration;

class HibernateCfg {
		public static Configuration configuration = new Configuration()
				.setProperty("hibernate.dialect", "org.hibernate.dialect.MySQLDialect")
			    .setProperty("hibernate.connection.driver_class", "com.mysql.jdbc.Driver")
			    .setProperty("hibernate.connection.url", "jdbc:mysql://localhost/laundryorder?useSSL=false")
			    .setProperty("hibernate.connection.username", "root")
			    .setProperty("hibernate.connection.password", "")
			    .setProperty("hibernate.show_sql", "true")
			    .setProperty("hibernate.hbm2ddl.auto", "update");
}
