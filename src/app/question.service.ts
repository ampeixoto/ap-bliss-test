import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question } from './questions/question';
import { QUESTIONS } from './questions/mock-questions';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable()
export class QuestionService {

  // TODO: add limit and offset params to URL
  private questionsUrl = environment.backendBaseURL + '/questions';

  constructor(private http: HttpClient) { }

  // TODO: handle error
  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionsUrl);
  }

  // TODO: handle error
  getQuestion(id: number): Observable<Question> {
    const url = `${this.questionsUrl}/${id}`;
    return this.http.get<Question>(url);
  }

  // TODO: handle error
  voteQuestion(questionToVote: Question): Observable<Question> {
    const url = `${this.questionsUrl}/${questionToVote.id}`;
    return this.http.put<Question>(url, questionToVote);
  }

  // TODO: handle error
  /* Get questions that contain a search term */
  searchQuestion(term: string): Observable<Question[]> {
    if (!term.trim()) {
      // if there is not search term, return empty array.
      return of([]);
    }
    return this.http.get<Question[]>(`${this.questionsUrl}?filter=${term}`);
  }

}
