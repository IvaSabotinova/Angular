import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

import { IPost, ITheme } from '../../../core/interfaces';
import { ThemeService } from '../../../core/theme.service';
import { UserService } from '../../../core/user.service';

@Component({
  selector: 'app-theme-details',
  templateUrl: './theme-details.component.html',
  styleUrl: './theme-details.component.css'
})
export class ThemeDetailsComponent implements OnInit {
  theme!: ITheme<IPost>;
  themeId: string = '';
  isLoggedIn = this.userService.isLogged;
  canSubscribe: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private themeService: ThemeService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(params => {
    //   this.themeId = params['themeId'];
    //   this.themeService.getThemeById$(this.themeId).subscribe(theme => {
    //     this.theme = theme;
    //   });
    // });

    this.activatedRoute.params.pipe(
      switchMap(params => {
        this.themeId = params['themeId'];
        return this.themeService.getThemeById$(this.themeId)
      }))
      .subscribe(theme => {
        this.theme = theme; 
        this.canSubscribe = !theme.subscribers.includes('5fa64b162183ce1728ff371d');          
      })
  }

  canLike(post: IPost): boolean{ 
     return !post.likes.includes('5fa64b162183ce1728ff371d')
  }    
}
