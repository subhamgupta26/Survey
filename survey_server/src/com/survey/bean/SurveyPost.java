package com.survey.bean;

import java.util.ArrayList;
import java.util.List;

public class SurveyPost {
	private int id;
	private String title;
	private String description;
	private List<Response> availableResponses=new ArrayList<Response>();
	private int count=0;
	
	public SurveyPost() {
		super();
	}
	public SurveyPost(String title, String description,
			List<Response> availableResponses, int count) {
		super();
		this.title = title;
		this.description = description;
		this.availableResponses = availableResponses;
		this.count = count;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public List<Response> getAvailableResponses() {
		return availableResponses;
	}
	public void setAvailableResponses(List<Response> availableResponses) {
		this.availableResponses = availableResponses;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	@Override
	public String toString() {
		return "SurveyPost [id=" + id + ", title=" + title + ", description="
				+ description + ", availableResponses=" + availableResponses
				+ ", count=" + count + "]";
	}
	
	
}
