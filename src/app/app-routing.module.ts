import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { ServerHealthComponent } from './server-health/server-health.component';
import { ShareComponent } from './share/share.component';

const routes: Routes = [
  { path: '', redirectTo: '/check-server-status', pathMatch: 'full' },
  { path: 'check-server-status', component: ServerHealthComponent },
  { path: 'questions', component: QuestionsComponent },
  // TODO: find a solution to pass the id in the query string, e.g. /questions?question_id=QUESTION_ID
  { path: 'questions/:id', component: QuestionDetailComponent },
  { path: 'share', component: ShareComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
