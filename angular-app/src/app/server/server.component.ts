import { Component } from '@angular/core';

//decorator
@Component({
    selector: 'app-server', //any name we want but should be unique selector
    templateUrl: './server.component.html',
    styles: [`.online{
        color: white;
    }`],
})

export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}