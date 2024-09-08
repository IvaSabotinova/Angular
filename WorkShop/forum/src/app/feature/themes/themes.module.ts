import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemesRoutingModule } from './themes-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AsideComponent } from './aside/aside.component';
import { PostListComponent } from './post-list/post-list.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';
import { ThemesPageComponent } from './themes-page/themes-page.component';
import { ThemesNewPageComponent } from './themes-new-page/themes-new-page.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AsideComponent,
    PostListComponent,
    ThemeListComponent,
    ThemeListItemComponent,
    ThemesPageComponent,
    ThemesNewPageComponent,
    ThemeDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule, 
    ThemesRoutingModule
  ],
  exports: [
    // AsideComponent,
    // PostListComponent,
    // ThemeListComponent,
    // ThemeListItemComponent
  ]
})
export class ThemesModule { }
