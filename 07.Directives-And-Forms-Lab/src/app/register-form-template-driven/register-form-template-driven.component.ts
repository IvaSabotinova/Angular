import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-form-template-driven',
  templateUrl: './register-form-template-driven.component.html',
  styleUrl: './register-form-template-driven.component.css'
})
export class RegisterFormTemplateDrivenComponent implements OnInit {
  @ViewChild("registerForm") registerForm!: NgForm;

  telCodes: string[] = [
    '+359',
    '+360',
    '+361'
  ];

  buildings: string[] = [
    'Designer',
    'Developer',
    'UX/UI'
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this.registerForm.reset();
  }
}
