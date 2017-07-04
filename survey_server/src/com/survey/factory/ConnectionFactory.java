package com.survey.factory;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionFactory {
	private String url="jdbc:mysql://localhost:3306/survey";
	private String user="root";
	private String password="root";
	private String driverClass="com.mysql.jdbc.Driver";
	
	
	public ConnectionFactory() {
			}


	public Connection getConnection(){
		Connection connection=null;
		try{
			Class.forName("com.mysql.jdbc.Driver");
			connection=DriverManager.getConnection("jdbc:mysql://localhost:3306/survey?useSSL=false","root","root");
		}
		catch(ClassNotFoundException e){
			e.printStackTrace();
		}
		catch(SQLException e){
			e.printStackTrace();
			
		}
	
		if(connection==null){
			System.out.println("connection is null");
		}
		return connection; 
		
	}
}
