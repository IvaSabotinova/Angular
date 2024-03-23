import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../user.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {
 // @Input() users: string[];
 users: string[];
  
  //@Output() userSetToInactive = new EventEmitter<number>();
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.activeUsers;
  }

  onSetToInactive(id: number) {
    //this.userSetToInactive.emit(id);
    this.userService.addToInactive(id);   
    
  }



}
