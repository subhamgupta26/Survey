import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SurveyPostListComponent } from './survey-post-list/survey-post-list.component';
import { SurveyPostService } from "./survey-post.service";
import { SurveyPostDetailsComponent } from './survey-post-details/survey-post-details.component';

import { AppRoutingModule } from "./app-routing.module";
import { SurveyPostCreateComponent } from './survey-post-create/survey-post-create.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyPostListComponent,
    SurveyPostDetailsComponent,
    SurveyPostCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [SurveyPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
