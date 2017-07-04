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

// saveSurveyPostDetails(){
// this.surveyPostService.save(this.surveyPost);
//
updateResponse(selectedResponse){
  //alert(selectedResponse);
  if(selectedResponse==null){
    alert("please select something");
  }
  else{
  console.log(selectedResponse);
  this.surveyPostService.updateResponse(selectedResponse).subscribe(data=>{
    console.log(data);
    this.router.navigate(['/']);
  },
    err => {
      console.log(err);
      return false;
    });
  }

}

// this.surveyService.addVoteCount(this.id).subscribe(survey => {
//       // console.log(survey.choice)
//       // this.survey=survey
//       // this.survey.forEach(element => {
//       //   console.log(element)
//       // });
//       console.log(survey)

//       this.survey=survey.Choices;
//       this.Title=survey.title;
//       console.log(this.survey);

//       //  this.flashMessage.show('you have successfully submitted the survey', {cssClass: 'alert-success', timeout: 3000});
//         this.router.navigate(['/']);
//     },
//     err => {
//       console.log(err);
//       return false;
//     });
//   }
 }


