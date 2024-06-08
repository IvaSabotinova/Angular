import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';

import { ITheme } from '../../../core/interfaces';
import { ThemeService } from '../../../core/theme.service';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrl: './theme-list.component.css'
})
export class ThemeListComponent implements OnInit {
  themeList: ITheme[] = [];

  constructor(private themeService: ThemeService) {}
  
  ngOnInit(): void {    
    this.themeService.getThemes$().pipe(tap(themeList => {
      this.themeList = themeList.sort((a, b) => b.subscribers.length - a.subscribers.length)
    })).subscribe();
  }

}
