import { Component } from '@angular/core';

import { UserService } from '../../../core/user.service';

@Component({
  selector: 'app-themes-page',
  templateUrl: './themes-page.component.html',
  styleUrl: './themes-page.component.css'
})
export class ThemesPageComponent {
   isLoggedIn: boolean = this.userService.isLogged;

   constructor(private userService: UserService) {}
}
