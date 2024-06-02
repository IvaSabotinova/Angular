import { Component } from '@angular/core';
import { UserService } from '../../core/user.service';
import { Router } from '@angular/router';

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
