import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITheme } from './interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private httpClient: HttpClient) { }

  getThemes$(): Observable<ITheme[]> {
    return this.httpClient.get<ITheme[]>(apiUrl + '/themes');
  }
}
