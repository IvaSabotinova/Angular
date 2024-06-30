import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { emailValidator } from '../util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerFormGroup: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: [null, [Validators.required, emailValidator]],
    tel: new FormControl(''),
    passwords: new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      rePassword: new FormControl('', [Validators.required])
    }),

  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  handleRegister() {
 
  }

}
