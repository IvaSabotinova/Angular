import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]', //css attribute
  //selector: '.app-servers', //class
  templateUrl: './servers.component.html',
  //template: `<app-server></app-server><app-server></app-server>`,
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test server';
  username = ''; 
  serverCreated = false;
  servers = ['Test Server 01', 'Test Server 02'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }

  ngOnInit(): void {

  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    console.log(this.servers);
    
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    //this.serverName = event.target.value; // when event: any
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(this.serverName);
  }

}
