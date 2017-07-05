import { Injectable } from '@angular/core';
import {SurveyPost} from './survey-post';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SurveyPostService {
  private baseUrl: string = 'http://localhost:7080/survey-server/rest/api';
  constructor(private http:Http) { }
 getAll(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
        return this.http.get(`${this.baseUrl}/surveys`,{headers:headers})
      .map(res => res.json());
  }
  get(id:number){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
        return this.http.get(`${this.baseUrl}/surveys/${id}`,{headers:headers})
      .map(res => res.json());
 
 }
  addSurvey(surveyPost: SurveyPost){
    alert('Saving...');
    let headers = new Headers();
    headers.append('Content-Type','application/json');
     return this.http.post(`${this.baseUrl}/addSurvey`, surveyPost,{headers: headers})
      .map(res => res.json());
}

  updateResponse(selectedResponse:number){
    alert('Updating...');
    let headers = new Headers();
    headers.append('Content-Type','application/json');
      console.log("here");
      console.log(selectedResponse);
      return this.http.get("http://localhost:7080/survey-server/rest/api/updateResponse/"+selectedResponse,{headers:headers})
      .map(res => res.json());
}
}
