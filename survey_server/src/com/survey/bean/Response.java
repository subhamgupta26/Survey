package com.survey.bean;

public class Response {
	
	private int id;
	private String name;
	private int totalSelectedBy;
	
	public Response() {
		super();
	}
	public Response(String name, int totalSelectedBy) {
		super();
		this.name = name;
		this.totalSelectedBy = totalSelectedBy;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getTotalSelectedBy() {
		return totalSelectedBy;
	}
	public void setTotalSelectedBy(int totalSelectedBy) {
		this.totalSelectedBy = totalSelectedBy;
	}
	@Override
	public String toString() {
		return "Response [name=" + name + ", totalSelectedBy="
				+ totalSelectedBy + "]";
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
}
