import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'gender': new FormControl('male'),
      'number': new FormControl(null)
    })
  }

  onSubmit() {
    console.log(this.form);
  }

  onInput(event) {
    let value = event.target.value;
    console.log(parseFloat(value));
    
    if (typeof value === 'string') {
      if (value.indexOf('лв') != -1) { 
          value = value.replace('лв', '').trim();
      } 

      value = Number(value.replace(/ /g, ''));
    }
    
    value = value;
  console.log(value);
  
    
    
    }
}
