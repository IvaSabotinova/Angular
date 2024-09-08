import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemeService } from '../../../core/theme.service';

@Component({
  selector: 'app-themes-new-page',
  templateUrl: './themes-new-page.component.html',
  styleUrl: './themes-new-page.component.css'
})
export class ThemesNewPageComponent {

  constructor(private router: Router, private themeService: ThemeService) { }

  postNewTheme(newThemeData: NgForm) {
    this.themeService.addTheme$(newThemeData.value)
      .subscribe({
        next: theme => {
          console.log(theme);
          this.router.navigate(['/themes'])
        },
        error: error => {
          console.error(error);
        }
      })
  }

  navigateToHome() {
    this.router.navigate(['/'])
  }

}
