import { Component, OnInit,OnDestroy } from '@angular/core';

import { ActivatedRoute,Router } from '@angular/router';

import {SurveyPost} from '../survey-post';
import { SurveyPostService } from "../survey-post.service";


@Component({
  selector: 'app-survey-post-details',
  templateUrl:'./survey-post-details.component.html' ,
  styles: []
})
export class SurveyPostDetailsComponent implements OnInit {

  surveyPost:SurveyPost;
  sub:any;
  
  constructor(private surveyPostService:SurveyPostService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(){
this.sub=this.route.params.subscribe(params => {
let id = Number.parseInt(params['id']);
 this.surveyPostService.get(id);
   this.surveyPostService.get(id).subscribe(surveyPost => {
      console.log(surveyPost)
    this.surveyPost=surveyPost;
      console.log(this.surveyPost)
    },
    err => {
      console.log(err);
      return false;
    });
});

  }
  ngOnDestroy(){
this.sub.unsubscribe();
}
gotoSurveysList(){
let link = ['/surveys'];
this.router.navigate(link);
}
updateResponse(selectedResponse){
  if(selectedResponse==null){
    alert("please select something");
  }
  else{
  console.log(selectedResponse);
  this.surveyPostService.updateResponse(selectedResponse).subscribe(data=>{
    if(data===true){
      alert("Saved Successfully");
      this.router.navigate(['/']);
    }
    else{
      alert("Something Went Wrong");
    }
  },
    err => {
      console.log(err);
      return false;
    });
  }

}
 }


