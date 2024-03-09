import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 navigateTo = 'recipes'
  title = 'recipe-book';

  componentToShow(component: string) {  
    this.navigateTo = component;
  }
}
