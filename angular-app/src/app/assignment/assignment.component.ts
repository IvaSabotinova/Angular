import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.css'
  // styles: [`.getWhite{
  //  color: white;
  // }`]
})
export class AssignmentComponent {
  isShown = false;
  buttonClicks: any[] = [];

  logButtonClicks() {
    this.isShown = !this.isShown;
    //this.buttonClicks.push(this.buttonClicks.length + 1);
    this.buttonClicks.push(new Date());
    console.log(this.buttonClicks);
  }

}
