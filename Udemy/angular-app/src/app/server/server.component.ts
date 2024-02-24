import { Component } from '@angular/core';

//decorator
@Component({
    selector: 'app-server', //any name we want but should be unique selector
    templateUrl: './server.component.html',
    styleUrls: [],
})

export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    getServerStatus() {
        return this.serverStatus;
    }
}