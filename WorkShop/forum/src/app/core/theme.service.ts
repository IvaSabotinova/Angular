import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { IPost, ITheme } from './interfaces';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private httpClient: HttpClient) { }

  getThemes$(): Observable<ITheme[]> {
    return this.httpClient.get<ITheme[]>(apiUrl + '/themes');
  }

  getThemeById$(themeId: string): Observable<ITheme<IPost>> {
    return this.httpClient.get<ITheme<IPost>>(apiUrl + `/themes/${themeId}`);
  }
}
