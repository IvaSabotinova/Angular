import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { PostListComponent } from './post-list/post-list.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';
import { ThemesPageComponent } from './themes-page/themes-page.component';
import { ThemesRoutingModule } from './themes-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ThemesNewPageComponent } from './themes-new-page/themes-new-page.component';


@NgModule({
  declarations: [
    AsideComponent,
    PostListComponent,
    ThemeListComponent,
    ThemeListItemComponent,
    ThemesPageComponent,
    ThemesNewPageComponent
  ],
  imports: [
    CommonModule,
    ThemesRoutingModule,
    SharedModule
  ],
  exports: [
    // AsideComponent,
    // PostListComponent,
    // ThemeListComponent,
    // ThemeListItemComponent
  ]
})
export class ThemesModule { }
