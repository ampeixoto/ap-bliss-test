import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class ServerHealthService {

  private serverHealthUrl = environment.backendBaseURL + '/health';

  constructor(private http: HttpClient) { }

  getServerHealth(): Observable<any> {
    return this.http.get<any>(this.serverHealthUrl);
  }

}
