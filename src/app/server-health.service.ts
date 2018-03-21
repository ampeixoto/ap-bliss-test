import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServerHealthService {

  // TODO: Split Base URL (common location - environment settings) and the rest of the url (health)
  private serverHealthUrl = 'https://private-anon-81d2847e1a-blissrecruitmentapi.apiary-mock.com/health';

  constructor(private http: HttpClient) { }

  getServerHealth(): Observable<any> {
    return this.http.get<any>(this.serverHealthUrl);
  }

}
