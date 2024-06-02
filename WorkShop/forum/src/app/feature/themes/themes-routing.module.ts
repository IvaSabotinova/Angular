import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ThemesPageComponent } from './themes-page/themes-page.component';
import { ThemesNewPageComponent } from './themes-new-page/themes-new-page.component';


const routes: Routes = [
  {
    path: 'themes',
    component: ThemesPageComponent
  },
  {
    path: 'themes/new',
    component: ThemesNewPageComponent
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