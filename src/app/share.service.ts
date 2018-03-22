import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';

@Injectable()
export class ShareService {

    private shareUrl = environment.backendBaseURL + '/share';

    constructor(private http: HttpClient) { }

    share(destinationEmail: string, contentURL): Observable<any> {
      return this.http.post<any>(this.shareUrl, {
        destination_email: destinationEmail,
        content_url: contentURL
      });
    }

}
