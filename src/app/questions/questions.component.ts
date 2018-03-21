import { Component, OnInit, ElementRef, ViewChild, Renderer } from '@angular/core';
import { Question } from './question';
import { QUESTIONS } from './mock-questions';
import { QuestionService } from '../question.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.less']
})
export class QuestionsComponent implements OnInit {

  questions: Question[];

  searchTerm: string;

  @ViewChild('searchBox') searchBox: ElementRef;

  searchShown: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionsService: QuestionService,
    private renderer: Renderer) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      if (!params.has('question_filter')) {
        // No filter term
        this.getQuestions();
      } else if (params.get('question_filter').trim().length === 0) {
        // filter term empty -> focus search box and get list
        this.setFocusOnSearchBox();
        this.getQuestions();
      } else {
        // filter term available -> filter list
        this.searchTerm = params.get('question_filter');
        this.search();
      }
    });
  }

  getQuestions(): void {
    this.questionsService.getQuestions()
      .subscribe(questionsList => this.questions = questionsList);
  }

  search(): void {
    this.questionsService.searchQuestion(this.searchTerm)
      .subscribe(filteredQuestions => {
        this.searchShown = true;
        this.questions = filteredQuestions;
      });
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.searchShown = false;
    this.getQuestions();
  }

  setFocusOnSearchBox(): void {
    this.renderer.invokeElementMethod(this.searchBox.nativeElement, 'focus');
  }

  shareSearch(): void {
    // TODO: Check alternative way to send the absolute path
    this.router.navigate(['/share', {
      linkToShare: location.origin + location.pathname + `?question_filter=${this.searchTerm}`
    }]);
  }

}
