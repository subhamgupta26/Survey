import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { SurveyPostListComponent } from "./survey-post-list/survey-post-list.component";
import { SurveyPostDetailsComponent } from "./survey-post-details/survey-post-details.component";


const routes: Routes = [
{
path: 'surveys',
component: SurveyPostListComponent,
},
{
    path:'surveys/:id',
    component:SurveyPostDetailsComponent,
},
{
path: '',
redirectTo: '/surveys',
pathMatch: 'full'
},
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule{}