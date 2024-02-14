import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //template: `<h1>Hello, world!!! My first app {{title}}</h1>`,
  templateUrl: './app.component.html',
  //styles: `h1 { color: red; }`
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'components-dataBinding';
}
