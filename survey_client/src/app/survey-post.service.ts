import { Injectable } from '@angular/core';
import {SurveyPost} from './survey-post';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

const SURVEYPOSTS:SurveyPost[]=[
    {id:1,title:'Survey1',description:'desc1',count:0,availableResponses:[]},
    {id:2,title:'Survey2',description:'desc2',count:0,availableResponses:[]},
    {id:3,title:'Survey3',description:'desc3',count:0,availableResponses:[]},
    {id:4,title:'Survey4',description:'desc4',count:0,availableResponses:[]},
    ];

    function mapSurveyPost(response:Response): SurveyPost[]{
// The response of the API has a results
// property with the actual results
return response.json().results.map(toSurveyPost)
}

function toSurveyPost(r:any): SurveyPost{
  // console.log(r.availableResponses);
let surveypost = <SurveyPost>({
id: r.id,
title: r.title,
description: r.description,
count: r.count,






});
console.log("hey");
console.log(this.surveypost.id);
console.log(this.surveypost.availableResponses);

console.log('Parsed surveypost:', surveypost);
return surveypost;
}

@Injectable()
export class SurveyPostService {
  private baseUrl: string = 'http://localhost:7080/survey-server/rest/api';
  constructor(private http:Http) { }

 /* getAll():SurveyPost[]{
    return SURVEYPOSTS;
  }
 
  getAll(): Observable<SurveyPost[]>{
    alert(JSON.stringify(this.http
.get(`${this.baseUrl}/surveys`)));
let surveyPost$ = this.http
.get(`${this.baseUrl}/surveys`, {headers: this.getHeaders()})
.map(mapSurveyPost);
return surveyPost$;
}
private getHeaders(){
  let headers = new Headers();
headers.append('Accept', 'application/json');
return headers;
}
*/ 

 getAll(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
        return this.http.get(`${this.baseUrl}/surveys`,{headers:headers})
      .map(res => res.json());
  }

// getAll():Promise<SurveyPost[]>{
//   console.log("in here");
//   return this.http.get(this.baseUrl)
//   .toPromise()
//   .then(response => response.json().data as SurveyPost[])
//   .catch(this.handleError);

// }
// private handleError(error: any): Promise<any> {
//   console.error('An error occurred', error); // for demo purposes only
//   return Promise.reject(error.message || error);
// }
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
      //  let url = "http://localhost:8080/survey/addSurvey";
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

private clone(object: any){
return JSON.parse(JSON.stringify(object));
}
}
