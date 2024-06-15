import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrl: './directives-demo.component.css'
})
export class DirectivesDemoComponent {
  shouldFontBeBig: boolean = false;
  shouldShowText: boolean = false;
  styling = { 'backgroundColor': 'red', 'color': 'blue' };

}
