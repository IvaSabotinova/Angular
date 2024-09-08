import { Injectable } from '@angular/core';

import { StorageService } from './storage.service';
import { map, Observable, tap } from 'rxjs';
import { IUser } from './interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface CreateUserDto {
  username: string;
  email: string;
  password: string;
  tel?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //isLogged: boolean = false;

  currentUser!: IUser;

  get isLogged() {
    return !!this.currentUser;
  }

  constructor(private storageService: StorageService, private httpClient: HttpClient) {
   //this.isLogged = this.storageService.getItem('isLogged');
  }

  login(userData: { email: string, password: string }) : Observable<IUser> {
    // this.isLogged = true;
     //this.storageService.setItem('isLogged', true);
    return this.httpClient.post<IUser>(`${environment.apiUrl}/login`, userData, {withCredentials: true, observe: 'response'})
      .pipe(
        tap(response=> console.log(response.body)), 
        map(response => response.body as IUser), 
        tap(user => this.currentUser = user));
  }  

  logout() {
    // this.isLogged = false;
    // this.storageService.setItem('isLogged', false);
  }

  register$(userDto: CreateUserDto): Observable<IUser> {
    return this.httpClient.post<IUser>(`${environment.apiUrl}/register`, userDto, { withCredentials: true });
  }

  getProfile$(): Observable<IUser> {
    return this.httpClient.get<IUser>(`${environment.apiUrl}/users/profile`, {withCredentials: true})
            .pipe(tap(user => this.currentUser = user))
  }
}
