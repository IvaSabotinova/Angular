import { Component } from '@angular/core';

import { UserService } from '../user.service';
import { IUser } from '../interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  get isLogged(): boolean {
     return this.userService.isLogged;
  }

  get currentUser(): IUser {    
    return this.userService.currentUser;
  }

  constructor(private userService: UserService) { }

  // LoginHandler() {
  //   this.userService.login();
  // }
  
  LogoutHandler() {
    this.userService.logout();
  }

}
