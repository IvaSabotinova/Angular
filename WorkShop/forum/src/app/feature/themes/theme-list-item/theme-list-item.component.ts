import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { ITheme } from '../../../core/interfaces';
import { UserService } from '../../../core/user.service';

@Component({
  selector: 'app-theme-list-item',
  templateUrl: './theme-list-item.component.html',
  styleUrl: './theme-list-item.component.css'
})
export class ThemeListItemComponent implements OnChanges {
  @Input() themeItem!: ITheme;
  isLoggedIn = this.userService.isLogged;
  canSubscribe: boolean = false;

  constructor(private userService: UserService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.canSubscribe = !this.themeItem.subscribers.includes('5fa64b162183ce1728ff371d');
  }
}
