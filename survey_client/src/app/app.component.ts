import { Component } from '@angular/core';
import { SurveyPostService } from "app/survey-post.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[SurveyPostService]
})
export class AppComponent {
  title = 'Survey';
}
