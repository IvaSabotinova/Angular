import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   isLogged: boolean = false;
   
  constructor(private storageService: StorageService) {
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
}
