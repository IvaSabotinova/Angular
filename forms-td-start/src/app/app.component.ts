import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm: NgForm
  defaultQuestion = 'teacher';
  answer = '';
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(form: NgForm ) {
    console.log('Submitted!');
    console.log(form);
    this.signUpForm.reset();
    }
  
}
