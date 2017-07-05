import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import {SurveyPost} from '../survey-post';
import { SurveyPostService } from "../survey-post.service";
import {Router} from '@angular/router'


@Component({
  selector: 'app-survey-post-create',
  templateUrl: './survey-post-create.component.html',
  styleUrls: ['./survey-post-create.component.scss']
})
export class SurveyPostCreateComponent implements OnInit {

    public myForm: FormGroup;
     public router:Router;
     public surveyPostService:SurveyPostService;
     

    constructor(private _fb: FormBuilder, surveyPostService:SurveyPostService, router: Router) { 

        this.router=router;
        this.surveyPostService=surveyPostService;
    }

    ngOnInit() {
        this.myForm = this._fb.group({
            title: ['', [Validators.required, Validators.minLength(5)]],
            description:[''],
            availableResponses: this._fb.array([
                this.initResponses(),
            ])
        });
    }

    initResponses() {
        return this._fb.group({
            name: ['', Validators.required],
       
        });
    }

    addResponses() {
        const control = <FormArray>this.myForm.controls['availableResponses'];
        control.push(this.initResponses());
    }

    removeResponses(i: number) {
        const control = <FormArray>this.myForm.controls['availableResponses'];
        control.removeAt(i);
    }

    save(model: SurveyPost) {
     
         console.log(this.myForm.value);
            this.surveyPostService.addSurvey(this.myForm.value).subscribe(data => {
      {        
                if(data===true){
                    alert("Saved successfully");
                    
                }
                else{
                    alert("Something went wrong")
                }
      
            window.location.reload();

      } 
    });
    
   }
    }


