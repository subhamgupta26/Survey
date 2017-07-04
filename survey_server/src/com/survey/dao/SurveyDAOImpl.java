package com.survey.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.survey.bean.Response;
import com.survey.bean.SurveyPost;
import com.survey.factory.ConnectionFactory;

public class SurveyDAOImpl extends SurveyDAO {

	
	PreparedStatement ps=null;
	ResultSet rs=null;
	ConnectionFactory cf=new ConnectionFactory();
	Connection con=cf.getConnection();
	@Override
	public boolean createSurvey(SurveyPost surveyPost) {
		//con=cf.getConnection();
		int id=fetchNewId()+1;
		try{
			ps=con.prepareStatement("Insert into survey_post values(?,?,?,?)");
			ps.setInt(1,id);
			ps.setString(2,surveyPost.getTitle());
			ps.setString(3,surveyPost.getDescription());
			ps.setInt(4, surveyPost.getCount());
			int row=ps.executeUpdate();
			if(row>0){
				System.out.println("here");
				addAvailableResponses(surveyPost.getAvailableResponses(), id);
				return true;
			}
			
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return false;
	}
	@Override
	public SurveyPost getSurveyPostById(int id) {
		//con=cf.getConnection();

		SurveyPost post=new SurveyPost(); 
		try {
			ps=con.prepareStatement("select * from survey_post where id=?");
			ps.setInt(1,id);
			rs=ps.executeQuery();
			while(rs.next()){
				post.setId(rs.getInt("id"));
				post.setTitle(rs.getString("title"));
				post.setDescription(rs.getString("description"));
				post.setCount(rs.getInt("count"));
				post.setAvailableResponses(getResponsesBySurveyPostid(id));
				System.out.println(post);
				
				
			}
			
		
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return post;
	}
	
	public int fetchNewId(){
		//con=cf.getConnection();
		int nextId=0;
		try {
			ps=con.prepareStatement("select max(id) from survey_post");
			rs=ps.executeQuery();
			
			while(rs.next()){
				//System.out.println("inside");
				nextId=rs.getInt(1);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return nextId;
	}
	
	public List<Response> getResponsesBySurveyPostid(int id) throws SQLException{
		//con=cf.getConnection();
		Response response=null;
		PreparedStatement pst=null;
		ResultSet rs2=null;
		List<Response> responses=new ArrayList<Response>();
		pst=con.prepareStatement("select * from response where survey_post_id=?");
		pst.setInt(1, id);
		rs2=pst.executeQuery();
		while(rs2.next()){
			response=new Response();
			response.setId(rs2.getInt("id"));
			response.setName(rs2.getString("name"));
			response.setTotalSelectedBy(rs2.getInt("total_selected_by"));
			responses.add(response);
		}

		return responses;
	}
	@Override
	public List<SurveyPost> getSurveys() {
		//con=cf.getConnection();
		List<SurveyPost> surveys=new ArrayList<SurveyPost>();
		try {
			ps=con.prepareStatement("select * from survey_post");
						rs=ps.executeQuery();
			while(rs.next()){
				SurveyPost post=new SurveyPost(); 
				
				post.setId(rs.getInt("id"));
				post.setTitle(rs.getString("title"));
				post.setDescription(rs.getString("description"));
				post.setCount(rs.getInt("count"));
				post.setAvailableResponses(getResponsesBySurveyPostid(post.getId()));
				System.out.println(post);
				surveys.add(post);
				
			}
			
		
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return surveys;
	}
	
	public void addAvailableResponses(List<Response> availableResponses,int surveyPostId){
		//con=cf.getConnection();
		System.out.println("here2"+surveyPostId);
		for(Response r:availableResponses){
			System.out.println(r.getName());
			try {
				ps=con.prepareStatement("Insert into response(name,total_selected_by ,survey_post_id ) values(?,?,?)");
				ps.setString(1, r.getName());
				ps.setInt(2, r.getTotalSelectedBy());
				ps.setInt(3, surveyPostId);
				ps.executeUpdate();
				
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
	}
	@Override
	public boolean updateResponse(int selectedresponse) {
		//con=cf.getConnection();
		try {
			int surveyPostId=0;
			System.out.println(selectedresponse);
			ps=con.prepareStatement("update response set total_selected_by=total_selected_by+1 where id=?");
			ps.setInt(1, selectedresponse);
			int row=ps.executeUpdate();
			ps=con.prepareStatement("select survey_post_id from response where id=?");
			ps.setInt(1, selectedresponse);
			rs=ps.executeQuery();
			while(rs.next()){
				surveyPostId=rs.getInt("survey_post_id");
			}
			
			ps=con.prepareStatement("update survey_post set count=count+1 where id=?");
			ps.setInt(1, surveyPostId);
			row=ps.executeUpdate();
			System.out.println(rs);
			if(row==1){
				return true;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return false;
	}
	
	

	

}
