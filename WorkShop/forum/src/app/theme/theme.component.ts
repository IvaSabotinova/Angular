import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { ITheme } from '../shared/interfaces';
import { tap } from 'rxjs';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css'
})
export class ThemeComponent implements OnInit {
  themes: ITheme[] = [];

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getThemes$().pipe(tap(result => {
      this.themes = result.sort((a, b) => b.subscribers.length - a.subscribers.length)
    })).subscribe();
  }


}
