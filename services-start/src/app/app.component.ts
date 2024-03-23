import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent implements OnInit {
  accounts: { name: string, status: string }[] = []; 
  // activeUsers = ['Max', 'Anna'];
  // inactiveUsers = ['Chris', 'Manu'];

  constructor() { }

  ngOnInit(): void {
   // this.accounts = this.accountService.accounts;   
  }

  onSetToActive(id: number) {    
    // this.activeUsers.push(this.inactiveUsers[id]);
    // this.inactiveUsers.splice(id, 1);
  }
  onSetToInactive(id: number) {
    // this.inactiveUsers.push(this.activeUsers[id]);
    // this.activeUsers.splice(id, 1);
  }

}
