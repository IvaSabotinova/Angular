import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() emitNumber = new EventEmitter<number>();  
  id: any;
  count: number = 0;
  constructor() {

  }

  ngOnInit(): void {
  }

  StartGame() {
    this.id = setInterval(() => {    
      this.emitNumber.emit(this.count + 1)
      this.count++;
    }, 1000);
  }

  PauseGame() {
    clearInterval(this.id);
  }


}
