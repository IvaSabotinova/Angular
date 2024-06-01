import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from './interfaces';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PostService{

  constructor(private httpClient: HttpClient) { }

  getRecentPosts$(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(apiUrl + '/posts', {
      params: new HttpParams({ fromObject: { limit: 5 } })
    })
  }

  // getRecentPosts$(limit?: number): Observable<IPost[]> {
  //   return this.httpClient.get<IPost[]>(apiUrl + `/posts${limit ? `?limit=${limit}`: ''}`)
  //}  
}



