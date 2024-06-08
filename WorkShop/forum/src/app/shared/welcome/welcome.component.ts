import { Component } from '@angular/core';

import { UserService } from '../../core/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  isLoggedIn: boolean = this.userService.isLogged;

  constructor(private userService: UserService) { }

}
