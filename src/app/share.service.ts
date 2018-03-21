import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShareService {

    // TODO: Split Base URL (common location - environment settings) and the rest of the url (share)
    private shareUrl = 'https://private-anon-81d2847e1a-blissrecruitmentapi.apiary-mock.com/share';

    constructor(private http: HttpClient) { }

    share(destinationEmail: string, contentURL): Observable<any> {
      return this.http.post<any>(this.shareUrl, {
        destination_email: destinationEmail,
        content_url: contentURL
      });
    }

}
