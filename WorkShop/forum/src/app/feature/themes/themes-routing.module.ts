import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { authGuard } from '../../core/guards/auth.guard';

import { ThemesPageComponent } from './themes-page/themes-page.component';
import { ThemesNewPageComponent } from './themes-new-page/themes-new-page.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';


const routes: Routes = [
  {
    path: 'themes',
    component: ThemesPageComponent
  },
  {
    path: 'themes/new',
  //  canActivate: [authGuard],
    component: ThemesNewPageComponent
  },
  {
    path: 'themes/:themeId',
    component: ThemeDetailsComponent
  }  
]

@NgModule({
  //declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ThemesRoutingModule { }