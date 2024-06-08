import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../core/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(private userService: UserService, private router: Router) { }

  LoginHandler() {
    this.userService.login();
    this.router.navigate(['/home']);
  }
}
