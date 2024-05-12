import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost, ITheme } from './shared/interfaces';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private httpClient: HttpClient) { }

  getThemes$(): Observable<ITheme[]> {
    return this.httpClient.get<ITheme[]>(environment.url + '/themes');
  }

  getRecentPosts$(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(environment.url + '/posts', {
      params: new HttpParams({ fromObject: { limit: 5 } })
    })
  }

}
