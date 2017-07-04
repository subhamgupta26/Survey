package com.survey.dao;

import java.util.List;

import com.survey.bean.SurveyPost;

public abstract class SurveyDAO {
	public abstract boolean createSurvey(SurveyPost surveyPost);
	public abstract SurveyPost getSurveyPostById(int id);
	public abstract List<SurveyPost> getSurveys();
	public abstract boolean updateResponse(int selectedresponse);
	
}
