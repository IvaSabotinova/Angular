import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ type: 'server', name: 'Test01 server', content: 'Test01 content' },
  { type: 'blueprint', name: 'Test02 server', content: 'Test02 content' }];

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onServerAdded(serverData: { type: string, serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: { type: string, serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  OnChangeFirst() {
    this.serverElements[0].name = 'Changed to Ivaaaaa';
    console.log(this.serverElements[0]);
    console.log('OnChangeFirst called!');
  }

  OnDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

  emittedNumber(number: number) {
    if (number % 2 === 0) {
      this.evenNumbers.push(number);     
    }
    else {
      this.oddNumbers.push(number);     
    }
  }

}
