import { Component, OnInit } from '@angular/core';
import {SurveyPost} from '../survey-post';
import { SurveyPostService } from "../survey-post.service";


@Component({
  selector: 'app-survey-post-list',
  template: `

  <div class="col-lg-6">
<app-survey-post-create></app-survey-post-create>
    </div>
  <div class="col-lg-6">
    
 <table class="table table-striped table-hover " align="left">   
  <thead>
    <tr>
      <th>#</th>
      <th>Title</th>
      <th>Count</th>
    </tr>
  </thead>
   <tbody>
    <tr *ngFor="let surveyPost of surveyPosts" >
     <td> <a [routerLink]="['/surveys',surveyPost.id]">{{surveyPost.title}} </a></td>
    <td>{{surveyPost.title}}</td>
    <td> {{surveyPost.count}}</td>
    </tr>
    </tbody>
    </table>  
    </div>
    
   

      `,
  styleUrls: ['./survey-post-list.component.scss']
})
export class SurveyPostListComponent implements OnInit {

  surveyPosts:SurveyPost[]=[];
   constructor(private surveyPostService:SurveyPostService) {
    
   }

  ngOnInit() {
    //this.surveyPosts=this.surveyPostService.getAll();
    this.surveyPostService.getAll().subscribe(p=>this.surveyPosts=p);
  //  this.surveyPostService.getAll().subscribe(surveyPosts => {
  //     console.log(surveyPosts)
  //   this.surveyPosts.push(surveyPosts);
  //     console.log(this.surveyPosts)
  //   },
  //   err => {
  //     console.log(err);
  //     return false;
  //   });

  // this.surveyPostService.getAll().then(surveyPosts=>this.surveyPosts=surveyPosts);
  }


}
