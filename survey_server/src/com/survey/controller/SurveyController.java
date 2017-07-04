package com.survey.controller;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.survey.bean.SurveyPost;
import com.survey.dao.SurveyDAO;
import com.survey.dao.SurveyDAOImpl;

@Path("/api")
public class SurveyController {
	SurveyDAO sdao=new SurveyDAOImpl();

	@GET
	@Path("/surveys/{id}")
	@Produces(MediaType.APPLICATION_JSON)
		public SurveyPost getSurveyPostById(@PathParam("id") int id){
			return sdao.getSurveyPostById(id);
		}
	
	@GET
	@Path("/surveys")
	@Produces(MediaType.APPLICATION_JSON)
		public List<SurveyPost> getSurveys(){
			return sdao.getSurveys();
		}
	
	@POST
	@Path("/addSurvey")
	@Consumes(MediaType.APPLICATION_JSON)
		public boolean createSurvey(SurveyPost surveyPost){
			System.out.println("inside add survey");
			return sdao.createSurvey(surveyPost);
		
	}	
	
	@GET
	@Path("/updateResponse/{selectedResponse}")
	@Produces(MediaType.APPLICATION_JSON)
	public boolean updateResponse(@PathParam("selectedResponse") int selectedResponse){
		System.out.println("here");
		return sdao.updateResponse(selectedResponse);
		
		//return Response.status(200).entity("post").build();
	}
	
}

