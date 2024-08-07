import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { emailValidator, passwordMatch } from '../util';
import { CreateUserDto, UserService } from '../../core/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent implements OnInit {

  passwordControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(5)]);

 get passwordFormGroup() : FormGroup{
  return this.registerFormGroup.controls['passwords'] as FormGroup;
 }

  registerFormGroup: FormGroup = this.fb.group({
    username: [null, [Validators.required, Validators.minLength(5)]],
    email: [null, [Validators.required, emailValidator]],
    telRegion: new FormControl(''),
    tel: new FormControl(''),
    passwords: new FormGroup({
      password: this.passwordControl,
      rePassword: new FormControl('', [Validators.required, passwordMatch(this.passwordControl)])
    }),

  })
  constructor(
    private fb: FormBuilder, 
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  handleRegister() {
    const { username, email, passwords, tel, telRegion } = this.registerFormGroup.value;
    
    const data: CreateUserDto = {
       username: username,
       email: email,
       password: passwords.password,
       ...(tel && { tel: telRegion + tel })     
    }
    
    // if (tel){
    //   data.tel = telRegion + tel;
    // }

    this.userService.register$(data).subscribe(() => {
      this.router.navigate(['/home'])
    })
  }

  isControlTouchedAndInvalid(controlName: string, formGroup: FormGroup = this.registerFormGroup): boolean {
    return formGroup.controls[controlName].touched && formGroup.controls[controlName].invalid;
  }

  showControlError(controlName: string, formGroup: FormGroup = this.registerFormGroup, errorName: string){
     return formGroup.controls[controlName].errors?.[errorName]
  }

}
