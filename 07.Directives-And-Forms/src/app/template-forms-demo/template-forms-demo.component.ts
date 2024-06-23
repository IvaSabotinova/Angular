import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-forms-demo',
  templateUrl: './template-forms-demo.component.html',
  styleUrl: './template-forms-demo.component.css'
})
export class TemplateFormsDemoComponent implements OnInit, AfterViewInit {
  @ViewChild("laptopForm") laptopForm!: NgForm;
  @ViewChild("processor") processor!: NgModel;

  operatingSystems: string[] = [
    'Windows 10',
    'Linux',
    'Mac OS'
  ];

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    console.log(this.laptopForm.value);
    console.log(this.processor);
  }

  onSubmit() {
    console.log(this.laptopForm.value)
  }

  clearForm() {
    // this.laptopForm.setValue({
    //   'processor': '',
    //   'hardDisk': '',
    //   'ram': '',
    //   'os': '',
    // });
    // this.laptopForm.form.markAsUntouched();
    this.laptopForm.reset();
  }
}
