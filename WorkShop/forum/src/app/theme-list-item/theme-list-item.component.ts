import { Component, Input } from '@angular/core';
import { ITheme } from '../interfaces';

@Component({
  selector: 'app-theme-list-item',
  templateUrl: './theme-list-item.component.html',
  styleUrl: './theme-list-item.component.css'
})
export class ThemeListItemComponent {
 @Input() themeItem!: ITheme;

 constructor(){}
}
