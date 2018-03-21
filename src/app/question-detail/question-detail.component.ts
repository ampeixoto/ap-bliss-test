import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../questions/question';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.less']
})
export class QuestionDetailComponent implements OnInit {

  @Input() question: Question = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionService: QuestionService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getQuestion();
  }

  getQuestion(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.questionService.getQuestion(id)
      .subscribe(question => this.question = question);
  }

  goBack(): void {
    this.location.back();
  }

  vote(questionToVote): void {
    // TODO: increment the field votes of the selected choice (https://angular.io/guide/structural-directives#ng-container-to-the-rescue)
    this.questionService.voteQuestion(questionToVote)
      .subscribe(votedQuestion => this.goBack());
  }

  shareQuestion(): void {
    // TODO: Check alternative way to send the absolute path
    this.router.navigate(['/share', {
      linkToShare: location.origin + this.location.prepareExternalUrl(this.router.url)
    }]);
  }

}
