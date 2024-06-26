import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { throttleTime } from 'rxjs';

@Component({
  selector: 'app-reactive-forms-demo',
  templateUrl: './reactive-forms-demo.component.html',
  styleUrl: './reactive-forms-demo.component.css'
})
export class ReactiveFormsDemoComponent implements OnInit {
  operatingSystems: string[] = [
    'Windows 10',
    'Linux',
    'Mac OS'
  ];

  laptopGroup: FormGroup = this.fb.group({
    processor: new FormControl('', [Validators.required, Validators.minLength(5), peshoValidator], []),
    storage: new FormGroup ({
      ram: new FormControl(''),
      hardDisk: new FormControl(),
    }), 
    os: new FormControl()
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.laptopGroup.valueChanges.pipe(throttleTime(1500)).subscribe(result => {
      console.log(result) 
    });

    this.laptopGroup.get('processor')?.valueChanges.pipe(throttleTime(1500)).subscribe(() => {
      console.log(this.laptopGroup.get('processor')?.value) 
    });    
  }

  onSubmit(): void {
    // this.laptopGroup.controls['processor'].clearValidators();
    // this.laptopGroup.controls['processor'].updateValueAndValidity();
    console.log(this.laptopGroup.value)
  }
}

const peshoValidator: ValidatorFn = (control: AbstractControl) => {  
  if (control.value !== 'Pesho') {
    return { Pesho: true }
  }
  return null;
}
