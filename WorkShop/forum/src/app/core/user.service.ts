import { Injectable } from '@angular/core';

import { StorageService } from './storage.service';
import { Observable } from 'rxjs';
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
   isLogged: boolean = false;
   
  constructor(private storageService: StorageService, private httpClient: HttpClient) {
    this.isLogged = this.storageService.getItem('isLogged');
   }

  login() {
    this.isLogged = true;
    this.storageService.setItem('isLogged', true);
  }

  logout() {
    this.isLogged = false;
    this.storageService.setItem('isLogged', false);
  }

  register$(userDto: CreateUserDto): Observable<IUser> {
    return this.httpClient.post<IUser>(`${environment.apiUrl}/register`, userDto, { withCredentials: true })
  }
}
