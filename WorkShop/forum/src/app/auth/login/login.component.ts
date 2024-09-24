import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../core/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
errorMessage: string = '';

  loginFormGroup: FormGroup = this.fb.group({
    email: new FormControl('', [Validators.required, emailValidator]),
    password: new FormControl(null, [Validators.required, Validators.minLength(5)])
  })

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  handleLogin() {
    this.errorMessage = '';
    this.userService.login(this.loginFormGroup.value).subscribe({
      next: user => {
        console.log(user)
        this.router.navigate(['/home']);
      },
      error: err => {
        this.errorMessage = err.error.message;
      },
      complete: () => {
        console.log('completed')
      }
    })
  }

  loginHandler() {
     //this.userService.login();
    // this.router.navigate(['/home']);
    console.log('button')
  }

  isControlTouchedAndInvalid(controlName: string): boolean {
    return this.loginFormGroup.controls[controlName].touched && this.loginFormGroup.controls[controlName].invalid;
  }

  showControlError(controlName: string, errorName: string): boolean {
    return this.loginFormGroup.controls[controlName].errors?.[errorName]
  }
}
